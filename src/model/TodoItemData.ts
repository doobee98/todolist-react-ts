import TodoItemContentData from './TodoItemContentData';

class TodoItemData {
  private static counter = 0;

  public readonly id: number;

  // content: TodoItemContent;

  constructor(public title: string, public done: boolean) {
    this.id = TodoItemData.counter;
    TodoItemData.counter += 1;
  }

  static createDefault(): TodoItemData {
    return new TodoItemData('제목을 입력해 주세요', false);
  }
}

export default TodoItemData;
