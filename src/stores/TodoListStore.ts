import { observable } from 'mobx';
import TodoListData from '../model/TodoListData';
import TodoItemData from '../model/TodoItemData';

interface TodoListStoreType {
  model: TodoListData;

  addItem: (item: TodoItemData) => void;
  addDefaultItem: () => void;
  removeItem: (id: number) => void;
  changeItem: (id: number, newItem: TodoItemData) => void;
}

const TodoListStore = observable<TodoListStoreType>({
  model: { items: [] },

  addItem(item: TodoItemData) {
    this.model.items.unshift(item);
  },

  addDefaultItem() {
    this.model.items.unshift(TodoItemData.createDefault());
  },

  removeItem(id: number) {
    const idx = this.model.items.findIndex(item => item.id === id);
    this.model.items.splice(idx, 1);
  },

  changeItem(id: number, newItem: TodoItemData) {
    const idx = this.model.items.findIndex(item => item.id === id);
    this.model.items[idx] = newItem;
  },
});

export default TodoListStore;
