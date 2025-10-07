"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function QuickstartSection() {
  return (
    <section
      id="quickstart"
      className="max-w-6xl mx-auto px-6 py-24 text-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-mizzouGold mb-4"
      >
        Quickstart Lab
      </motion.h3>

      <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
        Explore step-by-step CLI guides and Jupyter flows — coming soon to the
        Radiant Lab platform.
      </p>

      <motion.div
        whileHover={{ y: -4 }}
        className="max-w-md mx-auto"
      >
        <Card className="shadow-md rounded-2xl">
          <CardContent className="p-8">
            <Rocket className="w-10 h-10 mx-auto text-mizzouGold mb-4" />
            <h4 className="text-xl font-semibold mb-2">
              Launch Your First Experiment
            </h4>
            <p className="text-gray-600 mb-6">
              Learn how to package, run, and share your research objects.
            </p>
            <Button className="bg-mizzouGold text-black font-semibold hover:bg-yellow-400">
              Start Quickstart
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
