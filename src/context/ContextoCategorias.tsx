import { useReducer, createContext } from "react";
import { Category } from "../interfaces";

interface State {
	categoriaSeleccionada: Category | null;
}
interface Action {
	type: "SELECCIONAR_CATEGORIA";
	payload: {
		categoria: Category;
	};
}

const initialState: State = {
	categoriaSeleccionada: null,
};

const reducer = (state: State, action: Action): State => {
	switch (action.type) {
		case "SELECCIONAR_CATEGORIA":
			return { categoriaSeleccionada: { ...action.payload.categoria } };
		default:
			return state;
	}
};

interface ContextValue extends State {
	seleccionarCategoria: (categoria: Category) => void;
}

export const ContextoCategorias = createContext<ContextValue>({
	...initialState,
	seleccionarCategoria: () => {},
});

const ProviderCategorias = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const seleccionarCategoria = (categoria: Category) => {
		dispatch({
			type: "SELECCIONAR_CATEGORIA",
			payload: {
				categoria,
			},
		});
	};

	return (
		<ContextoCategorias.Provider
			value={{
				categoriaSeleccionada: state.categoriaSeleccionada,
				seleccionarCategoria,
			}}
		>
			{children}
		</ContextoCategorias.Provider>
	);
};

export default ProviderCategorias;
