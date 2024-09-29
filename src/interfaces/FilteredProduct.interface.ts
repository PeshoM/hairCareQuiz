export interface Product {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  vendor: string;
  product_type: string;
  tags: string[];
  variants: {
    id: number;
    title: string;
    option1: string;
    option2: string | null;
    option3: string | null;
    sku: string;
    requires_shipping: boolean;
    taxable: boolean;
    featured_image: string | null;
    available: boolean;
    price: string;
    grams: number;
    compare_at_price: string | null;
    position: number;
    product_id: number;
    created_at: string;
    updated_at: string;
  }[];
  images: {
    id: number;
    created_at: string;
    position: number;
    updated_at: string;
    product_id: number;
    variant_ids: number[];
    src: string;
    width: number;
    height: number;
  }[];
  options: {
    name: string;
    position: number;
    values: string[];
  }[];
}

export interface FilteredProduct extends Product {
  matches: number;
  favourite?: boolean;
}
