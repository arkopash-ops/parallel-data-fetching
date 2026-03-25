import { Suspense } from "react";
import Users from "../_components/Users";
import Posts from "../_components/Posts";
import Todos from "../_components/Todos";
import { getUsers, getPosts, getTodos } from "../lib/api";

export default function Home() {
  const usersPromise = getUsers();
  const postsPromise = getPosts();
  const todosPromise = getTodos();

  return (
    <div>
      <h1>Parallel Fetching with Suspense</h1>
      <div>
        <Suspense fallback={<p>Loading Users...</p>}>
          <Users promise={usersPromise} />
        </Suspense>
      </div><br />

      <div>
        <Suspense fallback={<p>Loading Posts...</p>}>
          <Posts promise={postsPromise} />
        </Suspense>
      </div><br />

      <div>
        <Suspense fallback={<p>Loading Todos...</p>}>
          <Todos promise={todosPromise} />
        </Suspense>
      </div>
    </div>
  );
}
