import React from 'react';
import styled from 'styled-components';

type WindowWrapperProps = {
  children: React.ReactNode;
};

const WindowWrapperBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vmax;
  height: 100vmin;
  background: #e9ecef;

  & * {
    box-sizing: border-box;
  }
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function WindowWrapper({ children }: WindowWrapperProps) {
  return <WindowWrapperBlock>{children}</WindowWrapperBlock>;
}

export default WindowWrapper;
