import { getPosts } from "@/db/posts";
import { getUser, getUsers } from "@/db/users";

export default async function Home() {
  const posts = await getPosts();
  return (
    <div>
      <h1>this is my nextjs app</h1>
    </div>
  );
}
