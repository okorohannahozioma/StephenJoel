"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideInSectionProps {
  children: ReactNode;
  delay?: number;
}

export function SlideInSection({ children, delay = 0 }: SlideInSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
