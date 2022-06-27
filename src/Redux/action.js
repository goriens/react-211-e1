//Create ActionCreator functions here
import * as Types from "./actionTypes";

export const getShoesRequest = () => {
  return {
    type: Types.GET_SHOES_REQUEST,
  };
};
export const getShoesSuccess = (payload) => {
  return {
    type: Types.GET_SHOES_SUCCESS,
    payload,
  };
};
export const getShoesFailure = () => {
  return {
    type: Types.GET_SHOES_FAILURE,
  };
};
