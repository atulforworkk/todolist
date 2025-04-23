import React, { useEffect, useState } from "react";

type Props = {
    tasklist:any[];
};

const ShowTasks = ({tasklist}: Props) => {
  console.log("🚀 ~ ShowTasks ~ tasklist:", tasklist)
  const [data, setData] = useState<any[]>([]);
  console.log("🚀 ~ ShowTasks ~ data:", data);
  // fetch function\


  return (
    <div className="flex-1 bg-yellow-300 ml-4">
      <ul className="text-xl font-semibold m-4">
{
    tasklist?.map((tasks,index)=>(
        <li key={index}> 
        <span className="mx-4">
        {index+1}
        </span>
        {tasks}
        </li>
    ))
}

      </ul>
    </div>
  );
};

export default ShowTasks;
