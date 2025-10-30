import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Upload, 
  BarChart3, 
  Activity, 
  Info, 
  Menu, 
  X, 
  GitBranch,
  FileSpreadsheet,
  PieChart
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface DashboardLayoutProps {
  children: ReactNode;
}

// ✅ Added new links for "Prediction Form" and "Data Visualization"
const navItems = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'Dataset Upload', path: '/upload', icon: Upload },
  { name: 'Visualization', path: '/visualization', icon: BarChart3 },
  { name: 'Clustering', path: '/clustering', icon: GitBranch },
  { name: 'Prediction', path: '/prediction', icon: Activity },
  { name: 'Prediction Form', path: '/predict', icon: FileSpreadsheet },   // 🆕 added
  { name: 'Data Visualization', path: '/visualize', icon: PieChart },     // 🆕 added
  { name: 'About', path: '/about', icon: Info },
];

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-primary z-50 flex items-center justify-between px-4">
        <h1 className="text-lg font-bold text-primary-foreground">Diabetes Dashboard</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-primary-foreground hover:bg-primary-foreground/10"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </header>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static top-16 lg:top-0 left-0 h-[calc(100vh-4rem)] lg:h-screen w-64 
          bg-sidebar text-sidebar-foreground transition-transform duration-300 z-40
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 hidden lg:block">
          <h1 className="text-xl font-bold text-sidebar-foreground">Diabetes Dashboard</h1>
          <p className="text-sm text-sidebar-foreground/80 mt-1">Healthcare Analytics</p>
        </div>

        <nav className="px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-sidebar-accent text-sidebar-accent-foreground font-medium'
                    : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <p className="text-xs text-sidebar-foreground/60 text-center">
            Developed by Zeeshan
          </p>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30 top-16"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto pt-16 lg:pt-0">
        <div className="p-6 lg:p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};
