export default function Footer() {
  return (
    <div className="w-full p-8 flex justify-center bg-red-950 text-white">
      <div className="max-w-250 w-full flex justify-between items-center flex-wrap gap-x-8 gap-y-2">
        <div className="text-2xl shrink-0">
          © Althomare Theater {new Date().getFullYear()}
        </div>
        <div className="shrink-0">
          Reach out at{" "}
          <a href="mailto:contact@althomare.com">contact@althomare.com</a>
        </div>
      </div>
    </div>
  );
}
