import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
type Props = {
  index: number;
  item: any;
};
const UI003: React.FC<Props> = ({ index, item }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Wrapper>
            <Text>UI003</Text>
          </Wrapper>
        </div>
      )}
    </Draggable>
  );
};

export default UI003;

const Wrapper = styled.div`
  height: 200px;
  width: 100%;
  background-color: yellowgreen;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.text`
  font-size: 36px;
`;
