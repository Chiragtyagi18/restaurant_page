import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SlideUp, HoverScale } from '@/components/animations';

const galleryImages = [
  {
    id: '1',
    src: '/gallery/img1.jpeg',
    caption: 'Signature Wagyu Dish',
  },
  {
    id: '2',
    src: '/gallery/img2.jpeg',
    caption: 'Pan-Seared Fish',
  },
  {
    id: '3',
    src: '/gallery/img3.jpeg',
    caption: 'Dessert Experience',
  },
  {
    id: '4',
    src: '/gallery/img4.jpeg',
    caption: 'Fine Dining Ambiance',
  },
  {
    id: '5',
    src: '/gallery/img5.jpeg',
    caption: 'Restaurant Interior',
  },
  {
    id: '6',
    src: '/gallery/img6.jpeg',
    caption: 'Culinary Artistry',
  },
  {
    id: '7',
    src: '/gallery/img7.jpeg',
    caption: 'Private Dining',
  },
  {
    id: '8',
    src: '/gallery/img8.jpeg',
    caption: 'Elegant Exterior',
  },
  {
    id: '9',
    src: '/gallery/img9.jpeg',
    caption: 'The Dining Hall',
  },
];

export const metadata = {
  title: 'Gallery - Flavors & Fire',
  description: 'Explore our restaurant ambiance, fine dining dishes, and culinary creations.',
};

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <div className="text-center mb-16">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Gallery
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A visual journey through the ambiance, artistry, and excellence that define Flavors & Fire
              </p>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <SlideUp key={image.id} delay={index * 0.1}>
                <HoverScale>
                  <div className="relative overflow-hidden rounded-lg h-80 bg-muted group cursor-pointer">
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                      <div className="w-full p-4 bg-gradient-to-t from-black to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="font-semibold">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                </HoverScale>
              </SlideUp>
            ))}
          </div>

          {/* Visit Section */}
          <SlideUp delay={0.5}>
            <div className="mt-20 text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                Ready for an Experience?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                These are just glimpses of what awaits you at Flavors & Fire. Experience the full ambiance and culinary
                excellence in person.
              </p>
              <a
                href="/reservations"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
              >
                Make a Reservation
              </a>
            </div>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
