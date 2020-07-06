export function actionAddNewItem(newItem) {
  return {
    type: 'ADD_NEW_ITEM',
    payload: {
      id: newItem.id,
      title: newItem.title,
      filename: newItem.filename,
      price: newItem.price,
      amount: newItem.amount,
    },
  }
}

export function actionUpdateQuantity(item) {
  return {
    type: 'UPDATE_QUANTITY',
    payload: {
      id: item.id,
      amount: item.amount,
    },
  }
}

export function actionClearCart() {
  return {
    type: 'CLEAR_CART',
  }
}
