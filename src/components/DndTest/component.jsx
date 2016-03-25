import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const WIDTH = 200;

const Types = {
  BLOCK: 'block',
};

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

@DropTarget(Types.BLOCK, blockTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(Types.BLOCK, blockSource, collect)
class Block extends Component {
  render() {
    const { id } = this.props;
    const { isDragging, connectDragSource, connectDropTarget } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(connectDropTarget(
      <div style={{padding: 10, margin: 10, width: WIDTH, cursor: 'move', opacity: opacity, backgroundColor: '#eee'}}>
        I am a draggable card number {id}
        </div>
    )
    );
  }
}

const blocksTarget = {
  drop() {
  }
};

const Blocks = [1,2,3,4,5];

@DragDropContext(HTML5Backend)
@DropTarget(Types.BLOCK, blocksTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
class App extends Component {
  render() {
		const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div style={{width: WIDTH}}>
        {Blocks.map(block => (<Block id={block} key={block}/>))}
      </div>
    );
  }
}

export default App;
