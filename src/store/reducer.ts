import { Action } from '../types/reducer'

export const listActionTypes = {
    add: 'add',
    edit: 'edit',
    delete: 'delete',
    startEdition: 'startEdition',
}

//Use reducer, segundo argumentova a ser el valor inicial
//dispatch envia un Action al reducer
//En las ejecuciones el Action del reducer va a ser lo que le enviemos como argumento al dispatch
//Lo que se retorne en la funcion va a ser el nuevo state
export const listReducer = (state: any, action: Action) => {
    const { type, payload } = action

    switch (type) {
        case listActionTypes.add: {
            return {
                ...state,
                list: state.list.concat(payload.item),
            }
        }

        case listActionTypes.startEdition: {
            return {
                ...state,
                entryToUpdate: payload.item,
            }
        }

        case listActionTypes.edit: {
            return {
                ...state,
                list: state.list.map((entry: any) => {
                    return entry.id == payload.item.id ? payload.item : entry
                }),
                entryToUpdate: undefined,
            }
        }

        case listActionTypes.delete: {
            return {
                ...state,
                list: state.list.filter(
                    (entry: any) => payload.item.id !== entry.id
                ),
            }
        }
    }
}

export const listInitialState = {
    list: [],
    entryToUpdate: undefined,
}
