import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "E-Commerce Starter",
  description: "A simple e-commerce starter website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-md">
          <nav className="container mx-auto px-4 py-4 flex justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">MyShop</Link>
            <div className="flex gap-6">
              <Link href="/cart" className="hover:text-blue-600">Cart</Link>
            </div>
          </nav>
        </header>
        <main className="container mx-auto px-4 py-8">{children}</main>
        <footer className="bg-gray-100 text-center py-4 mt-8">
          © {new Date().getFullYear()} MyShop
        </footer>
      </body>
    </html>
  );
}
