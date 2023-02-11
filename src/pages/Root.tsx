import { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { setAxiosDefaultConfig } from "../utils/axios/setAxiosDefaultConfig";
import { getAuth } from "../utils/token/getAuth";

function Root() {
  const location = useLocation().pathname;
  const navigate = useRef(useNavigate());

  useEffect(() => {
    if (location !== "/") {
      return;
    }
    if (getAuth()) {
      navigate.current("/todo");
    } else {
      navigate.current("/signin");
    }
  }, [location]);

  return (
    <div>
      Root
      <Outlet />
    </div>
  );
}

export function rootLoader() {
  setAxiosDefaultConfig();
  return null;
}

export default Root;
