import { Post } from "@/services/api";
import React from "react";
import PostCard from "./PostCard";
type Props = { posts: Post[] };
export default function PostsBox({ posts }: Props) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {posts.map((post) => (
        <PostCard key={post.path} post={post} />
      ))}
    </ul>
  );
}
