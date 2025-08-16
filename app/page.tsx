import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <br />
      <h1 className="text-4xl font-bold text-center">
        Welcome to DTI Book Hub!
      </h1>
      <br />
      <hr />
      <br />
      <p className="text-lg text-center mt-4">
        Please Login or Register to view your very own bookshelf!
      </p>
      <br />
      <div className="flex justify-center">
        <Link
          href="/bookshelf"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
      <p className="text-lg text-center mt-4">
        {" "}
        Do not have an account?{" "}
        <a href="/register" className="text-blue-500 hover:underline">
          Sign up now!
        </a>
      </p>
      <br />
      <br />
    </div>
  );
}
