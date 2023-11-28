import { createReducer, on } from "@ngrx/store"
import { guardar } from "./producto.actions"
import { Productoo } from "../producto/producto.model"
import { eliminar } from "./producto.actions"

const localStorageInfo = localStorage.getItem("cartList")
const estadoInicial: Productoo[] = localStorageInfo ? JSON.parse(localStorageInfo) : []

export const productoReducer = createReducer(
    estadoInicial,
    on(guardar, (state, { productoo }) => {
      const nuevoEstado = [...state, productoo];
      localStorage.setItem('cartList', JSON.stringify(nuevoEstado));
      return nuevoEstado;
    }),
    on(eliminar, (state, { id }) => {
    console.log('Reducer: Eliminando producto con ID:', id);
    const nuevoEstadoo = state.filter(producto => producto.id !== id);
    console.log(nuevoEstadoo);
    localStorage.setItem('cartList', JSON.stringify(nuevoEstadoo));
    return nuevoEstadoo;
    })
  );
    