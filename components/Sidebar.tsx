import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Settings as SettingsIcon,
  Plus
} from 'lucide-react';

interface SidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  const menuItems = [
    {
      id: 'dashboard' as Page,
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      id: 'invoices' as Page,
      label: 'Invoices',
      icon: FileText,
    },
    {
      id: 'customers' as Page,
      label: 'Customers',
      icon: Users,
    },
    {
      id: 'settings' as Page,
      label: 'Settings',
      icon: SettingsIcon,
    },
  ];

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen">
      <div className="p-6">
        {/* Brand Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-semibold text-sm">S</span>
            </div>
            <div>
              <h1 className="font-semibold text-sidebar-foreground">Smash Invoice</h1>
              <p className="text-xs text-sidebar-foreground/60">Multi-Brand Dashboard</p>
            </div>
          </div>
        </div>

        {/* Quick Action */}
        <div className="mb-6">
          <button
            onClick={() => onNavigate('invoice-create')}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-4 py-3 flex items-center gap-2 transition-all duration-200 font-medium"
          >
            <Plus className="h-4 w-4" />
            New Invoice
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-sidebar-border">
        <div className="text-xs text-sidebar-foreground/60 text-center">
          <p>Smash Technology</p>
          <p>Invoice Dashboard v1.0</p>
        </div>
      </div>
    </aside>
  );
}