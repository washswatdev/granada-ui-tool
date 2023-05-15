import { useState } from "react";
import styled from "styled-components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import JsonFormatter from "react-json-formatter";

// components
import { molecules } from "./components";

type MoleculeProps = { id: string; content: () => JSX.Element; json: any };

function App() {
  const [elements, setElements] = useState<any>();
  const [selectedMolecules, setSelectedMolecules] = useState<MoleculeProps[]>(
    []
  );

  const onDragEnd = (result: any) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const updatedSelectedMolecules = [...selectedMolecules];
      const selectedItem = molecules[source.index];
      updatedSelectedMolecules.splice(destination.index, 0, {
        ...selectedItem,
        id: selectedItem.id + new Date().getTime(),
      });
      setSelectedMolecules(updatedSelectedMolecules);
      const updatedElements = updatedSelectedMolecules.map((el) => el.json);
      setElements(updatedElements);
    } else {
      const copiedSelectedMolecules = [...selectedMolecules];
      const [removed] = copiedSelectedMolecules.splice(source.index, 1);
      copiedSelectedMolecules.splice(destination.index, 0, removed);
      setSelectedMolecules(copiedSelectedMolecules);
      const updatedElements: any = copiedSelectedMolecules.map((el) => el.json);
      setElements(updatedElements);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <ColumnWrapper>
          <Droppable droppableId={"MOLECULES"} isDropDisabled={true}>
            {(provided, snapshot) => (
              <MoleculesWrapper
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Title>Molecules</Title>
                {molecules.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <>
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              marginBottom: 20,
                              ...provided.draggableProps.style,
                            }}
                          >
                            <item.content />
                          </div>
                          {snapshot.isDragging && (
                            <div
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={{
                                marginBottom: 20,
                              }}
                            >
                              <item.content />
                            </div>
                          )}
                        </>
                      )}
                    </Draggable>
                  );
                })}
              </MoleculesWrapper>
            )}
          </Droppable>
        </ColumnWrapper>
        <ColumnWrapper>
          <Droppable
            key={"selectedMolecules"}
            droppableId={"selectedMolecules"}
          >
            {(provided, snapshot) => (
              <MoleculesWrapper
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Title>Screen</Title>
                {selectedMolecules.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <item.content />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </MoleculesWrapper>
            )}
          </Droppable>
        </ColumnWrapper>
        <ColumnWrapper style={{ width: 700 }}>
          <MoleculesWrapper style={{ width: 700 }}>
            <Title>JSON</Title>

            {!!elements && (
              <JsonFormatter
                json={JSON.stringify(elements)}
                tabWith={4}
                jsonStyle={{
                  propertyStyle: { color: "black" },
                  stringStyle: { color: "green" },
                  numberStyle: { color: "red" },
                }}
              />
            )}
          </MoleculesWrapper>
        </ColumnWrapper>
      </Container>
    </DragDropContext>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100vh;
`;

const ColumnWrapper = styled.div`
  margin: 8px;
  display: flex;
  width: 375px;
  min-height: 80vh;
  overflow: scroll;
`;

const MoleculesWrapper = styled.div`
  min-height: 100px;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
  min-width: 341px;
  border-radius: 5px;
  padding: 15px;
  margin-right: 45px;
`;

const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: center;
  margin-bottom: 30px;
`;
