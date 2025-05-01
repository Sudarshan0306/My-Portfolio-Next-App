import { Button } from "@/components/ui/button";
export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen px-6 bg-background text-foreground">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-primary">Sudarshan Shinde</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">
            A Front-End Developer specializing in React, Next.js, and modern web
            experiences.
          </p>
          <Button className="text-base px-6 py-3">View My Projects</Button>
        </div>
        <div className="mt-8 flex gap-4">
          <a
            href="https://github.com/Sudarshan0306"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sudarshanshinde03/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </>
  );
}
