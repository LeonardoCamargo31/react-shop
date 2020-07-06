import { createStore } from 'redux'
import { saveState, loadState } from '../utils/localStorage'
import reducers from './reducers'

const persistedState = loadState()

const store = createStore(reducers, persistedState)

// é chamada sempre que o estado é alterado
store.subscribe(() => {
  saveState({
    cart: store.getState().cart,
  })
})

export default store
