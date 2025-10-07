"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BookOpen,
  Box,
  Cpu,
  Shuffle,
  Wrench,
  Play,
  ArrowRight,
  FileCode2,
  Database,
  Cloud,
  Scissors,
  CheckCircle,
} from "lucide-react";

export default function SciunitTabs() {
  return (
    <section
      id="tabs"
      className="w-full max-w-6xl mx-auto px-6 py-16 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-mizzouBlack mb-8">
          Learn <span className="text-mizzouGold">Sciunit</span> in 5 Tabs
        </h2>

        <Tabs defaultValue="background" className="w-full">
          {/* Tab Headers */}
          <TabsList className="flex flex-wrap justify-center bg-white border border-gray-200 rounded-lg p-1 mb-8">
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="what">What</TabsTrigger>
            <TabsTrigger value="how">How</TabsTrigger>
            <TabsTrigger value="modes">Modes</TabsTrigger>
            <TabsTrigger value="hello">Hello</TabsTrigger>
          </TabsList>

          {/* Tab Contents */}
          {/* Background */}
          <TabsContent value="background">
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Why reproducibility is hard</CardTitle>
                <CardDescription>
                  Zipping code and data isn’t enough — environments drift.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700 space-y-2">
                <ul className="list-disc pl-5">
                  <li>Dependencies change or disappear over time.</li>
                  <li>Colleagues can’t easily rerun or tweak code.</li>
                  <li>Data provenance often gets lost or fragmented.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* What */}
          <TabsContent value="what">
            <div className="grid gap-4 md:grid-cols-3">
              <FeatureCard
                icon={<Box className="h-5 w-5" />}
                title="Application Virtualization"
                desc="Sciunit captures binaries, libraries, scripts, and optional data — exactly as they ran."
              />
              <FeatureCard
                icon={<FileCode2 className="h-5 w-5" />}
                title="Provenance Graph"
                desc="Builds a process↔file lineage to let you rerun, modify, or slice experiments intelligently."
              />
              <FeatureCard
                icon={<Database className="h-5 w-5" />}
                title="Deduplicated Versions"
                desc="Stores many versions efficiently by chunking shared data blocks."
              />
            </div>
          </TabsContent>

          {/* How */}
          <TabsContent value="how">
            <div className="grid gap-4 md:grid-cols-3">
              <FeatureCard
                icon={<Cpu className="h-5 w-5" />}
                title="Stable Runtime"
                desc="Captured sandbox runs identically anywhere — no re-installs."
              />
              <FeatureCard
                icon={<Shuffle className="h-5 w-5" />}
                title="Repeat Any Way"
                desc="Exact repeat, slice partial runs, or modify steps with provenance support."
              />
              <FeatureCard
                icon={<Cloud className="h-5 w-5" />}
                title="Local or Remote"
                desc="Run locally or remotely with consistent environments and results."
              />
            </div>
          </TabsContent>

          {/* Modes */}
          <TabsContent value="modes">
            <div className="grid gap-4 md:grid-cols-3">
              <ModeCard
                icon={<Play className="h-5 w-5" />}
                title="As-Is Repeat"
                points={[
                  "Reproduce the original run exactly",
                  "Great for audits & papers",
                  "Optional input freezing",
                ]}
              />
              <ModeCard
                icon={<Scissors className="h-5 w-5" />}
                title="Partial Repeat"
                points={[
                  "Choose specific steps to rerun",
                  "Auto-resolves dependencies",
                  "Smaller container, faster share",
                ]}
              />
              <ModeCard
                icon={<Wrench className="h-5 w-5" />}
                title="Modify & Rerun"
                points={[
                  "Edit configs or scripts safely",
                  "Compare outputs across versions",
                  "Share deduped results easily",
                ]}
              />
            </div>
          </TabsContent>

          {/* Hello Example */}
          <TabsContent value="hello">
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>“Hello, Sciunit” Example</CardTitle>
                <CardDescription>Package & Repeat in under a minute</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p><strong>hello.py</strong></p>
                <pre className="bg-gray-50 p-3 rounded-md text-left">
                  print("hello sciunit")
                </pre>
                <p><strong>Step 1:</strong> Package the run:</p>
                <CodeLine>scu package --cmd "python hello.py" --name hello-sciunit</CodeLine>
                <p><strong>Step 2:</strong> Repeat it anywhere:</p>
                <CodeLine>scu repeat hello-sciunit</CodeLine>
                <p className="text-xs text-gray-500">
                  Tip: add <code>--include data/*.csv</code> to freeze inputs.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
}

/* === Helper Subcomponents === */

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Card className="p-4 border border-gray-200 hover:shadow-md transition">
      <div className="flex items-start gap-3">
        <div className="text-mizzouGold">{icon}</div>
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-700">{desc}</p>
        </div>
      </div>
    </Card>
  );
}

function ModeCard({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <Card className="p-4 border border-gray-200 hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-2 text-mizzouGold">
        {icon}
        <p className="font-semibold text-black">{title}</p>
      </div>
      <ul className="list-disc pl-5 text-sm text-gray-700">
        {points.map((pt, i) => (
          <li key={i}>{pt}</li>
        ))}
      </ul>
    </Card>
  );
}

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <code className="block bg-gray-100 rounded-md px-3 py-1 text-left text-sm font-mono">
      {children}
    </code>
  );
}
