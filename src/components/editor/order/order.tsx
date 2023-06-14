import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Icon } from '../../icon/icon';
import { useState } from 'react';
import { Text } from '../../text/text';

interface OrderProps {
  className?: string;
  elements: { id: string; name: string }[];
  onChange?: (elements: { id: string; name: string }[]) => void;
}

export function Order(props: OrderProps) {
  const { elements, className = '', onChange } = props;
  const [list, setList] = useState(elements);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const currentList = [...list];
    const elementToMove = currentList[source.index];
    currentList.splice(source.index, 1);
    currentList.splice(destination.index, 0, elementToMove);
    setList(currentList);
    onChange && onChange(currentList);
  };

  return (
    <div className={className}>
      <DragDropContext onDragEnd={(result: DropResult) => onDragEnd(result)}>
        <Droppable droppableId="list">
          {(providedDroppable) => (
            <div
              className="flex flex-col gap-1"
              ref={providedDroppable.innerRef}
              {...providedDroppable.droppableProps}>
              <>
                {list.map((element, index) => (
                  <Draggable draggableId={element.id} index={index} key={element.id}>
                    {(providedDraggable) => (
                      <div
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                        className="flex h-10 items-center gap-3 rounde bg-grey-600 border border-grey-400 px-3">
                        <Icon name="expand-up-down-line" className="text-grey-300" />
                        <Text>{element.name}</Text>
                      </div>
                    )}
                  </Draggable>
                ))}
              </>
              {providedDroppable.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
