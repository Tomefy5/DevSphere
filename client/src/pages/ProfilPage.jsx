import Profil from "../components/Profil";
import Post from "../components/Post";

export default function ProfilPage() {
  return (
    <div className="md:w-[80%] lg:w-[50%] xl:w-[40%] mx-auto p-1">
      <Profil />
      <Post />
    </div>
  );
}
