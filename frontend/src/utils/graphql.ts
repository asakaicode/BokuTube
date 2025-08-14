import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query'
import { DocumentNode } from 'graphql'

export const useGraphQLQuery = <T>(
  query: DocumentNode,
  variables: Record<string, unknown>,
): UseQueryResult<T> =>
  useQuery({
    queryKey: [query, variables],
    queryFn: () => fetchWithGraphQL<T>(query, variables),
  })

export const useGraphQLMutation = <
  TData,
  TVariables extends Record<string, unknown>,
>(
  mutation: DocumentNode,
  options?: Omit<UseMutationOptions<TData, Error, TVariables>, 'mutationFn'>,
): UseMutationResult<TData, Error, TVariables> =>
  useMutation<TData, Error, TVariables>({
    mutationFn: (variables: TVariables) =>
      fetchWithGraphQL<TData>(mutation, variables),
    ...options,
  })

const fetchWithGraphQL = async <T>(
  query: DocumentNode,
  variables: Record<string, unknown>,
): Promise<T> => {
  const res = await fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()

  if (json.errors) {
    throw new Error(JSON.stringify(json.errors))
  }

  return json.data as T
}
