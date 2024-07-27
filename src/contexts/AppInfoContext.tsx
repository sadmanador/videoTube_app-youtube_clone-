"use client";
import InfoContextProps from "@/types/InfoType";
import React, {
  createContext,
  ReactNode,
  useState
} from "react";

export const InfoContext = createContext<InfoContextProps | undefined>(undefined);

interface AppVarsProps {
  children: ReactNode;
}

const AppInfoContext: React.FC<AppVarsProps> = ({ children }) => {
  const [sidebar, setSidebar] = useState<boolean>(true);

  const info: InfoContextProps = { sidebar, setSidebar };

  return <InfoContext.Provider value={info}>{children}</InfoContext.Provider>;
};

export default AppInfoContext;
