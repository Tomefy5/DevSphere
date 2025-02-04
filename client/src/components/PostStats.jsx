import { ArrowRight } from "lucide-react";
import CreatePostModal from "./CreatePostModal";

export default function PostStats({ open, setOpen }) {
  return (
    <div className="bg-white my-5 p-4 rounded shadow-md shadow-slate-400">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="font-bold text-xl">Activities</span>
          <p className="flex gap-1 font-medium text-sm">
            <span>15</span>
            <span>Posts</span>
          </p>
        </div>

        <button onClick={() => setOpen(!open)} className="btn btn-outline">
          Create Post
        </button>
      </div>
      <button className="btn btn-primary w-full mt-5">
        <span>Show All Posts</span>
        <ArrowRight size={15} />
      </button>

      {/* modal for creating new post */}
      {open && <CreatePostModal setOpen={setOpen} />}
    </div>
  );
}
