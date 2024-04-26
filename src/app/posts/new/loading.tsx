import { SkeletonPostForm } from "@/components/PostForm";

export default function LoadingNewPost() {
  return (
    <>
      <h1 className='page-title'>New Post</h1>
      <SkeletonPostForm />
    </>
  );
}
