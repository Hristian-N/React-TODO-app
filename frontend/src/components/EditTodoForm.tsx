import React, { useState } from "react";
import { iTodo } from "../components/TodoWrapper";

interface Props {
  editTodo: (todo: string, id: string) => void;
  task: iTodo;
}

const EditTodoForm = ({ editTodo, task }: Props) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(value, task.id);
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
