import { useContext } from "react";
import { useQuery } from "react-query";
import { ContextoCategorias } from "../context/ContextoCategorias";
import { Category } from "../interfaces";
import { getItemCategories } from "../queries/items.queries";
import ListadoCategoriasItem from "./ListadoCategoriasItem";

const ListadoCategorias = () => {
	const { seleccionarCategoria } = useContext(ContextoCategorias);
	const {
		data: categorias,
		isLoading,
		isError,
	} = useQuery("itemCategories", getItemCategories);

	if (isLoading) return <div>Cargando categorias...</div>;
	if (isError) return <div>No se pudo cargar categorias...</div>;

	return (
		<div id="listadoCategorias">
			{categorias?.map((categoria: Category, index) => (
				<ListadoCategoriasItem
					key={index}
					categoria={categoria}
					seleccionarCategoria={() => seleccionarCategoria(categoria)}
				/>
			))}
		</div>
	);
};

export default ListadoCategorias;
