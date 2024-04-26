import PostForm from "@/components/PostForm";
import { UserSelectOptions } from "../UserSelectOptions";

export default function NewPostPage() {
  return (
    <div>
      <h1 className='page-title'>new post</h1>
      <PostForm userSelectOptions={<UserSelectOptions />} />
    </div>
  );
}
