import React from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';

const MainPage: React.FC = () => {
  return (
    <TodoTemplate>
      <TodoHead />
      <TodoList />
    </TodoTemplate>
  );
};

export default MainPage;
