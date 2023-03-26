import { initialTask } from "../data/Task";
import * as actionType from "../constant/actionType";

export const taskReducer = (state = initialTask, action) => {
  switch (action.type) {
    case actionType.CREATE_TASK:
      return [...state, action.payload];

    case actionType.DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};
