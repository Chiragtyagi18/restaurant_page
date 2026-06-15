import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { Hero } from '@/components/home/hero';
import { FeaturedDishes } from '@/components/home/featured-dishes';
import { Reviews } from '@/components/home/reviews';
import { Stats } from '@/components/home/stats';

export const metadata = {
  title: 'Flavors & Fire - Premium Fine Dining Restaurant',
  description: 'Experience award-winning fine dining at Flavors & Fire. Discover innovative cuisine, elegant ambiance, and unforgettable culinary experiences.',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedDishes />
      <Stats />
      <Reviews />
      <Footer />
    </main>
  );
}
