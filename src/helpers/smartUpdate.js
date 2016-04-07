// Заменяет элемент указанные по селектору в массиве на новый
// и возвращает новый массив
//
// в случае если элемент не изменился, отдает старый массив
//
// selectorFunc = (oldItem, newItem) => { oldItem.uuid === newItem.uuid }

export default (items, newItem, selectorFunc) => {
  const updatableItem = items.find( (item) => selectorFunc(item, newItem));

  if (updatableItem === newItem) {
    return items;
  }

  return items.map((item) => (selectorFunc(item, newItem) ? newItem : item));
}
