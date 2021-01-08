import React from 'react';
import styled from 'styled-components';
import ColorUtils from '../utils/ColorUtils';
import TodoAddButton from './TodoAddButton';

const TodoHeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  border-bottom: ${ColorUtils.LIGHTGREY};
`;

const TodoHead: React.FC = () => {
  return (
    <TodoHeadWrapper>
      <h1>TodoList</h1>
      <TodoAddButton />
    </TodoHeadWrapper>
  );
};

export default TodoHead;
