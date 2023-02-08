import _ from '../actions/action-types';

interface IState {
  isPreloadState: boolean;
}

const initialState: IState = {
  isPreloadState: true,
};

interface IAction {
  type: string;
  payload: any;
}

const globalReducer = (state: IState = initialState, action: IAction) => {
  const { type, payload } = action;

  switch (type) {
    case _.SET_IS_PRELOAD_STATE:
      return { ...state, isPreloadState: payload };

    default:
      return state;
  }
};

export default globalReducer;
