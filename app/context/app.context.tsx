"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type AppState = {
  particleCount: number;
  refresh: boolean;
};

type Actions = {
  type: ReducerActions;
  value?: number | string;
};

export enum ReducerActions {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
  SET_COUNT,
}

const initialState: AppState = {
  particleCount: 100,
  refresh: false,
};

const reducer = (state: AppState, action: Actions) => {
  console.log("reducer fired", { state, action });
  switch (action.type) {
    case ReducerActions.INCREMENT_COUNT:
      return {
        ...state,
        particleCount: state.particleCount + 500,
        refresh: !state.refresh,
      };
    case ReducerActions.DECREMENT_COUNT:
      return {
        ...state,
        particleCount: state.particleCount - 500,
        refresh: !state.refresh,
      };
    case ReducerActions.RESET_COUNT:
      return { ...state, particleCount: 100, refresh: !state.refresh };
    case ReducerActions.SET_COUNT:
      return {
        ...state,
        particleCount: action.value as number,
        refresh: !state.refresh,
      };
    default:
      return state;
  }
};

export const AppContext = createContext<{
  state: AppState;
  dispatch: Dispatch<Actions>;
}>({ state: initialState, dispatch: () => null });

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
