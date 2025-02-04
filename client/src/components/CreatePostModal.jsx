import { X, ImagePlus } from "lucide-react";
export default function CreatePostModal({ setOpen }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center w-full h-[100vh] bg-slate-200 bg-opacity-60 z-20">
      <div className="bg-white rounded p-4 w-96 md:w-[500px] lg:w-[600px] flex gap-3 flex-col">
        {/* Modal's header */}
        <div className="bg-slate-100 relative h-12 rounded flex items-center justify-center">
          <h2 className="font-bold">Create New Post</h2>
          <button onClick={() => setOpen(false)} className="btn btn-sm btn-circle absolute right-2">
            <X size={15} />
          </button>
        </div>

        {/* Modal's body */}
        <textarea
          className="textarea textarea-bordered w-full min-h-40"
          placeholder="Post description..."
        ></textarea>

        <div className="bg-slate-20 p-2 rounded">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            <ImagePlus size={24} />
            Import photo
          </button>
        </div>

        <button className="btn btn-primary">Publish</button>
      </div>
    </div>
  );
}
