"use client";

import { createTodo } from "@/actions/todos";
import { useRef } from "react";

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <form
        action={async (formData) => {
          if (inputRef.current != null) {
            inputRef.current.value = "";
          }
          await createTodo(formData);
        }}
        style={{
          display: "flex",
          gap: ".25rem",
          flexDirection: "column",
          maxWidth: "200px",
        }}
      >
        <label htmlFor='title'>title</label>
        <input
          type='text'
          name='title'
          id='title'
          ref={inputRef}
        />
        <button>Add</button>
      </form>
    </div>
  );
}
