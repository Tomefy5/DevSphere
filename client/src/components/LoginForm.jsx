import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form className="flex flex-col rounded-md w-96 h-auto mx-auto p-6 items-center gap-4 my-4 shadow-lg">
      <h1 className="text-2xl font-extrabold">DevSphere</h1>
      <div className="flex flex-col gap-2">
        <input
          type="email"
          className="input input-bordered"
          placeholder="email..."
        />
        <input
          type="password"
          className="input input-bordered"
          placeholder="password..."
        />
      </div>
      <button className="btn btn-primary font-medium">Login</button>
      <p className="text-sm flex gap-1">
        <span>Don&apos;t have an account ?</span>
        <Link className="text-blue-800">Sign up</Link>
      </p>
    </form>
  );
}
