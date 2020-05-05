import { createAction, props } from '@ngrx/store';

export const crear = createAction(
    '[TODO] Crear Todo',
    props<{ texto:String }>()    
);

export const toggle = createAction(
    '[TODO] Toggle Todo',
    props<{ id: number }>()    
);

export const editar = createAction(
    '[TODO] Editar Todo',
    props<{ id: number, texto: String }>()    
);

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props<{ id: number }>()    
);

export const borrarCompletados = createAction(
    '[TODO] BorrarCompletado Todo', 
);

export const toggleAll = createAction(
    '[TODO] Marcar Todo',
    props<{ completado: boolean }>() 
);