'use client';

import { useState } from 'react';
import { CheckCircle, XCircle, Clock } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const mockReservations = [
  { id: '1', name: 'John Doe', date: '2024-06-15', time: '19:00', guests: 4, status: 'confirmed' },
  { id: '2', name: 'Jane Smith', date: '2024-06-16', time: '20:00', guests: 2, status: 'pending' },
  { id: '3', name: 'Mike Johnson', date: '2024-06-17', time: '18:30', guests: 6, status: 'confirmed' },
  { id: '4', name: 'Sarah Williams', date: '2024-06-18', time: '19:30', guests: 3, status: 'confirmed' },
  { id: '5', name: 'Tom Brown', date: '2024-06-19', time: '20:30', guests: 5, status: 'pending' },
];

export default function ReservationsAdminPage() {
  const [reservations, setReservations] = useState(mockReservations);
  const [filterStatus, setFilterStatus] = useState<string | null>(null);

  const filteredReservations = filterStatus
    ? reservations.filter(r => r.status === filterStatus)
    : reservations;

  const handleStatusChange = (id: string, newStatus: string) => {
    setReservations(reservations.map(r => r.id === id ? { ...r, status: newStatus } : r));
    toast.success('Reservation status updated');
  };

  const handleDelete = (id: string) => {
    setReservations(reservations.filter(r => r.id !== id));
    toast.success('Reservation deleted');
  };

  return (
    <div className="space-y-8">
      <Toaster />
      
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Reservations</h1>
        <p className="text-muted-foreground mt-2">Manage restaurant reservations</p>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilterStatus(null)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filterStatus === null
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-foreground hover:bg-muted/80'
          }`}
        >
          All ({reservations.length})
        </button>
        <button
          onClick={() => setFilterStatus('pending')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filterStatus === 'pending'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-foreground hover:bg-muted/80'
          }`}
        >
          Pending ({reservations.filter(r => r.status === 'pending').length})
        </button>
        <button
          onClick={() => setFilterStatus('confirmed')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filterStatus === 'confirmed'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-foreground hover:bg-muted/80'
          }`}
        >
          Confirmed ({reservations.filter(r => r.status === 'confirmed').length})
        </button>
      </div>

      {/* Reservations Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="text-left py-4 px-6 text-foreground font-semibold">Guest Name</th>
              <th className="text-left py-4 px-6 text-foreground font-semibold">Date & Time</th>
              <th className="text-left py-4 px-6 text-foreground font-semibold">Guests</th>
              <th className="text-left py-4 px-6 text-foreground font-semibold">Status</th>
              <th className="text-right py-4 px-6 text-foreground font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.map((reservation) => (
              <tr key={reservation.id} className="border-b border-border hover:bg-muted transition-colors">
                <td className="py-4 px-6 text-foreground font-medium">{reservation.name}</td>
                <td className="py-4 px-6 text-foreground">
                  {reservation.date} at {reservation.time}
                </td>
                <td className="py-4 px-6 text-foreground">{reservation.guests} guests</td>
                <td className="py-4 px-6">
                  <select
                    value={reservation.status}
                    onChange={(e) => handleStatusChange(reservation.id, e.target.value)}
                    className="px-3 py-1 rounded-lg text-sm font-medium border border-border bg-background text-foreground"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    onClick={() => handleDelete(reservation.id)}
                    className="text-destructive hover:bg-red-100 px-3 py-1 rounded-lg transition-colors text-sm font-medium"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
