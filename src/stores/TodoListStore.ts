import { makeAutoObservable } from 'mobx';
import TodoListData from '../models/TodoListData';
import TodoItemData from '../models/TodoItemData';

class TodoListStore {
  currentId = 0;

  public model: TodoListData = { items: [] };

  constructor() {
    makeAutoObservable(this);
  }

  addItem(title: string, done: boolean): void {
    this.model.items.unshift({
      id: this.currentId,
      title,
      done,
    });

    this.currentId += 1;
  }

  addDefaultItem(): void {
    this.addItem('제목을 입력해 주세요', false);
  }

  removeItem(id: number): void {
    this.model.items.splice(this.findIndexById(id), 1);
  }

  changeItem(id: number, newItem: TodoItemData): void {
    this.model.items[this.findIndexById(id)] = newItem;
  }

  private findIndexById(id: number): number {
    const idx = this.model.items.findIndex(item => item.id === id);
    if (idx === -1) {
      throw Error(`Unexisted ID: ${id}`);
    }
    return idx;
  }
}

export default new TodoListStore();
