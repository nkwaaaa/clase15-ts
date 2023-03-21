import { Category } from "../interfaces";

export const extractCategoriaId = (url: string) => {
	return url.split("item-category")[1].replace("/", "");
};

interface Props {
	categoria: Category;
	seleccionarCategoria: (arg0: Category) => void;
}

const ListadoCategoriasItem = ({ categoria, seleccionarCategoria }: Props) => (
	<div onClick={() => seleccionarCategoria(categoria)}>
		<strong>{categoria.name}</strong>
		<small> {categoria.url}</small>
	</div>
);

export default ListadoCategoriasItem;
