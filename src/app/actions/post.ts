"use server";

import { createPost, deletePost, updatePost } from "@/db/posts";
import { error } from "console";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deletePostAction(postId: string | number) {
  const post = await deletePost(postId);

  revalidatePath("/posts");
  revalidatePath(`/users/${post.userId}`);
  revalidatePath(`/posts/${post.id}`);
  redirect("/posts");
}

export async function EditPostAction(
  postid: number,
  prevState: unknown,
  formData: FormData
) {
  const [data, errors] = validatePost(formData);

  if (data == null) return errors;

  const updatedPost = await updatePost(postid, data);
  revalidatePath("/posts");
  revalidatePath(`/posts/${updatedPost.id}`);
  revalidatePath(`/users/${updatedPost.userId}`);
  redirect(`/posts/${updatedPost.id}`);
}

export async function createNewPostAction(
  prevState: unknown,
  formData: FormData
) {
  const [data, errors] = validatePost(formData);

  if (data == null) return errors;
  const post = await createPost(data);

  revalidatePath("/posts");
  revalidatePath(`/users/${post.userId}`);
  redirect(`/posts/${post.id}`);
}

function validatePost(formData: FormData) {
  const errors: { title?: string; body?: string; userId?: string } = {};
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const userId = Number(formData.get("userId"));
  let isValid = true;

  if (title === "") {
    errors.title = "Required";
    isValid = false;
  }
  if (body === "") {
    errors.body = "Required";
    isValid = false;
  }
  if (isNaN(userId)) {
    errors.userId = "Required";
    isValid = false;
  }

  return [isValid ? { title, body, userId } : undefined, errors] as const;
}
