export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type: string;
    brand: string;
    quantityInStock?: number;
}

export type ProductParams = {
    orderBy: string;
    searchTerm?: string;
    types: string[];
    brands: string[];
    pageNumber: number;
    pageSize: number;
}