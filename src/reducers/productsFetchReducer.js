import {
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_REQUEST,
  PRODUCT_FETCH_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  hasError: false,
  product: [],
};

const ProductsFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return { loading: true };
    case PRODUCT_FETCH_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export default ProductsFetchReducer;