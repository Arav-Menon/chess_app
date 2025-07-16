import { User } from "lucide-react";
import { Link } from "react-router-dom";

export function Landing() {
  return (
    <main className="flex">
      <div id="left" className="w-[50%] h-screen ">
        <div className="flex justify-center items-center h-full ml-40 ">
          <img
            src="https://www.shutterstock.com/image-vector/chess-board-vector-wooden-background-600nw-2489673367.jpg"
            alt=""
            className="h-[45vh] w-[45vh]"
          />
        </div>
      </div>
      <div id="right" className="w-[50%] h-screen ">
        <div className="flex h-screen  flex-col p-5  items-center justify-center">
          <div className="flex flex-col justify-center items-center" >
            <h1 className="text-4xl font-bold mb-3">
              Play Chess Online
            </h1>
            <p className="text-6xl text-orange-500 font-bold mb-3 block">
              on the #1 Site
            </p>
            <p className="text-[1.4em] font-semibold mt-4">
              Join millions of chess players from around the <br /> world. Play,
              learn, and improve your game.
            </p>
          </div>

          <div className="flex gap-7 mt-4 ">
            <div className="">
              <p className="text-yellow-500 text-2xl font-semibold">17,961,658</p>
              <span className="font-semibold" >Games Today</span>
            </div>

            <div>
              <p className="text-yellow-500 text-2xl font-semibold ">129,218</p>
              <span className="font-semibold">Playing Now</span>
            </div>
          </div>

          <div  className="mt-10">
            <div className="flex border border-orange-500 rounded justify-center items-center gap-2 p-3 bg-orange-500 hover:scale-[1.1] transition duration-300 ease-in-out hover:-translate-y-1 cursor-pointer " >
              <User />
              <Link to={'/play'} className="font-semibold cursor-pointer" > Play online</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
