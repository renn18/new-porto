// src/components/ui/ProjectDetailModal.tsx

"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectShowcase from "./ui/ProjectShowcase";

// Definisikan tipe data untuk sebuah proyek
interface Project {
    title: string;
    description: string;
    tags: string[];
    images: string[];
}

interface ModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ModalProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-neutral-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 border border-neutral-700"
                onClick={(e) => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white text-2xl">&times;</button>
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-sky-500/20 text-sky-300 text-xs font-medium px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <p className="text-neutral-300 mb-8">{project.description}</p>
                <ProjectShowcase images={project.images} />
            </motion.div>
        </motion.div>
    );
}