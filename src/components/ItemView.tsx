import { useQuery } from "react-query";
import { getItemDetalle } from "../queries/items.queries";

import { Item } from "../interfaces/item";

export const extractItemId = (url: string): string => {
	const parts = url.split("item");
	const id = parts[1].replace("/", "");
	return id;
};

const itemView = ({ item }: { item: Item }) => {
	const idItem = extractItemId(item.url);
	const { data, isLoading, isError } = useQuery(["item", idItem], () =>
		getItemDetalle(idItem)
	);

	isError && <div>Sin datos...</div>;
	isLoading && <div>Cargando...</div>;

	return data ? (
		<div>
			<h4 style={{ textTransform: "capitalize" }}> {item.name}</h4>

			<img src={data.sprites.default} />
		</div>
	) : null;
};

export default itemView;
