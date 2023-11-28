import { createAction, props } from '@ngrx/store';
import { Productoo } from '../producto/producto.model';

export const guardar = createAction("[Producto, component] Guardar producto",
props<{ productoo:Productoo }>());


export const eliminar = createAction("[Producto, component] Eliminar producto",
props<{id:any}>()
);
