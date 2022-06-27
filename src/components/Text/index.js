import React, { useState, useRef } from 'react';
import './style.css';

const Text = (props) => {
  const [text, setText] = useState('');
  const ref = useRef(null);
  const [style, setStyle] = useState({ minWidth: '200px'});


  return (
    <div
          ref={ref}
          className="textWrap"
          onMouseEnter={() => {
              setStyle({
                  width: `${ref.current.offsetWidth}px`
              })
          }}
    >
      <input
        className='text'
        style={style}
        type="text"
        placeholder="Enter text here"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
    </div>
  );
};

export default Text;
