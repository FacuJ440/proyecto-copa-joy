import useSWR from "swr"
import fetcher from "@/api/fetcher"
import { Post } from "../types/Post"
import endpoints from "@/api/endpoints"

const usePosts = () => {
  const { data, error } = useSWR<Post[]>(endpoints.posts.list, fetcher)

  const capitalizeTitle = (title: string) => {
    return title
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  }

  const posts = data?.map((post) => ({
    ...post,
    title: capitalizeTitle(post.title)
  }))

  return {
    posts,
    isLoading: !error && !data,
    isError: error
  }
}

export default usePosts
