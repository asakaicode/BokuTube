import { Typography } from '@mui/material'

const Description: React.FC<{ description: string }> = ({ description }) => {
  return (
    <Typography variant="caption" color="text.secondary">
      {description}
    </Typography>
  )
}

export default Description
