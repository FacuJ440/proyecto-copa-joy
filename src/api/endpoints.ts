const BASE_URL = "https://jsonplaceholder.typicode.com"

const endpoints = {
  posts: {
    list: `${BASE_URL}/posts`,
    detail: (id: number) => `${BASE_URL}/posts/${id}`,
    comments: (id: number) => `${BASE_URL}/posts/${id}/comments`
  },
  comments: {
    list: `${BASE_URL}/comments`,
    detail: (id: number) => `${BASE_URL}/comments/${id}`
  },
  albums: {
    list: `${BASE_URL}/albums`,
    detail: (id: number) => `${BASE_URL}/albums/${id}`,
    photos: (id: number) => `${BASE_URL}/albums/${id}/photos`
  },
  photos: {
    list: `${BASE_URL}/photos`,
    detail: (id: number) => `${BASE_URL}/photos/${id}`
  },
  todos: {
    list: `${BASE_URL}/todos`,
    detail: (id: number) => `${BASE_URL}/todos/${id}`
  },
  users: {
    list: `${BASE_URL}/users`,
    detail: (id: number) => `${BASE_URL}/users/${id}`,
    posts: (id: number) => `${BASE_URL}/users/${id}/posts`,
    albums: (id: number) => `${BASE_URL}/users/${id}/albums`,
    todos: (id: number) => `${BASE_URL}/users/${id}/todos`
  }
}

export default endpoints
