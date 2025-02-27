import { notFound } from "next/navigation";

import { getProductById } from "@/data/get-product-by-id";

import ProductHeader from "./components/product-header";

interface ProductPageProps {
    params: Promise<{ slug: string; productId: string }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
    const { productId, slug } = await params

    const product = await getProductById(productId)
    if (!product || !slug)
        return notFound()

    return (
        <>
            <ProductHeader product={product} />
        </>
    );
}

export default ProductPage;