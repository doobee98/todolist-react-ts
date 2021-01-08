import TodoListStore from '../stores/TodoListStore';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useStore() {
  return {
    todolist: TodoListStore,
  };
}

export default useStore;
