import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Gamepad2, User } from 'lucide-react'; // icons

const links = [
  { name: 'Home', path: '/', icon: <Home size={18} /> },
  { name: 'Game', path: '/play', icon: <Gamepad2 size={18} /> },
  { name: 'About', path: '/about', icon: <Info size={18} /> },
  { name: 'Profile', path: '/profile', icon: <User size={18} /> },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 h-screen bg-[#1A1A1A] text-white px-6 py-8 shadow-lg border-r border-[#1c1e26]">
      <h1 className="text-2xl font-bold text-orange-500 mb-10 tracking-wide">Chess.com</h1>
      <ul className="space-y-2">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-500 text-black shadow-md text-3xl '
                    : 'hover:bg-[#1b1d2a] text-gray-300 hover:text-white'
                }`}
              >
                <span>{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
