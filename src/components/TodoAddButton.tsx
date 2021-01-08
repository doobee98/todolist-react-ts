import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import useStore from '../stores/useStore';

const TodoAddButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  cursor: pointer;
  /* TODO: MdAdd 사이즈 조절하는 다른 방법은 없는지? */
`;

const TodoAddButton: React.FC = () => {
  const { todolist } = useStore();

  return (
    <TodoAddButtonWrapper>
      <MdAdd size="40px" onClick={() => todolist.addDefaultItem()} />
    </TodoAddButtonWrapper>
  );
};

export default TodoAddButton;
