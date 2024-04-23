type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
  postId: number;
};

export async function getPostComments(postId: string | number) {
  await wait(2000);
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((res) => res.json())
    .then((data) => data as Comment[]);
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
