import React, { PropTypes, Component } from 'react';
import LBlockAddButton from '../LBlockAddButton';
import LBlock from '../LBlock';
import DropTypes from 'constants/DropTypes';
import { DragDropContext } from 'react-dnd';
import { DragSource, DropTarget } from 'react-dnd';


const blockSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    return { id: props.id };
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log("endDrag", item.id, dropResult.listId);
    // CardActions.moveCardToList(item.id, dropResult.listId);
  }
};

const blockTarget = {
  canDrop() {
    return false;
  },

  hover(props, monitor) {
    const { id: draggedId } = monitor.getItem();
    const { id: overId } = props;

    if (draggedId !== overId) {
      console.log("MoveBlock", draggedId, overId);
      // const { id: overIndex } = props.findblock(overId);
      // props.moveblock(draggedId, overIndex);
    }
  }
};

const collect = (connect, monitor) => (
  {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
);

@DropTarget(DropTypes.BLOCK, blockTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(DropTypes.BLOCK, blockSource, collect)
class LBlockSection extends Component {
  render() {
    const { block, index } = this.props;
    const { isDragging, connectDragSource, connectDropTarget } = this.props;

    // Пример placholer AddButton (<div style={{ height: 30, backgroundColor: '#000' }} />) : null;

    return connectDragSource(connectDropTarget(
      <div>
        <LBlock block={block} isDragging={isDragging} />
        <LBlockAddButton index={index + 1} />
      </div>
    ));
  }
}

LBlockSection.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default LBlockSection;
