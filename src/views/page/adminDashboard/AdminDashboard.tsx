import AdminDashboardTable from "@/composites/adminDashboardTable/AdminDashboardTable";
import { Input } from "@mantine/core";
import React from "react";

type Props = {};

const AdminDashboard = (props: Props) => {
  // admin dashboard
  return (
    <div>
      {/* about Users  */}
      <Input className="w-8/12 items-center"/>
      <div className="flex gap-2 p-2 ">
        <div className="bg-white rounded-md flex-1">
          <h1>users</h1>
        </div>
        <div className="bg-white flex-1">
          <h1 className="text-black">Task</h1>
        </div>

      </div>
      {/* main task are shown here  */}
      <div>
            <AdminDashboardTable/>

        </div>
    </div>
  );
};

export default AdminDashboard;
