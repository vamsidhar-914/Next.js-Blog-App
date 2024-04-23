type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export async function getUsers() {
  await wait(2000);
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => data as User[]);
}

export async function getUser(id: string | number) {
  await wait(2000);
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => data as User);
}

function wait(duration: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
