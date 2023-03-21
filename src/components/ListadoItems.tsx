import { useQuery } from "react-query";
import { Category } from "../interfaces";
import { getItemCategory } from "../queries/items.queries";
import { extractCategoriaId } from "./ListadoCategoriasItem";

import ItemView from "./ItemView";

const ListadoItems = ({ categoria }: { categoria: Category }): JSX.Element => {
	// era menos mersa crear una interface?
	const idCategoria = extractCategoriaId(categoria.url);
	const { data, isLoading, isError } = useQuery(
		["itemCategory", idCategoria],
		() => getItemCategory(idCategoria)
	);

	if (isLoading) return <div>Cargando items...</div>;
	if (isError) return <div>No se pudo cargar los items...</div>;

	//console.log(data);

	return data ? (
		<>
			{data.items.map((item, index) => (
				<ItemView key={index} item={item} />
			))}
		</>
	) : (
		<></>
		// esto también está medio flojo de papeles?
	);
};

export default ListadoItems;
