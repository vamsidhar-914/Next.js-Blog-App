"use server";

import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  await fetch("http://127.0.0.1:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: formData.get("title"),
      completed: false,
    }),
  }).then((res) => res.json());

  revalidatePath("/");
}
