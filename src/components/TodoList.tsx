import React from 'react';
import styled from 'styled-components';
import { useObserver } from 'mobx-react';
import TodoItem from './TodoItem';
import useStore from '../stores/useStore';

const { todolist } = useStore();

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 0px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList(): JSX.Element {
  return useObserver(() => (
    <TodoListBlock>
      {todolist.model.items.map(item => (
        <TodoItem key={item.id} data={item} />
      ))}
    </TodoListBlock>
  ));
}

export default TodoList;
