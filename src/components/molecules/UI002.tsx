import React from "react";
import { Draggable } from "react-beautiful-dnd";

//@ts-ignore
import styled from "styled-components/native";

type Props = {
  index: number;
  item: any;
};

const UI002: React.FC<Props> = ({ index, item }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Wrapper>
            <Title>Why do we use it?</Title>
            <Text>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
          </Wrapper>
        </div>
      )}
    </Draggable>
  );
};

export default UI002;

const Wrapper = styled.View`
  width: 100%;
  height: 100px;
  border: 1px solid #cacaca;
  border-radius: 14px;
  padding: 10px 16px;
`;

const Title = styled.Text`
  font-size: 26px;
`;

const Text = styled.Text`
  font-size: 18px;
`;
