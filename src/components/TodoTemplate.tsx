import React from 'react';
import styled from 'styled-components';
import ColorPalette from '../common/ColorPalette';

type TodoTemplateProps = {
  children: React.ReactNode;
};

const TodoTemplateBlock = styled.div`
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
  background: ${ColorPalette.WHITE};
`;

function TodoTemplate({ children }: TodoTemplateProps): JSX.Element {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
