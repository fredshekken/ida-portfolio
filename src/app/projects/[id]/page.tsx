import projects from "@/data/projects.json";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
      <Link
        href="/projects"
        className="text-muted text-sm hover:text-accent transition-colors duration-200 mb-10 inline-block"
      >
        ← Back to Projects
      </Link>

      {/* Image Placeholder */}
      <div className="w-full h-64 md:h-96 bg-surface-mid rounded-2xl flex items-center justify-center mb-10 border border-white/5">
        <span className="text-muted text-xs tracking-widest uppercase">
          {project.title}
        </span>
      </div>

      {/* Header */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.category.map((cat) => (
          <span
            key={cat}
            className="text-xs px-2 py-1 rounded-full border border-accent/30 text-accent"
          >
            {cat}
          </span>
        ))}
      </div>

      <h1 className="font-display text-4xl md:text-6xl text-text mb-6">
        {project.title}
      </h1>

      <p className="text-muted text-lg leading-relaxed mb-10">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-10">
        <h2 className="text-xs text-accent tracking-widest uppercase mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-sm px-3 py-1 rounded-full border border-white/10 text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="px-6 py-3 bg-accent text-surface text-sm font-medium rounded-full hover:bg-accent/80 transition-colors duration-200"
          >
            Live Site
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            className="px-6 py-3 border border-white/10 text-text text-sm font-medium rounded-full hover:border-accent/50 transition-colors duration-200"
          >
            GitHub
          </a>
        )}
      </div>
    </main>
  );
}