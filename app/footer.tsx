export default function Footer() {
  return (
    <footer className="w-full p-8 flex justify-center bg-red-950 text-white">
      <div className="max-w-250 w-full flex justify-between items-center flex-wrap gap-x-8 gap-y-2">
        <h2 className="text-2xl shrink-0">
          © Althomare Theater {new Date().getFullYear()}
        </h2>
        <span className="shrink-0 text-sm">
          Reach out at{" "}
          <a href="mailto:contact@althomare.com">contact@althomare.com</a>
        </span>
      </div>
    </footer>
  );
}
