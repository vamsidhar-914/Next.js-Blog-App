import { getPosts } from "@/api/posts";
import { getUser, getUsers } from "@/api/users";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
  return (
    <div>
      <h1>this is my nextjs app</h1>
    </div>
  );
}
