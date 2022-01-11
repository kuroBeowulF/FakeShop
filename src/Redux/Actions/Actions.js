import { actionTypes } from "./ActionTypes";
const SendRequest = (loading) => {
  return {
    type: actionTypes.SEND_REQUEST,
    payload: loading,
  };
};
const GotData = (data, loading) => {
  return {
    type: actionTypes.GOT_DATA,
    payload: { data, loading },
  };
};
const GotError = (error) => {
  return {
    type: actionTypes.GOT_ERROR,
    payload: error,
  };
};
const SelectProduct = (selected, loading) => {
  return {
    type: actionTypes.SELECT_PRODUCT,
    payload: { selected, loading },
  };
};
const SelectProductToBasket = (item) => {
  return {
    type: actionTypes.SELECT_PRODUCT_TO_BASKET,
    payload: { item },
  };
};
const RemoveProFromBasket = (item) => {
  return {
    type: actionTypes.REMOVE_FROM_BASKET,
    payload: { item },
  };
};
const CountUp = (item) => {
  return {
    type: actionTypes.COUNT_UP,
    payload: { item },
  };
};
const CountDown = (item) => {
  return {
    type: actionTypes.COUNT_DOWN,
    payload: { item },
  };
};
const RemoveItem = (item, loading) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    payload: { item, loading },
  };
};
const UpdatedItem = (item, loading) => {
  return {
    type: actionTypes.UPDATE_ITEM,
    payload: { item, loading },
  };
};
const AddNewProduct = (item, loading) => {
  return {
    type: actionTypes.ADD_NEW_PRO,
    payload: { item, loading },
  };
};
export {
  RemoveItem,
  SendRequest,
  GotData,
  GotError,
  SelectProduct,
  SelectProductToBasket,
  RemoveProFromBasket,
  CountUp,
  CountDown,
  UpdatedItem,
  AddNewProduct,
};
