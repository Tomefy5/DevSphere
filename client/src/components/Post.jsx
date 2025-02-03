import { useState } from "react";
import Profil from "../images/photo-profil-removebg-preview(1).png";
import PubImage from "../images/Affiche IT Show.png";
import { ThumbsUp, MessageSquare, Share2 } from "lucide-react";

export default function Post() {
  const [expend, setExpend] = useState(false);

  return (
    <div className="bg-red-30 flex flex-col gap-3">
      {/* Profil section */}
      <div className="flex gap-3 items-center">
        <div className="avatar flex items-center">
          <div className="w-12 bg-slate-300 rounded-full">
            <img src={Profil} alt="profil" />
          </div>
        </div>
        <div className="bg-yellow-20 flex flex-col justify-center">
          <p className="font-bold">Tomefy Andry Tsiresy</p>
          <span className="text-sm">2d</span>
        </div>
      </div>

      {/* Post Description */}
      <div className="p-1">
        <p
          onClick={() => setExpend(!expend)}
          className={`transition-all duration-300 text-wrap ${
            expend ? "" : "overflow-hidden max-h-12"
          }`}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, libero
          animi accusantium corrupti totam eos nemo aperiam esse veritatis
          labore quasi fugiat similique incidunt exercitationem. Doloremque
          molestiae illo aliquam quos?
        </p>
        <button onClick={() => setExpend(!expend)}>
          <span>{expend ? "see less..." : "see more..."}</span>
        </button>
      </div>

      {/* Post Context */}
      <div className="bg-yellow-200 p-1 card">
        <img src={PubImage} alt="post content" />
      </div>

      {/* User Actions */}

      <div className="flex flex-col gap-2">
        <div className="rounded-md px-2 flex gap-1 items-center">
            <div className="flex items-center justify-center bg-blue-200 p-2 rounded-full">
              <ThumbsUp size={14}/>
            </div>
            <p className="font-medium">Tomefy Ny soa and 23 other persons</p>
        </div>

        <div className="flex justify-between bg-slate-20 rounded px-2">
          <button className="btn btn-ghost bg-slate-200 w-[30%] rounded-full flex justify-center items-center">
            <ThumbsUp size={20} />
            <span className="text-base font-bold">20</span>
          </button>
          <button className="btn btn-ghost bg-slate-200 w-[30%] rounded-full flex justify-center items-center">
            <MessageSquare size={20} />
            <span className="text-base font-bold">20</span>
          </button>
          <button className="btn btn-ghost bg-slate-200 w-[30%] rounded-full flex justify-center items-center">
            <Share2 size={20} />
            <span className="text-base font-bold">20</span>
          </button>
        </div>
      </div>
    </div>
  );
}
