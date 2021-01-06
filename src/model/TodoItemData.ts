/* eslint-disable lines-between-class-members */

class TodoItemData {
  private static counter = 0;

  public readonly id: number;
  public title: string;
  public done: boolean;

  constructor(_title: string, _done: boolean) {
    this.title = _title;
    this.done = _done;
    this.id = TodoItemData.counter;
    TodoItemData.counter += 1;
  }

  static createDefault(): TodoItemData {
    return new TodoItemData('제목을 입력해 주세요', false);
  }
}

export default TodoItemData;
