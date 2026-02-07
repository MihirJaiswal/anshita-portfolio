"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects } from "@/constant";
import ShareButton from "@/components/ShareButton";
import ParallaxSection from "@/components/ParallaxSection";

const projectDetails: Record<
  number,
  {
    problem: string;
    research: string[];
    wireframes: string[];
    finalDesigns: string[];
    outcomes: string[];
    tools: string[];
    duration: string;
    role: string;
  }
> = {
  1: {
    problem:
      "Spotify users struggle to discover new playlists that match their current mood or activity. The existing discovery mechanisms are often buried within the interface and don't surface relevant playlists at the right moments.",
    research: [
      "Conducted user interviews with 15 regular Spotify users",
      "Analyzed playlist discovery patterns through card sorting exercises",
      "Identified pain points in the current navigation flow",
      "Studied competitor apps like Apple Music and YouTube Music",
      "Created user personas representing different listening behaviors",
    ],
    wireframes: [
      "/assets/projects/spotify-wireframe-1.png",
      "/assets/projects/spotify-wireframe-2.png",
    ],
    finalDesigns: [
      "/assets/projects/spotify-final-1.png",
      "/assets/projects/spotify-final-2.png",
    ],
    outcomes: [
      "Improved playlist discovery rate by 40% in user testing",
      "Reduced time to find relevant playlists from 3.5 min to 45 seconds",
      "Achieved 4.8/5 user satisfaction rating",
      "Design principles adopted for other music platform projects",
    ],
    tools: ["Figma", "Maze", "Notion", "Miro"],
    duration: "4 weeks",
    role: "UX Researcher & Designer",
  },
  2: {
    problem:
      "Local bakeries often struggle to translate their warm, in-store experience to digital platforms. The Golden Whisk needed a website that would capture their brand personality while making online ordering intuitive.",
    research: [
      "Visited the physical bakery to understand the ambiance",
      "Interviewed 12 customers about their ordering preferences",
      "Analyzed competitor bakery websites",
      "Studied color psychology for food-related brands",
      "Mapped customer journey from discovery to purchase",
    ],
    wireframes: [
      "/assets/projects/bakery-wireframe-1.png",
      "/assets/projects/bakery-wireframe-2.png",
    ],
    finalDesigns: [
      "/assets/projects/bakery-final-1.png",
      "/assets/projects/bakery-final-2.png",
    ],
    outcomes: [
      "Warm visual identity reflecting the physical store's atmosphere",
      "Simplified ordering flow reducing steps by 50%",
      "Mobile-first design achieving 95+ Lighthouse score",
      "Positive feedback from client and early users",
    ],
    tools: ["Figma", "Adobe Illustrator", "Procreate", "Webflow"],
    duration: "6 weeks",
    role: "UI/UX Designer & Brand Strategist",
  },
};

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId);
  const details = projectDetails[projectId];

  if (!project || !details) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#E8E8E6]"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#E8E8E6]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => router.push("/#work")}
            className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>
          <ShareButton title={project.title} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[splash] mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
            <div>
              <span className="font-semibold">Role:</span> {details.role}
            </div>
            <div>
              <span className="font-semibold">Duration:</span> {details.duration}
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Tools:</span>
              {details.tools.join(", ")}
            </div>
          </div>
        </motion.div>

        {/* Hero Image with View Transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden mb-16"
          style={{ viewTransitionName: `project-image-${project.id}` }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </motion.div>
      </section>

      {/* Problem Statement */}
      <ParallaxSection speed={0.3}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {details.problem}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Research Methods</h3>
              <ul className="space-y-3">
                {details.research.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 bg-[#A5C9D1] rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      </ParallaxSection>

      {/* Wireframes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white/50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Wireframes
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {details.wireframes.map((wireframe, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100"
            >
              <Image
                src={wireframe}
                alt={`Wireframe ${index + 1}`}
                fill
                className="object-contain p-4"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final Designs Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Final Designs
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {details.finalDesigns.map((design, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={design}
                alt={`Final design ${index + 1}`}
                fill
                className="object-contain p-4"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcomes Section */}
      <ParallaxSection speed={0.3}>
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gradient-to-br from-[#A5C9D1]/20 to-transparent rounded-3xl my-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Outcomes</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {details.outcomes.map((outcome, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white/60 p-6 rounded-xl"
                >
                  <p className="text-gray-800">{outcome}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </ParallaxSection>

      {/* Footer Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <button
            onClick={() => router.push("/#work")}
            className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>
          {projectId < projects.length && (
            <Link
              href={`/projects/${projectId + 1}`}
              className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              Next Project
              <ExternalLink size={18} />
            </Link>
          )}
        </div>
      </section>
    </motion.main>
  );
}
