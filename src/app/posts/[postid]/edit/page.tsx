import PostForm from "@/components/PostForm";
import { getPost } from "@/db/posts";
import { notFound } from "next/navigation";
import { UserSelectOptions } from "../../UserSelectOptions";
import { getUsers } from "@/db/users";

export default async function editPage({
  params: { postid },
}: {
  params: { postid: string };
}) {
  const [post, users] = await Promise.all([getPost(postid), getUsers()]);
  if (post == null) return notFound();
  return (
    <div>
      <h1 className='page-title'>edit post</h1>
      <PostForm
        userSelectOptions={<UserSelectOptions users={users} />}
        post={post}
      />
    </div>
  );
}
