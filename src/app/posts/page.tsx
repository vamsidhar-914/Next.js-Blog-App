import { getPosts } from "@/db/posts";
import { PostCard, SkeletonPostCard } from "@/components/PostCard";
import { FormGroup } from "@/components/FormGroup";
import { Suspense } from "react";
import { getUsers } from "@/db/users";
import { Skeleton, SkeletonList } from "@/components/Skeleton";
import { SearchForm } from "./SearchForm";
import Link from "next/link";

type PageProps = {
  searchParams: { query?: string; userId?: string };
};

export default async function PostPage({
  searchParams: { userId = "", query = "" },
}: PageProps) {
  const posts = await getPosts();
  return (
    <>
      <h1 className='page-title'>
        Posts
        <div className='page-title'>
          <Link
            className='btn btn-outline'
            href='/posts/new'
          >
            New
          </Link>
        </div>
      </h1>

      <SearchForm userOptions={<UserSelect />} />

      <div className='card-grid'>
        <Suspense
          key={`${userId}-${query}`}
          fallback={
            <SkeletonList amount={6}>
              <SkeletonPostCard />
            </SkeletonList>
          }
        >
          <PostGrid
            userId={userId}
            query={query}
          />
        </Suspense>
      </div>
    </>
  );
}

async function PostGrid({ userId, query }: { userId: string; query: string }) {
  const posts = await getPosts({ query, userId });
  return posts.map((post) => (
    <PostCard
      key={post.id}
      {...post}
    />
  ));
}

async function UserSelect() {
  const users = await getUsers();

  return (
    <>
      <option value=''>Any</option>
      {users.map((user) => (
        <option
          key={user.id}
          value={user.id}
        >
          {user.name}
        </option>
      ))}
    </>
  );
}
