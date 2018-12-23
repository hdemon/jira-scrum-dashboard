const Posts = (props: any) => {
  return (
    <ul>
      {props.posts.map((post: any, i: number) => (
        <li key={i}>{post.title}</li>
      ))}
    </ul>
  )
}

export default Posts
