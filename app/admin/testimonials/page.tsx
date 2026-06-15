'use client';

import { useState } from 'react';
import { Star, Eye, EyeOff, Trash2 } from 'lucide-react';
import { Toaster, toast } from 'sonner';

const mockTestimonials = [
  { id: '1', name: 'Sarah Mitchell', role: 'Food Critic', rating: 5, message: 'An absolutely exceptional dining experience...', published: true },
  { id: '2', name: 'James Chen', role: 'Chef', rating: 5, message: 'The techniques used here are sophisticated...', published: true },
  { id: '3', name: 'Emily Rodriguez', role: 'Restaurant Owner', rating: 5, message: 'We had our anniversary dinner here...', published: false },
];

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState(mockTestimonials);

  const handleTogglePublish = (id: string) => {
    setTestimonials(testimonials.map(t => 
      t.id === id ? { ...t, published: !t.published } : t
    ));
    toast.success('Testimonial status updated');
  };

  const handleDelete = (id: string) => {
    setTestimonials(testimonials.filter(t => t.id !== id));
    toast.success('Testimonial deleted');
  };

  const publishedCount = testimonials.filter(t => t.published).length;
  const unpublishedCount = testimonials.filter(t => !t.published).length;

  return (
    <div className="space-y-8">
      <Toaster />
      
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Testimonials</h1>
        <p className="text-muted-foreground mt-2">Manage customer reviews and testimonials</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm font-medium mb-2">Total Testimonials</p>
          <p className="font-heading text-3xl font-bold text-foreground">{testimonials.length}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm font-medium mb-2">Published</p>
          <p className="font-heading text-3xl font-bold text-green-600">{publishedCount}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-muted-foreground text-sm font-medium mb-2">Pending Review</p>
          <p className="font-heading text-3xl font-bold text-yellow-600">{unpublishedCount}</p>
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-4">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <span className="text-muted-foreground text-sm">{testimonial.role}</span>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                testimonial.published
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {testimonial.published ? 'Published' : 'Pending'}
              </div>
            </div>

            <p className="text-foreground mb-4 italic">"{testimonial.message}"</p>

            <div className="flex gap-2">
              <button
                onClick={() => handleTogglePublish(testimonial.id)}
                className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium text-sm"
              >
                {testimonial.published ? (
                  <>
                    <EyeOff size={16} />
                    Unpublish
                  </>
                ) : (
                  <>
                    <Eye size={16} />
                    Publish
                  </>
                )}
              </button>
              <button
                onClick={() => handleDelete(testimonial.id)}
                className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-medium text-sm"
              >
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
