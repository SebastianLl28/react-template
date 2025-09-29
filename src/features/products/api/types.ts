import type { Paginated } from "@/shared/types/api.types";

/**
 * Although we are obtaining all the fields that the entity has,
 * normally the backend should provide us only with DTOs
 */
interface ProductDto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: DimensionsDto;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ReviewDto[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaDto;
  thumbnail: string;
  images: string[];
}

interface DimensionsDto {
  width: number;
  height: number;
  depth: number;
}

interface MetaDto {
  createdAt: Date;
  updatedAt: Date;
  barcode: string;
  qrCode: string;
}

interface ReviewDto {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

type ProductsResponse = Paginated<ProductDto, "products">;

export type { ProductDto, ProductsResponse };
