import ShowTasks from "@/composites/showTask/ShowTasks";
import { Button, Input } from "@mantine/core";
import React, { useState } from "react";

type Props = {};

const Todolist = (props: Props) => {
  const [taskValue, setTaskValue] = useState("");
  // const [tas̵kValue, setTaskValue] = useState("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const handleAddTask = () => {
    if (taskValue.trim() !== "") {
      // setTaskList((prevList) => [...prevList, taskValue.trim()]);
      setTaskList((prevList) => [...prevList, taskValue.trim()]);
      setTaskValue(" ");
    }
  };
  return (
    <div>
      {/* header */}
      <div className="flex pt-4 justify-center">
        <Input className="w-8/12" placeholder="search task" />
      </div>
      <div className="flex  h-full justify-center py-4">
        <div className="flex-1 flex flex-col  bg-gray-200">
          <h1 className="text-2xl font-semibold underline m-4">Add Task</h1>

          <div className="flex justify-between">
            <Input
              className="w-9/12"
              onChange={(e) => {
                setTaskValue(e.target.value);
              }}
              value={taskValue}
              placeholder="Enter a Task"
            />
            <Button onClick={handleAddTask}>Add Task</Button>
          </div>
        </div>

        <ShowTasks tasklist = {taskList}  />
      </div>
    </div>
  );
};

export default Todolist;
