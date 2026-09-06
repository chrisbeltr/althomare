import { Metadata, Viewport } from "next";
import "@/app/style.css";

export const viewport: Viewport = {
  initialScale: 1,
  minimumScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Althomare Theater",
  description: "Welcome to Althomare Theater!",
  openGraph: {
    type: "website",
    title: "Althomate Theater",
    description: "Welcome to Althomare Theater!",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-200 text-gray-900 min-h-dvh flex flex-col justify-between">
        {children}
      </body>
    </html>
  );
}
