import Link from "next/link";

export default function FlincStub() {
  return (
    <main role="main" className="max-w-2xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-4 text-[var(--primary)]">FLINC — Coming soon</h1>
      <p className="text-[var(--muted-foreground)] mb-6">
        We’re building a notebook-first learning track. For now, explore Sciunit below.
      </p>
      <Link
        href="/#sciunit"
        className="inline-block px-4 py-2 rounded-md bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90"
      >
        Go to Sciunit
      </Link>
    </main>
  );
}
