"use client";

import { toggletodo } from "@/actions/TodoCheck";

export function TodoCheckBox({
  id,
  title,
  completed,
}: {
  id: number;
  title: string;
  completed: boolean;
}) {
  return (
    <li>
      <label htmlFor=''>
        <input
          type='checkbox'
          defaultChecked={completed}
          onChange={async (e) => {
            await toggletodo(id, e.target.checked);
          }}
        />
        {title}
      </label>
    </li>
  );
}
