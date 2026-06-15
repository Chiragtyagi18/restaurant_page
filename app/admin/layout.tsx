import { ReactNode } from 'react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { LogOut, BarChart3, Menu as MenuIcon, MessageSquare, BookOpen } from 'lucide-react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: BarChart3 },
    { href: '/admin/menu', label: 'Menu Items', icon: MenuIcon },
    { href: '/admin/reservations', label: 'Reservations', icon: BookOpen },
    { href: '/admin/testimonials', label: 'Testimonials', icon: MessageSquare },
  ];

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border">
        <div className="p-6">
          <h1 className="font-heading text-2xl font-bold text-primary">Admin Panel</h1>
        </div>

        <nav className="flex flex-col space-y-2 px-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-muted hover:text-primary transition-colors"
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 w-64 border-t border-border p-4 bg-card">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground">Admin User</span>
            <UserButton />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
