/** Ambient light canvas: soft gradient plus blurred color orbs. */
export function AmbientBackground() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-background via-secondary to-background" />
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-16 -right-10 size-72 rounded-full bg-brand/40 blur-[90px]" />
        <div className="absolute top-40 -left-16 size-64 rounded-full bg-accent/40 blur-[80px]" />
        <div className="absolute bottom-8 right-6 size-56 rounded-full bg-warm/40 blur-[90px]" />
      </div>
    </>
  );
}
