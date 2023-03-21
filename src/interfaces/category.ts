import { Item } from "./item";

export interface Category {
	name: string;
	url: string;
}

export interface CategoryWithItems extends Category {
	items: Item[];
}
