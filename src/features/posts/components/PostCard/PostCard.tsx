import React from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

interface PostCardProps {
  title: string
  body: string
}

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <Card className='w-full p-4'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  )
}

export default PostCard
