import { Todo } from "../types/todos";

export default async function Todos({ promise }: { promise: Promise<Todo[]> }) {
  const todos = await promise;

  return (
    <div>
      <h2>Todos</h2>
      {todos.slice(0, 5).map((todo) => (
        <div key={todo.id} className="border p-3 mb-3">
          <h3>{todo.title}</h3>
          <p>
            <strong>ID:</strong> {todo.id}
          </p>
          <p>
            <strong>Status:</strong>{" "}
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
                width="16"
                height="16"
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
  );
}
