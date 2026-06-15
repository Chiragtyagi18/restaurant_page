import { z } from 'zod';

export const MenuItemSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  description: z.string().min(1, 'Description is required'),
  price: z.number().positive('Price must be positive'),
  category: z.enum(['appetizer', 'main', 'dessert', 'beverage']),
  image: z.string().optional(),
  spicy: z.boolean().default(false),
  vegetarian: z.boolean().default(false),
});

export const ReservationSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  date: z.string().transform((val) => new Date(val)).refine((date) => date > new Date(), {
    message: 'Date must be in the future',
  }),
  time: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format (HH:MM)'),
  guests: z.number().int().min(1, 'At least 1 guest').max(12, 'Maximum 12 guests'),
  specialRequests: z.string().optional(),
});

export const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

export const TestimonialSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  role: z.string().min(1, 'Role is required').max(100),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  rating: z.number().int().min(1).max(5),
  image: z.string().optional(),
});

export type MenuItemInput = z.infer<typeof MenuItemSchema>;
export type ReservationInput = z.infer<typeof ReservationSchema>;
export type ContactInput = z.infer<typeof ContactSchema>;
export type TestimonialInput = z.infer<typeof TestimonialSchema>;
