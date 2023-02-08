import _ from './action-types';

const getActionCreator = (actionType: string) => (payload: any) => ({
  payload,
  type: actionType,
});

export const setIsPreloadState = getActionCreator(_.SET_IS_PRELOAD_STATE);
