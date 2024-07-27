import { Dispatch, SetStateAction } from "react";

type InfoContextProps = {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

export default InfoContextProps;
