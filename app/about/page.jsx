// app/about/page.js
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-background text-foreground flex flex-col items-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Me</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
          I'm a passionate Front-End Developer with over 3 years of experience building responsive, high-performance web apps using React.js, Next.js, and Tailwind CSS.
          <br /><br />
          I love solving UI problems, making interfaces accessible, and staying up to date with the latest technologies. My goal is to build products that offer both beauty and functionality.
        </p>
        <Button className="text-base px-6 py-3" asChild>
          <a href="/projects">View My Projects</a>
        </Button>
      </div>
    </main>
  );
}
