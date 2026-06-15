'use client';

import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SlideUp } from '@/components/animations';
import { Clock, CheckCircle, XCircle, Package } from 'lucide-react';

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  status: 'preparing' | 'delivered' | 'cancelled';
  date: string;
  time: string;
}

const currentOrders: Order[] = [
  {
    id: 'ORD-1001',
    items: [
      { name: 'Seared Wagyu Ribeye', quantity: 1, price: 65 },
      { name: 'Spiced Tuna Tartare', quantity: 2, price: 24 },
      { name: 'House Wine Selection', quantity: 2, price: 12 },
    ],
    total: 137,
    status: 'preparing',
    date: 'June 14, 2026',
    time: '7:30 PM',
  },
];

const orderHistory: Order[] = [
  {
    id: 'ORD-0987',
    items: [
      { name: 'Pan-Seared Branzino', quantity: 1, price: 48 },
      { name: 'Mushroom Risotto', quantity: 1, price: 35 },
      { name: 'Chocolate Lava Cake', quantity: 2, price: 14 },
    ],
    total: 111,
    status: 'delivered',
    date: 'June 12, 2026',
    time: '8:00 PM',
  },
  {
    id: 'ORD-0965',
    items: [
      { name: 'Lamb Chops', quantity: 2, price: 55 },
      { name: 'Caprese Salad', quantity: 1, price: 16 },
      { name: 'Craft Cocktail', quantity: 3, price: 16 },
    ],
    total: 175,
    status: 'delivered',
    date: 'June 8, 2026',
    time: '7:00 PM',
  },
  {
    id: 'ORD-0952',
    items: [
      { name: 'Wagyu Ribeye', quantity: 1, price: 65 },
      { name: 'Crème Brûlée', quantity: 2, price: 12 },
    ],
    total: 89,
    status: 'cancelled',
    date: 'June 5, 2026',
    time: '8:30 PM',
  },
];

function StatusBadge({ status }: { status: Order['status'] }) {
  const config = {
    preparing: {
      icon: Clock,
      label: 'Preparing',
      className: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    },
    delivered: {
      icon: CheckCircle,
      label: 'Delivered',
      className: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    },
    cancelled: {
      icon: XCircle,
      label: 'Cancelled',
      className: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    },
  };

  const { icon: Icon, label, className } = config[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${className}`}>
      <Icon size={14} />
      {label}
    </span>
  );
}

function OrderCard({ order }: { order: Order }) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 card-glow">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-3">
            <Package size={20} className="text-primary" />
            <h3 className="font-heading text-lg font-bold text-foreground">{order.id}</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{order.date} at {order.time}</p>
        </div>
        <StatusBadge status={order.status} />
      </div>

      <div className="space-y-2 mb-4">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex justify-between text-sm">
            <span className="text-foreground">
              {item.name} <span className="text-muted-foreground">×{item.quantity}</span>
            </span>
            <span className="text-foreground font-medium">${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-3 flex justify-between items-center">
        <span className="text-sm text-muted-foreground">Total</span>
        <span className="text-xl font-bold text-primary">${order.total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default function OrdersPage() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Your Orders
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Track your current orders and browse your order history
              </p>
            </div>
          </SlideUp>

          {/* Current Orders */}
          <SlideUp delay={0.1}>
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Clock size={24} className="text-primary" />
                Current Orders
              </h2>
              {currentOrders.length > 0 ? (
                <div className="space-y-4">
                  {currentOrders.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-card border border-border rounded-lg">
                  <Package size={48} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">No active orders right now.</p>
                  <a href="/menu" className="inline-block mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg btn-press transition-all text-sm font-medium">
                    Browse Menu
                  </a>
                </div>
              )}
            </div>
          </SlideUp>

          {/* Order History */}
          <SlideUp delay={0.2}>
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle size={24} className="text-accent" />
                Order History
              </h2>
              {orderHistory.length > 0 ? (
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-card border border-border rounded-lg">
                  <p className="text-muted-foreground">No order history yet.</p>
                </div>
              )}
            </div>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
