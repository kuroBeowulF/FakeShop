import { actionTypes } from "../Actions/ActionTypes";
const intialstate = {
  data: [],
  loading: false,
  error: null,
  selected: [],
  removedItem: null,
  updatedItem: null,
};
const fetchReducer = (state = intialstate, { type, payload }) => {
  switch (type) {
    case actionTypes.SEND_REQUEST:
      return { ...state, loading: payload };
    case actionTypes.GOT_DATA:
      return { ...state, data: payload.data, loading: payload.loading };
    case actionTypes.GOT_ERROR:
      return { ...state, error: "SomeThing went wrong!!" };
    case actionTypes.SELECT_PRODUCT:
      return { ...state, selected: payload.selected, loading: payload.loading };
    case actionTypes.REMOVE_ITEM:
      console.log(state.loading);
      return { ...state, removedItem: payload.item, loading: payload.loading };
    case actionTypes.UPDATE_ITEM:
      console.log(state.loading);
      return { ...state, updatedItem: payload.item, loading: payload.loading };
    case actionTypes.ADD_NEW_PRO:
      console.log(state.loading);
      return { ...state, loading: payload.loading };
    default:
      return state;
  }
};

export default fetchReducer;
