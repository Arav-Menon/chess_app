import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game } from "./screen/Game";
import Layout from "./components/Layout";
import About from "./components/About";
import Profile from "./components/profile/userPage";
import { Landing } from "./screen/Landing";
import EditProfile from "./components/profile/editProfile";
import { prisma } from "../../db/index"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="play" element={<Game />} />
            <Route path="profile" element={<Profile />} />
            <Route path="profile/edit" element={<EditProfile/>}/>
          </Route>

          <Route path="/game" element={<Game />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
