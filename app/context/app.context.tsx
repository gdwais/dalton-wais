"use client";

import React, { createContext } from "react";

type AppState = {
  // Add any app state you need to keep in the future here
};

export const AppContext = createContext<AppState>({});

export const AppContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
