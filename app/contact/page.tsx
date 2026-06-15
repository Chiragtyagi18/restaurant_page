'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SlideUp } from '@/components/animations';
import { ContactSchema } from '@/lib/validations';
import type { ContactInput } from '@/lib/validations';
import { Toaster, toast } from 'sonner';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent! We will reply shortly.');
        reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch {
      toast.error('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '(555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@flavorsandfire.com',
      href: 'mailto:info@flavorsandfire.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: '123 Culinary Street, Food City, FC 12345',
      href: '#',
    },
    {
      icon: Clock,
      title: 'Hours',
      value: 'Tue-Sun 5 PM - 11 PM',
      href: '#',
    },
  ];

  return (
    <main>
      <Navbar />
      <Toaster />

      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <div className="text-center mb-16">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Have a question or special request? We&apos;d love to hear from you.
              </p>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <SlideUp delay={0.1}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-foreground font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    {...register('name')}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
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
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-foreground font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    {...register('subject')}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-foreground font-medium mb-2">Message *</label>
                  <textarea
                    placeholder="Your message..."
                    rows={5}
                    {...register('message')}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </SlideUp>

            {/* Contact Information */}
            <SlideUp delay={0.2}>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <SlideUp key={index} delay={index * 0.1}>
                      <a
                        href={info.href}
                        className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors"
                      >
                        <Icon className="text-primary flex-shrink-0 mt-1" size={24} />
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </SlideUp>
                  );
                })}

                {/* Hours of Operation */}
                <SlideUp delay={0.5}>
                  <div className="p-6 bg-accent/10 border border-accent/30 rounded-lg">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-4">Hours of Operation</h3>
                    <div className="space-y-2 text-foreground">
                      <p>Tuesday - Thursday: 5 PM - 10 PM</p>
                      <p>Friday - Saturday: 5 PM - 11 PM</p>
                      <p>Sunday: 5 PM - 10 PM</p>
                      <p className="text-red-600 font-semibold">Closed Mondays</p>
                    </div>
                  </div>
                </SlideUp>
              </div>
            </SlideUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
