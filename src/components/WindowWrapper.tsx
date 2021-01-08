import React from 'react';
import styled from 'styled-components';
import ColorUtils from '../utils/ColorUtils';

type WindowWrapperProps = {
  children: React.ReactNode;
};

const WindowWrapperBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vmax;
  height: 100vmin;
  background: ${ColorUtils.SKYBLUE};

  & * {
    box-sizing: border-box;
  }
`;

function WindowWrapper({ children }: WindowWrapperProps): JSX.Element {
  return <WindowWrapperBlock>{children}</WindowWrapperBlock>;
}

export default WindowWrapper;
