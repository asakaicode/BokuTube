import { Card, CardActionArea } from '@mui/material'
import Description from './components/Description'
import MiniMovie from './components/MiniMovie'

const MovieCard: React.FC = () => {
  return (
    <Card className="w-[517px] h-[335px]">
      <CardActionArea onClick={() => console.log('Movie clicked')}>
        <MiniMovie src={'/sample.webm'} />
        <Description description={'Movie Description'} />
      </CardActionArea>
    </Card>
  )
}

export default MovieCard
