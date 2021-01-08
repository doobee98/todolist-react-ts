import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ColorUtils from './utils/ColorUtils';
import MainPage from './pages/MainPage';
import useStore from './utils/useStore';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
    background: ${ColorUtils.SKYBLUE};

    & * {
      box-sizing: border-box;
    }
  }
`;

const App: React.FC = () => {
  const { todolist } = useStore();
  todolist.addItem('TodoList Mobx로 만들기', true);
  todolist.addItem('랩 미팅 준비', false);
  todolist.addItem('토요일 약속 장소 예약하기', false);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route component={MainPage} path="/todolist-react-ts" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
