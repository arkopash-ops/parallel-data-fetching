import { Suspense } from "react";
import Users from "../_components/Users";
import Posts from "../_components/Posts";
import Todos from "../_components/Todos";
import { getUsers, getPosts, getTodos } from "../lib/api";
import DotsLoader from "../_components/DotsLoader";

export default function Home() {
  const usersPromise = getUsers();
  const postsPromise = getPosts();
  const todosPromise = getTodos();

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-10">
        Parallel Fetching with Suspense
      </h1>

      {/* Users Section */}
      <section className="mb-10">
        <Suspense fallback={<DotsLoader />}>
          <Users promise={usersPromise} />
        </Suspense>
      </section>

      {/* Posts Section */}
      <section className="mb-10">
        <Suspense fallback={<DotsLoader />}>
          <Posts promise={postsPromise} />
        </Suspense>
      </section>

      {/* Todos Section */}
      <section className="mb-10">
        <Suspense fallback={<DotsLoader />}>
          <Todos promise={todosPromise} />
        </Suspense>
      </section>
    </div>
  );
}
