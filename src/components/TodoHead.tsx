import React from 'react';
import styled from 'styled-components';
import ColorUtils from '../utils/ColorUtils';
import TodoAddButton from './TodoAddButton';

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  border-bottom: ${ColorUtils.LIGHTGREY};
`;

const TodoHead: React.FC = () => {
  return (
    <TodoHeadBlock>
      <h1>TodoList</h1>
      <TodoAddButton />
    </TodoHeadBlock>
  );
};

export default TodoHead;
