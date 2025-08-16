export default function LiteraturePage() {
  return (
    <div>
      <br />
      <h1 className="text-4xl font-bold text-center">Book Hub</h1>
      <br />
      <p className="text-lg text-center mt-4">
        This is the community space! Have something you wanted to share? Post it
        here!
      </p>
      <br />
      <hr />
      <p className="text-2xl text-center mt-10 my-10 text-red-600">
        No post found...
      </p>
      <div className="w-full max-w-md mx-auto mt-10 flex">
      <input
        type="text"
        placeholder="Have something to share?"
        className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
      >
        Post
      </button>
    </div>
      <br />
    </div>
  );
}
