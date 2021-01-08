import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useObserver } from 'mobx-react';
import { MdDone, MdDelete } from 'react-icons/md';
import ColorUtils from '../utils/ColorUtils';
import TodoItemData from '../model/TodoItemData';
import useStore from '../stores/useStore';
import useClickOutside from '../hooks/useClickOutside';

const TodoItemBlock = styled.div<{ highlight: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${ColorUtils.GREY};
  padding: 20px 10px;

  &:nth-child(1) {
    border-top: 1px solid ${ColorUtils.GREY};
  }

  ${props =>
    props.highlight &&
    css`
      background-color: ${ColorUtils.LIGHTGREY};
    `}
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 17px;
  height: 17px;
  border: 1px solid ${ColorUtils.BLACK};
  color: ${ColorUtils.BLACK};
  background-color: ${ColorUtils.WHITE};
  cursor: pointer;
  font-size: 20px;
`;

const Title = styled.input<{ checked: boolean }>`
  margin-left: 15px;
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  color: ${ColorUtils.BLACK};
  padding: 10px 8px;

  &:read-only {
    border-color: transparent;
  }

  ${props =>
    props.checked &&
    css`
      text-decoration: line-through;
    `}
`;

const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
  font-size: 20px;
  cursor: pointer;
`;

interface TodoItemProps {
  data: TodoItemData;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  const { data } = props;
  const { todolist } = useStore();

  const refTitle = useRef<HTMLInputElement>(null);
  const [editMode, setEditMode] = useState(false);
  const setEditOn = () => setEditMode(true);
  const setEditOff = () => setEditMode(false);
  const setTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    todolist.changeItem(data.id, {
      ...data,
      title: newTitle,
    });
  };
  const clickTitle = () => {
    if (!editMode) {
      setEditOn();
      // TODO: syntax sugar?
      (refTitle as any).current.select();
    }
  };
  const toggleDone = () => {
    todolist.changeItem(data.id, {
      ...data,
      done: !data.done,
    });
  };
  const removeThis = () => todolist.removeItem(data.id);

  useClickOutside(refTitle, setEditOff);

  return useObserver(() => (
    <>
      <TodoItemBlock highlight={editMode}>
        <CheckBox onClick={toggleDone}>
          {data.done && <MdDone size="15px" />}
        </CheckBox>
        <Title
          ref={refTitle}
          value={data.title}
          checked={data.done}
          readOnly={!editMode}
          onClick={clickTitle}
          onChange={setTitle}
        />
        <RemoveButton>
          <MdDelete onClick={removeThis} />
        </RemoveButton>
      </TodoItemBlock>
    </>
  ));
};

export default TodoItem;
