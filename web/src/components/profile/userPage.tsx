import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import StatCard from "../../ui/statCard";

const stats = [
  { value: "12", label: "Games Won" },
  { value: "8", label: "Games Lost" },
  { value: "15", label: "Puzzles Solved" },
  { value: "2.5h", label: "Time Played" },
];

export default function Profile() {
  return (
    <main className="flex justify-center bg-[#282828] min-h-screen min-h-screen text-white">
      <div className="w-[60rem] flex flex-col gap-10 py-10">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-5 rounded-lg">
          <div className="flex items-center gap-4">
            <img
              src="https://wallpapers.com/images/featured/black-anime-1ruvfye415umyc9s.jpg"
              alt="Profile"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <p className="text-lg font-semibold">Arav menon</p>
              <p className="text-sm text-white/70">Member since 2019</p>
            </div>
          </div>

          <Link
            to="/profile/edit"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-md text-sm font-medium"
          >
            <Pencil className="w-4 h-4" />
            Edit profile
          </Link>
        </div>

        <div className="bg-white/5 p-5 rounded-lg w-fit flex flex-col justify-center ">
          <h1 className="text-lg font-semibold flex items-center gap-2 mb-4">
            🏆 This Week's Performance
          </h1>
          <div className="flex flex-wrap gap-4">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>



      </div>
    </main>
  );
}
