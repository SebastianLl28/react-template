import type { Meta } from "@/shared/types/meta.types";

class Product {
  public readonly id: number;
  public title: string;
  public description: string;
  public category: string;
  public price: number;
  public discountPercentage: number;
  public rating: number;
  public stock: number;
  public tags: string[];
  public brand: string;
  public sku: string;
  public weight: number;
  public dimensions: Dimensions;
  public warrantyInformation: string;
  public shippingInformation: string;
  public availabilityStatus: string;
  public reviews: Review[];
  public returnPolicy: string;
  public minimumOrderQuantity: number;
  public meta: Meta;
  public thumbnail: string;
  public images: string[];

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: Dimensions,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Review[],
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: Meta,
    thumbnail: string,
    images: string[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.tags = tags;
    this.brand = brand;
    this.sku = sku;
    this.weight = weight;
    this.dimensions = dimensions;
    this.warrantyInformation = warrantyInformation;
    this.shippingInformation = shippingInformation;
    this.availabilityStatus = availabilityStatus;
    this.reviews = reviews;
    this.returnPolicy = returnPolicy;
    this.minimumOrderQuantity = minimumOrderQuantity;
    this.meta = meta;
    this.thumbnail = thumbnail;
    this.images = images;
  }

  get discountedPrice(): number {
    return this.price * (1 - this.discountPercentage / 100);
  }

  get isInStock(): boolean {
    return this.stock > 0;
  }
}

class Dimensions {
  public width: number;
  public height: number;
  public depth: number;

  constructor(width: number, height: number, depth: number) {
    this.width = width;
    this.height = height;
    this.depth = depth;
  }
}

class Review {
  public rating: number;
  public comment: string;
  public date: string;
  public reviewerName: string;
  public reviewerEmail: string;

  constructor(
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
  ) {
    this.rating = rating;
    this.comment = comment;
    this.date = date;
    this.reviewerName = reviewerName;
    this.reviewerEmail = reviewerEmail;
  }
}

export type { Product };
