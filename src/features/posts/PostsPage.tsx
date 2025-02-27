import React from "react"
import usePosts from "./hooks/usePosts"
import { PostCard } from "./components/PostCard"

const PostsPage: React.FC = () => {
  const { posts, isLoading, isError } = usePosts()

  if (isLoading) return <div>Cargando...</div>
  if (isError) return <div>Error al cargar las publicaciones.</div>

  return (
    <div className='container mx-auto my-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {posts?.map((post) => <PostCard key={post.id} title={post.title} body={post.body} />)}
    </div>
  )
}

export default PostsPage
