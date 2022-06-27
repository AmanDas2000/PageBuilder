import React, { useState } from 'react';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import GridLayout from 'react-grid-layout';
import Text from '../Text';
import Button from '../Button/button';

const Grid = () => {
  const [layout, setLayout] = useState([]);
  const [elements, setElements] = useState([]);
  const [count, setCount] = useState(0);
  const [drag, setDrag] = useState('text')

  const addText = (x,y) => {
    let key = count;
    setElements((prevElement) => [
      ...prevElement,
      <div key={key} data-grid={{ i: key, x: x, y: y, w: 3, h: 2 }}>
        <Text />
      </div>,
    ]);
    setCount(count + 1);
  };
  const addButton = (x,y) => {
    let key = count;
    setElements((prevElement) => [
      ...prevElement,
      <div key={key} data-grid={{ i: key, x: x, y: y, w: 5, h: 1 }}>
        <Button />
      </div>,
    ]);
    setCount(count + 1);
  };


  return (
    <div>
          <div>
        <div
          className="droppable-element"
          draggable={true}
          unselectable="on"
          onDragStart={(e) => {
            setDrag('text')
          }}
        >
          <input placeholder="Drag me to enter text" style={{ width: '150px', height: '30px', cursor: 'pointer' }} />
        </div>
        <div
          className="droppable-element"
          draggable={true}
          unselectable="on"
          onDragStart={(e) => {
            setDrag('button')
          }}
        >
          <input placeholder="Drag me to enter Button" style={{ width: '150px', height: '30px', cursor: 'pointer' }} />
        </div>
        
      </div>

      
      <div className="grid">
        <GridLayout
          className="layout"
          layouts={layout}
          cols={24}
          rowHeight={30}
          width={window.innerWidth}
          // height={window.innerHeight}
          compactType={null}
          onLayoutChange={(e) => setLayout(e)}
          isDroppable={true}
          onDrop={(a, b, c) => {
            if (drag === 'text') addText(b.x, b.y);
            else if (drag==='button')addButton(b.x, b.y) }}
        >
          {elements}
        </GridLayout>
      </div>
    </div>
  );
};

export default Grid;
