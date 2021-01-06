import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
// import TodoItem from './TodoItem';
import TodoListData from '../model/TodoListData';
import TodoItemData from '../model/TodoItemData';

type TodoAddButtonProps = {
  data: TodoListData;
};

const TodoAddButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  cursor: pointer;
  /* TODO: MdAdd 사이즈 조절하는 다른 방법은 없는지? */
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function TodoList({ data }: TodoAddButtonProps) {
  const onClick = () => {
    data.items.unshift(TodoItemData.createDefault());
  };
  return (
    <TodoAddButtonBlock>
      <MdAdd size="40px" onClick={onClick} />
    </TodoAddButtonBlock>
  );
}

export default TodoList;
