import React, { useContext, useState } from 'react';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import GridLayout from 'react-grid-layout';
import Text from '../Text';
import Button from '../Button/button';
import { globalContext } from '../../App';
import './style.css';
import { BsTextareaT, BsTextareaResize } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';
import Export from '../../export';

const Grid = () => {
  const { context, dispatch } = useContext(globalContext);
  // const [layout, setLayout] = useState([]);
  // const [elements, setElements] = useState([]);
  const [count, setCount] = useState(0);
  const [drag, setDrag] = useState('text');

  const addText = (x, y) => {
    let key = count;
    dispatch({
      type: 'addText',
      payload: (
        <div className="element" key={key} data-grid={{ i: key, x: x, y: y, w: 5, h: 2, minW: 5 }}>
          <Text id={key} />
        </div>
      ),
    });

    setCount(count + 1);
  };
  const addButton = (x, y) => {
    let key = count;
    dispatch({
      type: 'addButton',
      payload: (
        <div key={key} data-grid={{ i: key, x: x, y: y, w: 4, h: 2, minW: 3 }}>
          <Button id={key} />
        </div>
      ),
    });

    setCount(count + 1);
  };

  const navStyle = { cursor: 'pointer' };

  return (
    <div>
      <div className="elementSelector">
        <div
          className="droppable-element"
          draggable={true}
          unselectable="on"
          onDragStart={(e) => {
            setDrag('text');
          }}
        >
          <div style={navStyle}>
            <BsTextareaT size={'2em'} />
          </div>
        </div>
        <div
          className="droppable-element"
          draggable={true}
          unselectable="on"
          onDragStart={(e) => {
            setDrag('button');
          }}
        >
          <div style={navStyle}>
            <BsTextareaResize size={'2em'} />
          </div>
        </div>
        <div style={navStyle} onClick={() => dispatch({ type: 'preview' })}>
          <FiEdit3 size={'1.6em'} />
        </div>
        <Export />
      </div>

      <div className="grid">
        <GridLayout
          className="layout"
          layouts={context.layout}
          cols={24}
          rowHeight={30}
          width={window.innerWidth}
          // height={window.innerHeight}
          compactType={null}
          onLayoutChange={(e) => dispatch({ type: 'changeLayout', payload: e })}
          isDroppable={true}
          useCSSTransforms={true}
          onDrop={(a, b, c) => {
            if (drag === 'text') addText(b.x, b.y);
            else if (drag === 'button') addButton(b.x, b.y);
          }}
        >
          {context.layoutElements}
        </GridLayout>
      </div>
    </div>
  );
};

export default Grid;
