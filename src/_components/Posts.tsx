import { Post } from "../types/posts";

export default async function Posts({ promise }: { promise: Promise<Post[]> }) {
  const posts = await promise;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Post ID:</span> {post.id}
            </p>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">User ID:</span> {post.userId}
            </p>

            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
