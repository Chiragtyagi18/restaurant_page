'use client';

import { useState, useMemo } from 'react';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SlideUp, HoverScale } from '@/components/animations';
import { Search, Flame, Leaf } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'main' | 'dessert' | 'beverage';
  spicy: boolean;
  vegetarian: boolean;
  image: string;
}

const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: '1',
    name: 'Tuna Tartare',
    description: 'Fresh ahi tuna with sriracha mayo and crispy wonton',
    price: 24,
    category: 'appetizer',
    spicy: true,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1553808863-6596b52b4336?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'Caprese Salad',
    description: 'Heirloom tomatoes, fresh mozzarella, basil oil',
    price: 16,
    category: 'appetizer',
    spicy: false,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'Beef Carpaccio',
    description: 'Paper-thin sliced prime beef with truffle oil and parmesan',
    price: 22,
    category: 'appetizer',
    spicy: false,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
  },
  // Main Courses
  {
    id: '4',
    name: 'Wagyu Ribeye',
    description: 'Prime Japanese wagyu with truffle butter and seasonal vegetables',
    price: 65,
    category: 'main',
    spicy: false,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
  },
  {
    id: '5',
    name: 'Pan-Seared Branzino',
    description: 'Mediterranean branzino with lemon, capers, and roasted vegetables',
    price: 48,
    category: 'main',
    spicy: false,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1504674900556-f31ceddc5919?w=400&h=400&fit=crop',
  },
  {
    id: '6',
    name: 'Lamb Chops',
    description: 'Herb-crusted lamb chops with garlic puree and wild mushrooms',
    price: 55,
    category: 'main',
    spicy: false,
    vegetarian: false,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561404?w=400&h=400&fit=crop',
  },
  {
    id: '7',
    name: 'Mushroom Risotto',
    description: 'Creamy arborio rice with porcini and truffle oil',
    price: 35,
    category: 'main',
    spicy: false,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1586190203996-34a37d95a8d9?w=400&h=400&fit=crop',
  },
  // Desserts
  {
    id: '8',
    name: 'Chocolate Lava Cake',
    description: 'Warm dark chocolate cake with vanilla ice cream',
    price: 14,
    category: 'dessert',
    spicy: false,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
  },
  {
    id: '9',
    name: 'Crème Brûlée',
    description: 'Classic vanilla crème brûlée with caramelized sugar',
    price: 12,
    category: 'dessert',
    spicy: false,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1470521600051-d01fc4bdf5b7?w=400&h=400&fit=crop',
  },
  {
    id: '10',
    name: 'Spiced Carrot Cake',
    description: 'Warm carrot cake with cream cheese frosting and pistachio dust',
    price: 13,
    category: 'dessert',
    spicy: false,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
  },
  // Beverages
  {
    id: '11',
    name: 'House Wine Selection',
    description: 'Curated selection of premium wines',
    price: 12,
    category: 'beverage',
    spicy: false,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=400&h=400&fit=crop',
  },
  {
    id: '12',
    name: 'Craft Cocktail',
    description: 'Seasonal craft cocktails with premium spirits',
    price: 16,
    category: 'beverage',
    spicy: true,
    vegetarian: true,
    image: 'https://images.unsplash.com/photo-1608270861620-7191c1a877ca?w=400&h=400&fit=crop',
  },
];

const categories = ['appetizer', 'main', 'dessert', 'beverage'];
const categoryLabels = {
  appetizer: 'Appetizers',
  main: 'Main Courses',
  dessert: 'Desserts',
  beverage: 'Beverages',
};

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showVegetarian, setShowVegetarian] = useState(false);
  const [cart, setCart] = useState<Record<string, { item: MenuItem; quantity: number }>>({});

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || item.category === selectedCategory;
      const matchesVegetarian = !showVegetarian || item.vegetarian;
      return matchesSearch && matchesCategory && matchesVegetarian;
    });
  }, [searchQuery, selectedCategory, showVegetarian]);

  const groupedItems = categories.reduce((acc, category) => {
    const items = filteredItems.filter((item) => item.category === category);
    if (items.length > 0) {
      acc[category] = items;
    }
    return acc;
  }, {} as Record<string, MenuItem[]>);
  function addToCart(item: MenuItem) {
    setCart((prev) => {
      const existing = prev[item.id];
      return {
        ...prev,
        [item.id]: { item, quantity: existing ? existing.quantity + 1 : 1 },
      };
    });
  }
  function cancelCart() {
    setCart({});
  }
  function placeOrder() {
    if (Object.keys(cart).length === 0) {
      alert('Your cart is empty. Please add items before placing an order.');
      return;
    }
    // For demo purposes, just show an alert and clear cart. Integration with backend would go here.
    const total = Object.values(cart).reduce((s, c) => s + c.item.price * c.quantity, 0);
    alert(`Order placed! Total: $${total.toFixed(2)}`);    setCart({});
  }

  const cartItems = Object.values(cart);
  const cartCount = cartItems.reduce((s, c) => s + c.quantity, 0);
  const cartTotal = cartItems.reduce((s, c) => s + c.item.price * c.quantity, 0);

  return (
    <main>      <Navbar />      
      <section className="py-20 bg-background">        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">          <SlideUp>            <div className="text-center mb-12">              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">                Our Menu              </h1>              <p className="text-muted-foreground max-w-2xl mx-auto">                Explore our carefully curated selection of dishes, prepared with the finest ingredients              </p>            </div>          </SlideUp>          {/* Search and Filters */}          <SlideUp delay={0.1}>            <div className="space-y-6 mb-12">              {/* Search Bar */}              <div className="relative">                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />                <input                  type="text"                  placeholder="Search menu items..."                  value={searchQuery}                  onChange={(e) => setSearchQuery(e.target.value)}                  className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"                />              </div>              {/* Category Filters */}              <div className="flex flex-wrap gap-3">                <button                  onClick={() => setSelectedCategory(null)}                  className={`px-4 py-2 rounded-full font-medium transition-colors ${                    selectedCategory === null                      ? 'bg-primary text-primary-foreground'                      : 'bg-card text-foreground border border-border hover:border-primary'                  }`}                >                  All Items                </button>                {categories.map((category) => (                  <button                    key={category}                    onClick={() => setSelectedCategory(category)}                    className={`px-4 py-2 rounded-full font-medium transition-colors ${                      selectedCategory === category                        ? 'bg-primary text-primary-foreground'                        : 'bg-card text-foreground border border-border hover:border-primary'                    }`}                  >                    {categoryLabels[category as keyof typeof categoryLabels]}                  </button>                ))}              </div>              {/* Dietary Filters */}              <div className="flex gap-4">                <label className="flex items-center gap-2 cursor-pointer">                  <input                    type="checkbox"                    checked={showVegetarian}                    onChange={(e) => setShowVegetarian(e.target.checked)}                    className="w-4 h-4 rounded"                  />                  <Leaf size={18} className="text-accent" />                  <span className="text-foreground font-medium">Vegetarian Only</span>                </label>              </div>            </div>          </SlideUp>          {/* Menu Items */}          {Object.entries(groupedItems).map(([category, items]) => (            <div key={category} className="mb-16">              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">                {categoryLabels[category as keyof typeof categoryLabels]}              </h2>              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">                {items.map((item, index) => (                  <SlideUp key={item.id} delay={index * 0.1}>                    <HoverScale>                      <div className="bg-card rounded-lg overflow-hidden border border-border card-glow h-full flex flex-col">                        <div className="relative overflow-hidden h-48 bg-muted">                          <img                            src={item.image}                            alt={item.name}                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"                          />                          <div className="absolute top-4 right-4 flex gap-2">                            {item.spicy && (                              <div className="bg-red-600 text-white p-2 rounded-full">                                <Flame size={18} />                              </div>                            )}                            {item.vegetarian && (                              <div className="bg-green-600 text-white p-2 rounded-full">                                <Leaf size={18} />                              </div>                            )}                          </div>                        </div>                        <div className="p-6 flex flex-col flex-grow">                          <h3 className="font-heading text-xl font-bold text-foreground mb-2">                            {item.name}                          </h3>                          <p className="text-muted-foreground text-sm mb-4 flex-grow">                            {item.description}                          </p>                          <div className="flex justify-between items-center pt-4 border-t border-border">                            <span className="text-2xl font-bold text-primary">${item.price}</span>                            <button onClick={() => addToCart(item)} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg btn-press transition-all text-sm font-medium">                              Add                            </button>                          </div>                        </div>                      </div>                    </HoverScale>                  </SlideUp>                ))}              </div>            </div>          ))}          {filteredItems.length === 0 && (            <div className="text-center py-12">              <p className="text-lg text-muted-foreground">No items match your filters. Try adjusting your search.</p>            </div>          )}        </div>      </section>      {/* Cart Bar */}      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50">        <div className="bg-card border border-border rounded-full px-4 py-3 flex items-center gap-4 shadow-lg">          <div className="flex items-center gap-3">            <span className="text-sm text-muted-foreground">Items:</span>            <span className="font-medium">{cartCount}</span>            <span className="text-sm text-muted-foreground">Total:</span>            <span className="font-bold text-primary">${cartTotal.toFixed(2)}</span>          </div>          <div className="flex gap-2">            <button onClick={cancelCart} className="px-3 py-1 rounded-md border border-border text-sm hover:bg-red-50">Cancel</button>            <button onClick={placeOrder} className="px-3 py-1 rounded-md bg-primary text-primary-foreground text-sm">Place Order</button>          </div>        </div>      </div>      <Footer />    </main>  );}