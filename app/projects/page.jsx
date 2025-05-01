// app/projects/page.js
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio built using Next.js, Tailwind CSS, and ShadCN.",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "Notes App",
    description:
      "A full-stack notes app with authentication and CRUD, built using React, Node.js, and MongoDB.",
    link: "https://your-notes-app.com",
  },
  {
    title: "E-commerce UI",
    description:
      "Responsive e-commerce front-end with product filters, cart, and animations.",
    link: "https://your-ecommerce-ui.com",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-12 bg-background text-foreground flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition duration-300"
            >
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  View Project →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
