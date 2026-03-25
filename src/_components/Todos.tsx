import { Todo } from "../types/todos";

export default async function Todos({ promise }: { promise: Promise<Todo[]> }) {
  const todos = await promise;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Todos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {todos.slice(0, 5).map((todo) => (
          <div
            key={todo.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold mb-2">{todo.title}</h3>

            <p className="text-gray-700 mb-2">
              <span className="font-semibold">ID:</span> {todo.id}
            </p>

            <p className="flex items-center text-gray-700">
              <span className="font-semibold mr-2">Status:</span>
              {todo.completed ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="green"
                  className="bi bi-check-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.07 0l3.992-3.992a.75.75 0 0 0-1.06-1.06L7.5 9.439 5.992 7.93a.75.75 0 1 0-1.06 1.06l2.038 2.038z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="red"
                  className="bi bi-x-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
                </svg>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
