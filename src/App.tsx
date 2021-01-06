import React from 'react';
import WindowWrapper from './components/WindowWrapper';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoItemData from './model/TodoItemData';
import useStore from './stores/useStore';

const { todolist } = useStore();
todolist.addItem(new TodoItemData('TodoList Mobx로 만들기', true));
todolist.addItem(new TodoItemData('랩 미팅 준비', false));
todolist.addItem(new TodoItemData('토요일 약속 장소 예약하기', false));

function App(): JSX.Element {
  return (
    <WindowWrapper>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>
    </WindowWrapper>
  );
}

export default App;
