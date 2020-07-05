const initialState = {
  itens: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NEW_ITEM':
      return { ...state, itens: [...state.itens, action.payload] }
    case 'UPDATE_QUANTITY': {
      const itens = [...state.itens]
      itens.forEach((item, index) => {
        if (item.id === action.payload.id) {
          itens[index] = {
            ...item,
            amount: action.payload.amount,
          }
        }
      })
      return { ...state, itens }
    }
    default:
      // retorna meu estado padrão
      return state
  }
}
