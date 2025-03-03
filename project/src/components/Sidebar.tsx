import React from 'react';
import { 
  FileText, BarChart2, Tv, Clipboard, 
  Info, Mail 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'video-analysis', label: 'Video Analysis', icon: <FileText size={20} /> },
    { id: 'analytics', label: 'Video Analytics', icon: <BarChart2 size={20} /> },
    { id: 'content-creator', label: 'Content Creator', icon: <Tv size={20} /> },
    { id: 'idea-generator', label: 'Idea Generator', icon: <Clipboard size={20} /> },
    { id: 'about', label: 'About Us', icon: <Info size={20} /> },
    { id: 'contact', label: 'Contact Us', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="w-64 bg-white rounded-lg shadow-md p-4 mr-8">
      <ul>
        {navItems.map((item) => (
          <li key={item.id} className="mb-2">
            <button
              onClick={() => setActiveTab(item.id)}
              className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition ${
                activeTab === item.id
                  ? 'bg-red-100 text-red-700 font-medium'
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
