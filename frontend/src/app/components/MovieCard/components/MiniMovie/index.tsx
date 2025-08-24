const MiniMovie: React.FC<{ src: string }> = ({ src }) => {
  return <video src={src} controls />
}

export default MiniMovie
