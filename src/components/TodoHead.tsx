import React from 'react';
import styled from 'styled-components';
import ColorPalette from '../common/ColorPalette';
import TodoAddButton from './TodoAddButton';

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  border-bottom: ${ColorPalette.LIGHTGREY};
`;

function TodoHead(): JSX.Element {
  return (
    <TodoHeadBlock>
      <h1>TodoList</h1>
      <TodoAddButton />
    </TodoHeadBlock>
  );
}

export default TodoHead;
