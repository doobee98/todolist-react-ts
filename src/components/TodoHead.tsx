import React from 'react';
import styled from 'styled-components';
import TodoAddButton from './TodoAddButton';
import TodoListData from '../model/TodoListData';

type TodoHeadProps = {
  data: TodoListData;
};

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  border-bottom: lightgrey;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function TodoHead({ data }: TodoHeadProps) {
  return (
    <TodoHeadBlock>
      <h1>TodoList</h1>
      <TodoAddButton data={data} />
    </TodoHeadBlock>
  );
}

export default TodoHead;
