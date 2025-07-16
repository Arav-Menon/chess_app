import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';

const Layout = () => {
  return (
    <div className="bg-[#282828] text-white">
      {/* Sidebar: Fixed and always visible */}
      <div className="fixed top-0 left-0 h-screen w-64 z-50">
        <Sidebar/>
      </div>

      {/* Main content: starts beside the sidebar */}
      <main className="ml-64 min-h-screen  overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
