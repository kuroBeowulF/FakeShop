import axios from "axios";
import {
  SendRequest,
  GotData,
  GotError,
  SelectProduct,
  RemoveItem,
  AddNewProduct,
} from "./Actions";

const doFetch = (product) => {
  return async (dispatch) => {
    try {
      dispatch(SendRequest(true));
      const response = await axios.get(
        `https://fakestoreapi.com/products/${product}`
      );
      dispatch(GotData(response.data, false));
    } catch (error) {
      dispatch(GotError(error));
    }
  };
};
const removeProduct = (id) => {
  return async (dispatch) => {
    try {
      dispatch(SendRequest(true));
      const Removed = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
        {
          method: "DELETE",
        }
      );
      console.log(Removed.data);
      dispatch(RemoveItem(Removed.data, false));
    } catch (error) {
      console.log(error);
    }
  };
};
const updateProduct = (id, title, price, description, image, category) => {
  return async (dispatch) => {
    try {
      dispatch(SendRequest(true));
      const Updated = await axios.get(
        `https://fakestoreapi.com/products/${id}`,
        {
          method: "PATCH",
          body: {
            title: title,
            price: price,
            description: description,
            image: image,
            category: category,
          },
        }
      );
      console.log(Updated.config.body);
      dispatch(RemoveItem(Updated.config.body, false));
    } catch (error) {
      console.log(error);
    }
  };
};
const addNewProduct = (title, price, description, image, category) => {
  return async (dispatch) => {
    try {
      dispatch(SendRequest(true));
      const NewProduct = await axios.get(`https://fakestoreapi.com/products`, {
        method: "POST",
        body: {
          title: title,
          price: price,
          description: description,
          image: image,
          category: category,
        },
      });
      console.log(NewProduct.config.body);
      dispatch(AddNewProduct(NewProduct.config.body, false));
    } catch (error) {
      console.log(error);
    }
  };
};
const SelectFetch = (product) => {
  return async (dispatch) => {
    try {
      dispatch(SendRequest(true));

      const selected = await axios.get(
        `https://fakestoreapi.com/products/${product}`
      );
      dispatch(SelectProduct(selected.data, false));
    } catch (error) {
      dispatch(GotError(error));
    }
  };
};

export default {
  SelectFetch,
  doFetch,
  removeProduct,
  updateProduct,
  addNewProduct,
};
