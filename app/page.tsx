import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Learning } from '@/components/learning';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Learning />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-border bg-background/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex gap-6">
              <a href="https://github.com/md-hasibur-rahman" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/hasibur-rahman-b50048391/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">LinkedIn</a>
              <a href="https://x.com/animeandmang" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">Twitter</a>
              <a href="https://www.youtube.com/@hasiburrahman18-o6p" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">YouTube</a>
              <a href="https://www.instagram.com/animeandmanga18100?igsh=MWlmazZlZDI2bnVzZg==" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">Instagram</a>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Hasibur Rahman। সকল অধিকার সংরক্ষিত।
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
