import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      Root
      <Outlet />
    </div>
  );
}

export default Root;
