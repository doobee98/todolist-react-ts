import React from 'react';
import styled from 'styled-components';
import { useObserver } from 'mobx-react';
import useStore from '../stores/useStore';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  flex: 1;
  padding: 20px 0px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList: React.FC = () => {
  const { todolist } = useStore();

  return useObserver(() => (
    <TodoListWrapper>
      {todolist.model.items.map(item => (
        <TodoItem key={item.id} data={item} />
      ))}
    </TodoListWrapper>
  ));
};

export default TodoList;
