import Header from "./header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative h-full flex-1 flex flex-col items-center">
        {children}
      </main>
    </>
  );
}
