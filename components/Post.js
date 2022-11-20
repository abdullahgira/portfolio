const Post = ({children}) => {
  return (
    <article className="prose" dangerouslySetInnerHTML={{__html: children}} />
  )
}

export default Post
