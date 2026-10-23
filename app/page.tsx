export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl space-y-4 border border-border p-8 rounded-lg bg-card shadow-sm">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          IndieOS
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          Build a small software business you control
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Application foundation is running. The publication UI and editorial
          guides are currently being established in accordance with the product
          and design specifications.
        </p>
      </div>
    </main>
  );
}
