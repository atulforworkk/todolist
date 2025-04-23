import Header from "@/components/header/Header";
import { Outlet } from "react-router-dom";

const PreAuthLayout = () => {
  return (
    <div>
      <div className=" bg-main-color ">
        <Header/>
      </div>
      <div>
        <Outlet />
        </div>
    </div>
  );
};

export default PreAuthLayout;
