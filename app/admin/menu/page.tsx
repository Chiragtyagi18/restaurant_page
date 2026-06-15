'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MenuItemSchema } from '@/lib/validations';
import type { MenuItemInput } from '@/lib/validations';
import { Toaster, toast } from 'sonner';
import { Plus, Trash2 } from 'lucide-react';

const mockMenuItems = [
  {
    id: '1',
    name: 'Wagyu Ribeye',
    price: 65,
    category: 'main',
    spicy: false,
    vegetarian: false,
  },
  {
    id: '2',
    name: 'Mushroom Risotto',
    price: 35,
    category: 'main',
    spicy: false,
    vegetarian: true,
  },
  {
    id: '3',
    name: 'Chocolate Lava Cake',
    price: 14,
    category: 'dessert',
    spicy: false,
    vegetarian: true,
  },
];

export default function MenuAdminPage() {
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [menuItems, setMenuItems] = useState(mockMenuItems);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<MenuItemInput>({
    resolver: zodResolver(MenuItemSchema),
  });

  const onSubmit = async (data: MenuItemInput) => {
    setIsSubmitting(true);
    try {
      // In a real app, this would call an API
      const newItem = {
        id: Date.now().toString(),
        ...data,
      };
      setMenuItems([...menuItems, newItem]);
      toast.success('Menu item added successfully');
      reset();
      setIsAddingItem(false);
    } catch {
      toast.error('Failed to add menu item');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
    toast.success('Menu item deleted');
  };

  return (
    <div className="space-y-8">
      <Toaster />
      
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-3xl font-bold text-foreground">Menu Management</h1>
          <p className="text-muted-foreground mt-2">Manage your restaurant menu items</p>
        </div>
        <button
          onClick={() => setIsAddingItem(!isAddingItem)}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium"
        >
          <Plus size={20} />
          Add Item
        </button>
      </div>

      {/* Add Item Form */}
      {isAddingItem && (
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="font-heading text-xl font-bold text-foreground mb-6">Add New Menu Item</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-foreground font-medium mb-2">Name *</label>
              <input
                type="text"
                placeholder="Dish name"
                {...register('name')}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">Price *</label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register('price', { valueAsNumber: true })}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">Category *</label>
              <select
                {...register('category')}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
              >
                <option value="">Select category</option>
                <option value="appetizer">Appetizer</option>
                <option value="main">Main Course</option>
                <option value="dessert">Dessert</option>
                <option value="beverage">Beverage</option>
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">Description *</label>
              <textarea
                placeholder="Item description"
                {...register('description')}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
            </div>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" {...register('spicy')} className="w-4 h-4 rounded" />
                <span className="text-foreground">Spicy</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" {...register('vegetarian')} className="w-4 h-4 rounded" />
                <span className="text-foreground">Vegetarian</span>
              </label>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all font-medium"
              >
                {isSubmitting ? 'Adding...' : 'Add Item'}
              </button>
              <button
                type="button"
                onClick={() => setIsAddingItem(false)}
                className="flex-1 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-all font-medium"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Menu Items Table */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted border-b border-border">
            <tr>
              <th className="text-left py-4 px-6 text-foreground font-semibold">Name</th>
              <th className="text-left py-4 px-6 text-foreground font-semibold">Price</th>
              <th className="text-left py-4 px-6 text-foreground font-semibold">Category</th>
              <th className="text-left py-4 px-6 text-foreground font-semibold">Tags</th>
              <th className="text-right py-4 px-6 text-foreground font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item) => (
              <tr key={item.id} className="border-b border-border hover:bg-muted transition-colors">
                <td className="py-4 px-6 text-foreground font-medium">{item.name}</td>
                <td className="py-4 px-6 text-foreground">${item.price}</td>
                <td className="py-4 px-6 text-foreground capitalize">{item.category}</td>
                <td className="py-4 px-6">
                  <div className="flex gap-2">
                    {item.spicy && <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">Spicy</span>}
                    {item.vegetarian && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Vegan</span>}
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-destructive hover:bg-red-100 rounded-lg transition-colors"
                    aria-label="Delete item"
                  >
                    <Trash2 size={18} />
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
