import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutGrid, BarChart3 } from 'lucide-react';
import { MenuItem } from '../../types';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { path: '/', icon: LayoutGrid, label: 'SLA Dashboard', subtitle: 'Monitor service agreements' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics Hub', subtitle: 'Index Analytics' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={`${
        isOpen ? 'w-64' : 'w-0'
      } bg-white border-r border-gray-200 transition-all duration-300 overflow-hidden flex flex-col`}
    >
      <div className="p-4 border-b border-gray-200 flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
          <LayoutGrid className="text-white" size={24} />
        </div>
        <div className="flex-1">
          <h1 className="font-semibold text-gray-900">Index Management</h1>
          <p className="text-xs text-gray-500">Tool</p>
        </div>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                active
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={20} />
              <div className="flex-1">
                <div className="font-medium text-sm">{item.label}</div>
                <div className="text-xs text-gray-500">{item.subtitle}</div>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
        Index Automation Studio v2.1.0
      </div>
    </aside>
  );
};

export default Sidebar;
