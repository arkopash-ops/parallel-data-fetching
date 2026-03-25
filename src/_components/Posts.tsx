import { Post } from "../types/posts";

export default async function Posts({ promise }: { promise: Promise<Post[]> }) {
  const posts = await promise;

  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, 5).map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px 0",
          }}
        >
          <h3>{post.title}</h3>
          <p>
            <strong>Post ID:</strong> {post.id}
          </p>
          <p>
            <strong>User ID:</strong> {post.userId}
          </p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
