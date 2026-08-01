"use client";

import { useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { ProjectModal } from "@/components/ui/project-modal";
import type { ProjectItem, WorkContent } from "@/types";

type ProjectsSectionProps = {
  content: WorkContent;
  /** Homepage shows "See All Projects"; portfolio opens the active project modal. */
  ctaMode?: "see-all" | "details";
};

export function ProjectsSection({
  content,
  ctaMode = "see-all",
}: ProjectsSectionProps) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProject = useCallback((project: ProjectItem, itemIndex: number) => {
    setIndex(itemIndex);
    setSelected(project);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <section id="portfolio" className="overflow-hidden py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-8 xl:gap-14">
          <FadeIn>
            {content.eyebrow ? (
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/40 bg-[var(--surface)] px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--brand-dark)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                {content.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl leading-tight text-[var(--foreground)] sm:text-4xl lg:text-[2.75rem]">
              {content.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--muted)]">
              {content.description}
            </p>
            <div className="mt-8">
              {ctaMode === "see-all" ? (
                <Button href="/portfolio">
                  See All Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={() => {
                    const project = content.items[index] ?? content.items[0];
                    if (project) openProject(project, index);
                  }}
                >
                  View Project Details
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="min-w-0">
            <div className="relative">
              <div className="overflow-hidden pb-2">
                <motion.div
                  className="flex gap-4 sm:gap-5"
                  animate={{ x: `-${index * 42}%` }}
                  transition={{ type: "spring", stiffness: 260, damping: 30 }}
                >
                  {content.items.map((project, itemIndex) => (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => openProject(project, itemIndex)}
                      aria-label={`View details for ${project.title}`}
                      className="group w-[78%] shrink-0 cursor-pointer text-left sm:w-[48%] lg:w-[42%]"
                    >
                      <div className="overflow-hidden rounded-t-[0.95rem] border border-[#2a2a2c] bg-[#2a2a2c] p-2 pb-0 shadow-[0_24px_50px_-24px_rgba(26,26,26,0.5)] transition duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_28px_56px_-22px_rgba(26,26,26,0.6)] group-hover:border-[var(--champagne)]/35 group-focus-visible:-translate-y-1.5">
                        <div className="mb-1.5 flex items-center justify-center">
                          <span className="h-1 w-10 rounded-full bg-white/20 transition group-hover:bg-[var(--champagne)]/50" />
                        </div>
                        <div className="relative aspect-[16/10] overflow-hidden rounded-t-sm bg-[var(--brand-soft)]">
                          <OptimizedImage
                            src={project.image}
                            alt={project.title}
                            fill
                            sizes="(max-width: 1024px) 70vw, 320px"
                            className="object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition duration-300 group-hover:from-black/90" />
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-[var(--brand)]">
                              {project.category}
                            </p>
                            <p className="mt-0.5 text-sm font-medium text-white">
                              {project.title}
                            </p>
                            <span className="mt-2 inline-flex translate-y-1 items-center gap-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white/90 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                              View Project
                              <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="relative h-2.5 rounded-b-md bg-[#1f1f21] transition group-hover:bg-[#252528]">
                        <div className="absolute inset-x-[22%] -bottom-1.5 h-1.5 rounded-b-md bg-[#151516]" />
                      </div>
                    </button>
                  ))}
                </motion.div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2.5">
                {content.items.map((item, itemIndex) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={`Show ${item.title}`}
                    onClick={() => setIndex(itemIndex)}
                    className={`h-2 rounded-full transition ${
                      itemIndex === index
                        ? "w-6 bg-[var(--brand)]"
                        : "w-2 bg-[var(--border)] hover:bg-[var(--brand)]/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <ProjectModal
        project={selected}
        open={modalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
