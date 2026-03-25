export default function DotsLoader() {
  return (
    <div className="flex justify-center items-center space-x-2 py-4">
      <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce"></span>
      <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-150"></span>
      <span className="w-3 h-3 bg-gray-500 rounded-full animate-bounce delay-300"></span>
    </div>
  );
}
