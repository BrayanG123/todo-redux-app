//este archivo Tambien se puede llamar AppState

import { ActionReducerMap } from '@ngrx/store';

//mis paquetes
import { Todo } from './todos/models/todo.model';
import { todoReducer } from './todos/todo.reducer';
import { filtrosValidos } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducer';

//este app.reducer me indicara como se encuentra el AppState global de la aplicacion


export interface AppState {
    todos: Todo[],
    filtro: filtrosValidos
}


export const appReducer: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filtro: filtroReducer
}


