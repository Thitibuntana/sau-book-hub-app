export default function LoginPage() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Sign In</h1>
      <br />
      <hr />
      <p className="text-lg text-center mt-4">Sign in to view your very own bookshelf!</p>
      <br />
      <div className="flex justify-center">
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {" "}
          Sign In{" "}
        </button>
      </div>
      <p className="text-lg text-center mt-4">
        {" "}
        Do not have an account?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Sign up now!
        </a>
      </p>
      <br />
    </div>
  );
}
