"use client";
import { useContext } from "react";
import { InfoContext } from "@/contexts/AppInfoContext";

const useInfo = () => {
  const info = useContext(InfoContext);
  if (info === undefined) {
    throw new Error("useInfo must be used within an InfoContext.Provider");
  }
  return info;
};

export default useInfo;
