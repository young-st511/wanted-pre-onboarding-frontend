import { Outlet } from "react-router-dom";
import { setAxiosDefaultConfig } from "../utils/axios/setAxiosDefaultConfig";

function Root() {
  return (
    <div>
      Root
      <Outlet />
    </div>
  );
}

function RootLoader() {
  setAxiosDefaultConfig();
}

export default Root;
