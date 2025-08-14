export default function Registerage() {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center">Sign Up</h1>
      <br />
      <hr />
      <p className="text-lg text-center mt-4">Stuff</p>
      <br />
      <div className="flex justify-center">
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {" "}
          Sign Up{" "}
        </button>
      </div>
      <p className="text-lg text-center mt-4">
        {" "}
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Sign in!
        </a>
      </p>
      <br />
    </div>
  );
}
