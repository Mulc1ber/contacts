import { Dispatch } from "redux";
import {
  fetchGroupsFailure,
  fetchGroupsRequest,
  fetchGroupsSuccess,
} from "../actions";
import { DATA_GROUP_CONTACT } from "src/__data__";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { delay } from "src/constants";

export const fetchGroups = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchGroupsRequest());
    try {
      await delay(500);
      dispatch(fetchGroupsSuccess(DATA_GROUP_CONTACT as GroupContactsDto[]));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(fetchGroupsFailure(error.message));
      } else {
        dispatch(fetchGroupsFailure("An unknown error occurred"));
      }
    }
  };
};
