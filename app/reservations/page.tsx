'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SlideUp } from '@/components/animations';
import { ReservationSchema } from '@/lib/validations';
import type { ReservationInput } from '@/lib/validations';
import { Toaster, toast } from 'sonner';

export default function ReservationsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationInput>({
    resolver: zodResolver(ReservationSchema),
  });

  const onSubmit = async (data: ReservationInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Reservation submitted! We will confirm shortly.');
        reset();
      } else {
        toast.error('Failed to submit reservation. Please try again.');
      }
    } catch {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Navbar />
      <Toaster />

      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <div className="text-center mb-12">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Make a Reservation
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Reserve your table at Flavors & Fire for an unforgettable dining experience
              </p>
            </div>
          </SlideUp>

          <SlideUp delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-card rounded-lg border border-border p-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-foreground font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  placeholder="Your name"
                  {...register('name')}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-foreground font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  {...register('email')}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-foreground font-medium mb-2">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  {...register('phone')}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-foreground font-medium mb-2">Date *</label>
                  <input
                    type="date"
                    {...register('date')}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>}
                </div>
                <div>
                  <label className="block text-foreground font-medium mb-2">Time *</label>
                  <input
                    type="time"
                    {...register('time')}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                  />
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>}
                </div>
              </div>

              {/* Guests */}
              <div>
                <label className="block text-foreground font-medium mb-2">Number of Guests *</label>
                <select
                  {...register('guests', { valueAsNumber: true })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="">Select number of guests</option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
                {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>}
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-foreground font-medium mb-2">Special Requests</label>
                <textarea
                  placeholder="Any dietary restrictions, special occasions, or requests..."
                  {...register('specialRequests')}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all"
              >
                {isSubmitting ? 'Submitting...' : 'Request Reservation'}
              </button>

              <p className="text-sm text-muted-foreground text-center">
                We will confirm your reservation within 2 hours during business hours.
              </p>
            </form>
          </SlideUp>

          {/* Restaurant Info */}
          <SlideUp delay={0.2}>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 bg-card border border-border rounded-lg p-8">
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">Tue - Sun: 5 PM - 11 PM</p>
                <p className="text-muted-foreground">Closed Mondays</p>
              </div>
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Contact</h3>
                <p className="text-muted-foreground">(555) 123-4567</p>
                <p className="text-muted-foreground">info@flavorsandfire.com</p>
              </div>
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">123 Culinary Street</p>
                <p className="text-muted-foreground">Food City, FC 12345</p>
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
