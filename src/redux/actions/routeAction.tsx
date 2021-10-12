import store from "../store"

export function storeCurrentRoute(action) {
    store.dispatch({ type: 'STORE_ROUTE', payload: action })
}