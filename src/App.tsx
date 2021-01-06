import React from 'react';
import WindowWrapper from './components/WindowWrapper';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoListData from './model/TodoListData';
import TodoItemData from './model/TodoItemData';

const todolistdata: TodoListData = {
  items: [
    new TodoItemData('안녕하세요', true),
    new TodoItemData('이두섭입니다', false),
    new TodoItemData('투두리스트 테스트', true),
  ],
};

todolistdata.items.unshift(TodoItemData.createDefault());

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <WindowWrapper>
      <TodoTemplate>
        <TodoHead data={todolistdata} />
        <TodoList data={todolistdata} />
      </TodoTemplate>
    </WindowWrapper>
  );
}

export default App;
