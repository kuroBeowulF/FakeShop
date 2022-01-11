import { actionTypes } from "../Actions/ActionTypes";

const initialState = {
  selectedProducts: {},
};

const basketReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SELECT_PRODUCT_TO_BASKET: {
      const { item } = payload;

      const items = { ...state.selectedProducts };
      if (items[item.id]) {
        const selected = items[item.id];
        items[item.id] = {
          ...selected,
          count: selected.count + 1,
          totalPrice: selected.price * (selected.count + 1),
        };
      } else {
        items[item.id] = {
          ...item,
          count: 1,
          totalPrice: item.count ? "" : item.price,
        };
      }
      return { ...state, selectedProducts: items };
    }
    case actionTypes.REMOVE_FROM_BASKET:
      delete state.selectedProducts[payload.item.id];
      return { ...state };
    case actionTypes.COUNT_UP:
      state.selectedProducts[payload.item.id] = {
        ...payload.item,
        count: payload.item.count + 1,
        totalPrice: (payload.item.count + 1) * payload.item.price,
      };
      return { ...state };
    case actionTypes.COUNT_DOWN:
      state.selectedProducts[payload.item.id] = {
        ...payload.item,
        count: payload.item.count > 1 ? payload.item.count - 1 : 1,
        totalPrice:
          payload.item.count > 1
            ? (payload.item.count - 1) * payload.item.price
            : payload.item.price,
      };
      console.log(state);
      return { ...state };
    default:
      return state;
  }
};
export default basketReducer;
