"use client";

import { makeStore, AppStore } from "@/redux/store";
import { Provider } from "react-redux";
import { useRef } from "react";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
