import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoListData from '../model/TodoListData';

type TodoListProps = {
  data: TodoListData;
};

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  border: 1px solid blue;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function TodoList({ data }: TodoListProps) {
  return (
    <TodoListBlock>
      {data.items.map(itemData => (
        <TodoItem key={itemData.id} data={itemData} />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
