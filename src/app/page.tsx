import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`}>
          <div className="border rounded-xl p-4 hover:shadow-lg bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">Rs. {product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
