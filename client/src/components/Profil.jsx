import { useState } from "react";
import PhotoProfil from "../images/profile-pic(2).png";
import Couverture from "../images/Tomefy Ny soa.png";
import PostStats from "./PostStats";

export default function Profil() {

  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden flex flex-col gap-16 md:gap-20">
      {/* Photos Sections */}
      <div className="relative">
        <div className="bg-green-300  h-32 lg:h-52 md:h-36 rounded flex justify-center items-center">
          <img
            className="object-cover h-full w-full"
            src={Couverture}
            alt="couverture "
          />
        </div>

        <div className="bg-slate-100 absolute bottom-0 left-6 translate-y-[50%] w-28 h-28 md:w-32 md:h-3w-32 lg:w-36 lg:h-36 rounded-full p-2">
          <img src={PhotoProfil} alt="profil" />
        </div>
      </div>

      {/* User'info section */}
      <div className="p-2 px-4">
        <p className="flex gap-1 font-bold text-lg md:text-xl xl:text-2xl flex-wrap">
          <span className="text-wrap">ANDRY TSIRESY ANDRIAMBONIHAJA</span>
          <span className="text-wrap">Tomefy Ny Soa</span>
        </p>

        {/* Job */}
        <h2 className="font-medium text-wrap">Student | Junior Developer</h2>

        {/* relations and friends */}
        <p className="font-bold text-sm flex gap-1">
        <span>785</span>
        <span>friends</span>
        </p>

        {/* Post Stats */}
        <PostStats open={open} setOpen={setOpen}/>
      </div>
    </div>
  );
}
