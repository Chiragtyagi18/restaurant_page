'use client';

import { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Calendar, Menu, MessageSquare } from 'lucide-react';

const COLORS = ['#C0392B', '#D4AF37', '#E74C3C', '#1A1A1A'];

const mockRevenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 2000 },
  { month: 'Apr', revenue: 2780 },
  { month: 'May', revenue: 1890 },
  { month: 'Jun', revenue: 2390 },
];

const mockCategoryData = [
  { name: 'Main Courses', value: 45 },
  { name: 'Appetizers', value: 25 },
  { name: 'Desserts', value: 20 },
  { name: 'Beverages', value: 10 },
];

export default function AdminDashboard() {
  const [stats] = useState({
    totalReservations: 156,
    totalMenuItems: 48,
    totalMessages: 23,
    avgRating: 4.8,
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Welcome to Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your restaurant operations and view analytics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          icon={<Calendar className="text-primary" size={24} />}
          title="Reservations"
          value={stats.totalReservations.toString()}
          subtitle="This month"
        />
        <KPICard
          icon={<Menu className="text-primary" size={24} />}
          title="Menu Items"
          value={stats.totalMenuItems.toString()}
          subtitle="Active items"
        />
        <KPICard
          icon={<MessageSquare className="text-primary" size={24} />}
          title="Messages"
          value={stats.totalMessages.toString()}
          subtitle="Unread"
        />
        <KPICard
          icon={<Users className="text-primary" size={24} />}
          title="Rating"
          value={stats.avgRating.toString()}
          subtitle="Average rating"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-card border border-border rounded-lg p-6">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockRevenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis stroke="var(--color-muted-foreground)" />
              <YAxis stroke="var(--color-muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-foreground)',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#C0392B"
                strokeWidth={2}
                dot={{ fill: '#C0392B', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-heading text-xl font-bold text-foreground mb-4">Menu Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={mockCategoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {mockCategoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-background)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-foreground)',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="font-heading text-xl font-bold text-foreground mb-4">Recent Reservations</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left py-3 px-4 text-foreground font-semibold">Name</th>
                <th className="text-left py-3 px-4 text-foreground font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-foreground font-semibold">Guests</th>
                <th className="text-left py-3 px-4 text-foreground font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'John Doe', date: '2024-06-15', guests: 4, status: 'Confirmed' },
                { name: 'Jane Smith', date: '2024-06-16', guests: 2, status: 'Pending' },
                { name: 'Mike Johnson', date: '2024-06-17', guests: 6, status: 'Confirmed' },
                { name: 'Sarah Williams', date: '2024-06-18', guests: 3, status: 'Confirmed' },
              ].map((reservation, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted transition-colors">
                  <td className="py-3 px-4 text-foreground">{reservation.name}</td>
                  <td className="py-3 px-4 text-foreground">{reservation.date}</td>
                  <td className="py-3 px-4 text-foreground">{reservation.guests}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        reservation.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {reservation.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KPICard({
  icon,
  title,
  value,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>{icon}</div>
      </div>
      <h3 className="text-muted-foreground text-sm font-medium mb-2">{title}</h3>
      <p className="font-heading text-3xl font-bold text-foreground mb-1">{value}</p>
      <p className="text-muted-foreground text-xs">{subtitle}</p>
    </div>
  );
}
