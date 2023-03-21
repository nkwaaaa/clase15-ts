import { useContext } from "react";
import { ContextoCategorias } from "../context/ContextoCategorias";
import ListadoItems from "./ListadoItems";

const VistaCategoria = () => {
	const { categoriaSeleccionada } = useContext(ContextoCategorias);
	if (!categoriaSeleccionada) return null;
	const categoria = categoriaSeleccionada;

	return (
		<div id="vistaCategoria">
			<h3 className="titulo">Categoria: {categoria.name}</h3>
			<ListadoItems categoria={categoria} />
		</div>
	);
};

export default VistaCategoria;
