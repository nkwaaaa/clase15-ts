import { sleep } from "../helpers/sleep";
import { Category, CategoryWithItems } from "../interfaces";
import { Item } from "../interfaces";

export const getItemCategories = async (): Promise<Category[]> => {
	// await sleep(2);
	const response = await fetch("https://pokeapi.co/api/v2/item-category/");
	const data = await response.json();
	return data.results;
};

export const getItemCategory = async (
	categoryId: string
): Promise<CategoryWithItems> => {
	// await sleep(2);
	const response = await fetch(
		`https://pokeapi.co/api/v2/item-category/${categoryId}`
	);
	const data = await response.json();
	return data;
};

export const getItemDetalle = async (itemId: string): Promise<Item> => {
	const response = await fetch(`https://pokeapi.co/api/v2/item/${itemId}`);
	const data = await response.json();
	return data;
};
