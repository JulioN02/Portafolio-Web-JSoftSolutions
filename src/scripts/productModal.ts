import { products } from "../data/products";
import { renderProductDetail } from "../components/sections/productDetail";
import { openModal } from "./modalManager";

export function openProductModal(productId: string): void {
  openModal({
    id: productId,
    items: products,
    getId: (product) => product.id,
    getTitle: (product) => product.title,
    renderContent: renderProductDetail,
  });
}
