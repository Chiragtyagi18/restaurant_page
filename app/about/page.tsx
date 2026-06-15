import { Navbar } from '@/components/shared/navbar';
import { Footer } from '@/components/shared/footer';
import { SlideUp } from '@/components/animations';
import { Award } from 'lucide-react';

export const metadata = {
  title: 'About Us - Flavors & Fire',
  description: 'Learn about Flavors & Fire\'s culinary philosophy, awards, and commitment to excellence.',
};

export default function AboutPage() {
  const awards = [
    { year: 2023, title: 'Best Fine Dining Restaurant' },
    { year: 2022, title: 'Chef of the Year - Executive Chef' },
    { year: 2021, title: 'Michelin Star Recognition' },
    { year: 2020, title: 'Best Culinary Innovation' },
  ];

  const team = [
    {
      name: 'Chef Marcus',
      role: 'Executive Chef & Founder',
      bio: 'With 25 years of culinary excellence, Chef Marcus leads our kitchen with passion and precision.',
    },
    {
      name: 'Chef Elena',
      role: 'Head Pastry Chef',
      bio: 'Award-winning pastry chef specializing in innovative dessert creations.',
    },
    {
      name: 'Chef David',
      role: 'Sous Chef',
      bio: 'Dedicated to perfecting every dish that leaves our kitchen.',
    },
  ];

  return (
    <main>
      <Navbar />

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <div className="text-center mb-16">
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
                About Flavors & Fire
              </h1>
              <p className="text-lg text-muted-foreground">
                Where passion meets perfection in fine dining
              </p>
            </div>
          </SlideUp>

          {/* Story Section */}
          <SlideUp delay={0.1}>
            <div className="bg-card border border-border rounded-lg p-8 mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Founded in 1999, Flavors & Fire has been a beacon of culinary excellence for nearly 25 years.
                What began as a small neighborhood restaurant has grown into one of the most acclaimed dining
                destinations in the city, all while maintaining our core commitment to quality, creativity, and hospitality.
              </p>
              <p className="text-foreground leading-relaxed">
                Our journey is one of continuous innovation and respect for culinary traditions. Every dish that leaves
                our kitchen tells a story of passion, skill, and the finest ingredients sourced from around the world.
                We believe that exceptional dining is an art form, and we're committed to creating unforgettable experiences
                for every guest who walks through our doors.
              </p>
            </div>
          </SlideUp>

          {/* Philosophy Section */}
          <SlideUp delay={0.2}>
            <div className="bg-card border border-border rounded-lg p-8 mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Philosophy</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">Quality First</h3>
                  <p className="text-foreground">
                    We source only the finest ingredients, building relationships with premium suppliers and local producers.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">Innovation</h3>
                  <p className="text-foreground">
                    While respecting tradition, we constantly explore new techniques and flavor combinations to delight our guests.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-primary mb-2">Hospitality</h3>
                  <p className="text-foreground">
                    Every guest is treated like family. Our service is designed to anticipate needs and exceed expectations.
                  </p>
                </div>
              </div>
            </div>
          </SlideUp>

          {/* Awards Section */}
          <SlideUp delay={0.3}>
            <div className="mb-16">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Recognition</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {awards.map((award, index) => (
                  <SlideUp key={index} delay={index * 0.1}>
                    <div className="bg-card border border-border rounded-lg p-6 flex items-start gap-4">
                      <Award className="text-accent flex-shrink-0 mt-1" size={24} />
                      <div>
                        <p className="text-accent font-semibold">{award.year}</p>
                        <p className="text-foreground font-semibold">{award.title}</p>
                      </div>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          </SlideUp>

          {/* Team Section */}
          <SlideUp delay={0.4}>
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Our Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <SlideUp key={index} delay={index * 0.1}>
                    <div className="bg-card border border-border rounded-lg p-6 text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent" />
                      <h3 className="font-heading text-xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-accent font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </div>
          </SlideUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}
