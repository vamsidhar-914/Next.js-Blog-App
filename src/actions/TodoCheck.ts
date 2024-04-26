"use server";

import { revalidatePath } from "next/cache";

export async function toggletodo(id: number, completed: boolean) {
  await fetch(`http://127.0.0.1:3001/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type ": "application/json",
    },
    body: JSON.stringify({
      completed,
    }),
  }).then((res) => res.json());

  revalidatePath("/");
}
