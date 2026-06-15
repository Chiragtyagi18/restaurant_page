'use client';

import { useState, useEffect } from 'react';
import { SlideUp } from '@/components/animations';
import { Flame, Leaf, X, Star, Clock, ChefHat } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface FeaturedDish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  spicy: boolean;
  vegetarian: boolean;
  prepTime: string;
  calories: number;
  rating: number;
  chef: string;
  ingredients: string[];
  allergens: string[];
}

const featuredDishes: FeaturedDish[] = [
  {
    id: '1',
    name: 'Seared Wagyu Ribeye',
    description: 'Prime Japanese wagyu with truffle butter and seasonal vegetables',
    price: 65,
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&h=500&fit=crop',
    spicy: false,
    vegetarian: false,
    prepTime: '25-30 min',
    calories: 680,
    rating: 4.9,
    chef: 'Chef Marco',
    ingredients: ['A5 Wagyu beef', 'Black truffle butter', 'Roasted garlic', 'Seasonal root vegetables', 'Herb reduction'],
    allergens: ['Dairy'],
  },
  {
    id: '2',
    name: 'Spiced Tuna Tartare',
    description: 'Fresh ahi tuna with sriracha mayo, avocado, and crispy wonton',
    price: 24,
    image: 'https://images.unsplash.com/photo-1553808863-6596b52b4336?w=500&h=500&fit=crop',
    spicy: true,
    vegetarian: false,
    prepTime: '10-15 min',
    calories: 320,
    rating: 4.7,
    chef: 'Chef Yuki',
    ingredients: ['Sushi-grade ahi tuna', 'Sriracha mayo', 'Ripe avocado', 'Crispy wonton chips', 'Sesame seeds', 'Micro greens'],
    allergens: ['Fish', 'Gluten', 'Soy'],
  },
  {
    id: '3',
    name: 'Pan-Seared Branzino',
    description: 'Whole Mediterranean branzino with lemon, capers, and roasted root vegetables',
    price: 48,
    image: 'https://images.unsplash.com/photo-1504674900556-f31ceddc5919?w=500&h=500&fit=crop',
    spicy: false,
    vegetarian: false,
    prepTime: '20-25 min',
    calories: 450,
    rating: 4.8,
    chef: 'Chef Marco',
    ingredients: ['Wild Mediterranean branzino', 'Preserved lemons', 'Nonpareil capers', 'Olive oil', 'Roasted heirloom carrots', 'Fresh herbs'],
    allergens: ['Fish'],
  },
];

function DishModal({ dish, onClose }: { dish: FeaturedDish; onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative bg-card border border-border rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
        >
          <X size={20} className="text-foreground" />
        </button>

        {/* Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-xl">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-1">
              {dish.spicy && (
                <span className="bg-red-600 text-white p-1 rounded-full">
                  <Flame size={14} />
                </span>
              )}
              {dish.vegetarian && (
                <span className="bg-green-600 text-white p-1 rounded-full">
                  <Leaf size={14} />
                </span>
              )}
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              {dish.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-muted-foreground mb-4">{dish.description}</p>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Star size={18} className="mx-auto text-accent mb-1" />
              <p className="text-sm font-bold text-foreground">{dish.rating}</p>
              <p className="text-xs text-muted-foreground">Rating</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <Clock size={18} className="mx-auto text-accent mb-1" />
              <p className="text-sm font-bold text-foreground">{dish.prepTime}</p>
              <p className="text-xs text-muted-foreground">Prep Time</p>
            </div>
            <div className="text-center p-3 bg-muted/50 rounded-lg">
              <ChefHat size={18} className="mx-auto text-accent mb-1" />
              <p className="text-sm font-bold text-foreground">{dish.calories}</p>
              <p className="text-xs text-muted-foreground">Calories</p>
            </div>
          </div>

          {/* Chef */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">Prepared by</p>
            <p className="font-medium text-foreground">{dish.chef}</p>
          </div>

          {/* Ingredients */}
          <div className="mb-4">
            <h4 className="font-heading font-bold text-foreground mb-2">Ingredients</h4>
            <div className="flex flex-wrap gap-2">
              {dish.ingredients.map((ing, i) => (
                <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Allergens */}
          <div className="mb-6">
            <h4 className="font-heading font-bold text-foreground mb-2">Allergens</h4>
            <div className="flex flex-wrap gap-2">
              {dish.allergens.map((a, i) => (
                <span key={i} className="px-3 py-1 bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-400 rounded-full text-xs font-medium">
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Price & Order */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-3xl font-bold text-primary">${dish.price}</span>
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg btn-press transition-all font-medium">
              Add to Order
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FeaturedDishes() {
  const [selectedDish, setSelectedDish] = useState<FeaturedDish | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp delay={0}>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-lg mb-2">Our Specialties</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Featured Dishes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked selections from our menu, prepared fresh daily by our award-winning chefs
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <SlideUp key={dish.id} delay={index * 0.2}>
                <div className="group cursor-pointer h-full card-glow rounded-lg bg-card border border-border p-4">
                  <div className="relative overflow-hidden rounded-lg mb-4 h-64 bg-muted">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      {dish.spicy && (
                        <div className="bg-red-600 text-white p-2 rounded-full">
                          <Flame size={20} />
                        </div>
                      )}
                      {dish.vegetarian && (
                        <div className="bg-green-600 text-white p-2 rounded-full">
                          <Leaf size={20} />
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {dish.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>

                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">${dish.price}</span>
                    <button
                      onClick={() => setSelectedDish(dish)}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-lg btn-press transition-all text-sm font-medium"
                    >
                      View Details
                    </button>
                  </div>
                </div>
            </SlideUp>
          ))}
        </div>
      </div>

      {/* Dish Detail Modal */}
      <AnimatePresence>
        {selectedDish && (
          <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
