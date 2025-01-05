"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type AppState = {
  particleCount: number;
  refresh: boolean;
  particleSize: number;
  particleSpeed: number;
  lineMaxDistance: number;
  particleColor: number;
};

type Actions = {
  type: ReducerActions;
  payload?: {
    parameter: string;
    value: number;
  };
};

export enum ReducerActions {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
  SET_COUNT,
  INCREASE_SIZE,
  DECREASE_SIZE,
  INCREASE_SPEED,
  DECREASE_SPEED,
  INCREASE_MAGNETISM,
  DECREASE_MAGNETISM,
  UPDATE_PARAMETER,
  RESET_ALL,
}

const initialState: AppState = {
  particleCount: 500,
  refresh: false,
  particleSize: 3,
  particleSpeed: 0.5,
  lineMaxDistance: 100,
  particleColor: 0,
};

const loadInitialState = (): AppState => {
  if (typeof window === "undefined") return initialState;

  const savedState = localStorage.getItem("particleSettings");
  return savedState ? JSON.parse(savedState) : initialState;
};

const reducer = (state: AppState, action: Actions) => {
  let newState: AppState;

  switch (action.type) {
    case ReducerActions.INCREMENT_COUNT:
      newState = {
        ...state,
        particleCount: state.particleCount + 1000,
        refresh: !state.refresh,
      };
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;
    case ReducerActions.DECREMENT_COUNT:
      newState = {
        ...state,
        particleCount: Math.max(100, state.particleCount - 1000),
        refresh: !state.refresh,
      };
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;
    case ReducerActions.RESET_COUNT:
      newState = {
        ...initialState,
        refresh: !state.refresh,
      };
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;
    case ReducerActions.SET_COUNT:
      newState = {
        ...state,
        particleCount: action.payload?.value ?? state.particleCount,
        refresh: !state.refresh,
      };
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;
    case ReducerActions.INCREASE_SIZE:
      newState = {
        ...state,
        particleSize: Math.min(state.particleSize + 1, 8),
        refresh: !state.refresh,
      };
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;
    case ReducerActions.DECREASE_SIZE:
      newState = {
        ...state,
        particleSize: Math.max(state.particleSize - 1, 0.5),
        refresh: !state.refresh,
      };
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;
    case ReducerActions.INCREASE_SPEED:
      newState = {
        ...state,
        particleSpeed: Math.min(state.particleSpeed + 0.3, 2),
        refresh: !state.refresh,
      };
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;
    case ReducerActions.DECREASE_SPEED:
      newState = {
        ...state,
        particleSpeed: Math.max(state.particleSpeed - 0.3, 0.1),
        refresh: !state.refresh,
      };
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;

    case ReducerActions.UPDATE_PARAMETER:
      if (!action.payload) return state;

      const { parameter, value } = action.payload;
      switch (parameter) {
        case "speed":
          newState = {
            ...state,
            particleSpeed: value / 50,
            refresh: !state.refresh,
          };
          break;
        case "particleCount":
          newState = {
            ...state,
            particleCount: value,
            refresh: !state.refresh,
          };
          break;
        case "size":
          newState = {
            ...state,
            particleSize: value,
            refresh: !state.refresh,
          };
          break;
        case "lineDistance":
          newState = {
            ...state,
            lineMaxDistance: value,
            refresh: !state.refresh,
          };
          break;
        case "color":
          newState = {
            ...state,
            particleColor: value,
            refresh: !state.refresh,
          };
          break;
        default:
          return state;
      }
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;

    case ReducerActions.RESET_ALL:
      newState = {
        ...initialState,
        refresh: !state.refresh,
      };
      localStorage.setItem("particleSettings", JSON.stringify(newState));
      return newState;

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
  const [state, dispatch] = useReducer(reducer, loadInitialState());

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
