import React from 'react';
import styled from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import TodoItemData from '../model/TodoItemData';

type TodoItemProps = {
  data: TodoItemData;
};

const TodoItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;

  /* TODO - full width setting without "100%, border-box"? */
  /* width: 100%;
  box-sizing: border-box; */
`;

const CheckBox = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 17px;
  height: 17px;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  font-size: 20px;
  /* TODO: add checked css difference - currently not use props.checked */
`;

const Title = styled.div`
  margin-left: 15px;
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

const RemoveButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
`;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function TodoItem({ data }: TodoItemProps) {
  return (
    <TodoItemBlock>
      <CheckBox checked={data.done}>
        {data.done && <MdDone size="15px" />}
      </CheckBox>
      <Title>{data.title}</Title>
      <RemoveButton>
        <MdDelete />
      </RemoveButton>
    </TodoItemBlock>
  );
}

export default TodoItem;
