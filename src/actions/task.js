// import { CREATE_TASK, DELETE_TASK } from "../constant/action-type";
import * as actionType from "../constant/actionType";

export const createTask = (newTask) => {
  return {
    type: actionType.CREATE_TASK,
    payload: newTask,
  };
};
export const deleteTask =(taskId)=>{
    return{
        type:actionType.DELETE_TASK,
        payload:taskId
    }
}