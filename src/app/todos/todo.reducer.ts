import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, borrarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';
 
export const estadoInicial: Todo[] = [
    new Todo('cobrar bono'),
    new Todo('comprar pollo'),
    new Todo('estudiar redux'),
    new Todo('tomar cafe'),
];
 
const _todoReducer = createReducer(estadoInicial,
  
  on(crear, (state, { texto }) => [ ...state, new Todo(texto) ]), //[...state] es una desestructuracion (investigar) Extrae cada uno de los items y regresalos de manera independiente
  on(borrar,(state, { id }) => state.filter( todo => todo.id !== id ) ), //el filter retorna un nuevo arreglo (util para evitar mutar)
  on(borrarCompletados, (state) => state.filter( todo => todo.completado === false ) ), // es lo mismo: todo => !todo.completado
  on(toggleAll,( state, { completado } ) => {
    return state.map( todo => {
      return {
        ...todo,
        completado
      }
    } )
  } ), 
  
  on(toggle,(state, { id }) => { //marcar como completado
    return state.map( todo => { //se usa el map porque crea un NUEVO array y lo aprovecharemos para retorarlo
      
      if ( todo.id === id ) {
        return { //es necesario hacer esto para evitar hasta las propiedades del objeto
          ...todo,// a los puntos se les llama spread (extrae todas las propiedades menos el completado q yo lo manejo)
          completado: !todo.completado
        }
      }else{
        return todo;
      }

    } )
  } ),

  on(editar,(state, { id, texto }) => {
    return state.map( todo => {
      
      if ( todo.id === id ) {
        return { 
          ...todo,
          texto: texto
        }
      }else{
        return todo;
      }

    } )
  } ),

);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}