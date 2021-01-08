import React from 'react';
import styled from 'styled-components';
import ColorUtils from '../utils/ColorUtils';

const TodoTemplateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-direction: column;

  width: 512px;
  height: 768px;
  padding: 20px;
  padding-bottom: 40px;
  border-radius: 20px;
  overflow-y: auto;
  background: ${ColorUtils.WHITE};
`;

interface TodoTemplateProps {
  children: React.ReactNode;
}

const TodoTemplate: React.FC<TodoTemplateProps> = props => {
  const { children } = props;

  return <TodoTemplateWrapper>{children}</TodoTemplateWrapper>;
};

export default TodoTemplate;
