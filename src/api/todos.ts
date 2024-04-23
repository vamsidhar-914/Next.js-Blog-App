type Todo = {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
};

export async function getTodos() {
  await wait(2000);
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => data as Todo[]);
}

export async function getUserTodos(userId: string | number) {
  await wait(2000);
  return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => data as Todo[]);
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
