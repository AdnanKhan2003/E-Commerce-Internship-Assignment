import Image from "next/image";
import ProductDetail from "@/components/Products/Product details/ProductDetail";
import { getHttpDetails } from "@/util/http";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const product = await getHttpDetails({ id: params.productSlug });

  if (!product) {
    notFound();
  }

  return {
    title: product.title,
    description: product.description,
  };
}

function ProductDetailsPage({ params }) {
  return (
    <main>
      <ProductDetail id={params.productSlug} />
    </main>
  );
}

export default ProductDetailsPage;
