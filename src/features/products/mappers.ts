import type { ProductDto } from "./api/types";
import type { ProductVM } from "./model/ProductCardVM";

export const mapProductDtoToVM = (dto: ProductDto): ProductVM => ({
  id: dto.id,
  title: dto.title,
  price: dto.price,
  thumbnail: dto.thumbnail,
});
