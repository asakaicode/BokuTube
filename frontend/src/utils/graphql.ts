import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from '@tanstack/react-query'

export const useGraphQLQuery = <T>(
  query: string,
  variables: Record<string, unknown>,
): UseQueryResult<T> => {
  return useQuery({
    queryKey: [query, variables],
    queryFn: () => fetchWithGraphQL<T>(query, variables),
  })
}

export const useGraphQLMutation = <
  TData,
  TVariables extends Record<string, unknown>,
>(
  mutation: string,
  options?: Omit<UseMutationOptions<TData, Error, TVariables>, 'mutationFn'>,
): UseMutationResult<TData, Error, TVariables> => {
  const queryClient = useQueryClient()
  return useMutation<TData, Error, TVariables>({
    mutationFn: (variables: TVariables) =>
      fetchWithGraphQL<TData>(mutation, variables),
    ...options,
  })
}

const fetchWithGraphQL = async <T>(
  query: string,
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
