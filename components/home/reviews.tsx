'use client';

import { SlideUp } from '@/components/animations';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
  image: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Food Critic, Culinary Times',
    message: 'An absolutely exceptional dining experience. Every dish was a masterpiece of flavor and presentation. The attention to detail is simply unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'James Chen',
    role: 'Chef & Food Enthusiast',
    message: 'The techniques used here are sophisticated yet approachable. I was impressed by the balance of traditional and innovative flavors. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Restaurant Owner',
    message: 'We had our anniversary dinner here and it was unforgettable. The service was impeccable, the ambiance perfect, and the food absolutely divine.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

export function Reviews() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp delay={0}>
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-lg mb-2">What Guests Say</p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Guest Reviews
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied guests about their unforgettable experiences
            </p>
          </div>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <SlideUp key={review.id} delay={index * 0.2}>
              <div className="bg-background rounded-lg p-8 border border-border card-glow h-full">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{review.message}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
