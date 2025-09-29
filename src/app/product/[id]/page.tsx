import { products } from "@/lib/products";

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return <div>Product not found</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-md rounded-lg"
      />
      <div>
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-2">Rs. {product.price}</p>
        <p className="mt-4">{product.description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
