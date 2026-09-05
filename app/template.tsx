import Header from "./header";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative">{children}</main>
    </>
  );
}
