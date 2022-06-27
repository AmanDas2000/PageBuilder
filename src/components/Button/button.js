import React, { useRef,useState } from 'react';
import './style.css';

const Button = (props) => {
  const ref = useRef(null);
const [style, setStyle] = useState({})
  return (
    <div ref={ref} className="textWrap">
      <button  style={style} className="customButton">
        <div>click</div>
      </button>
      <button
        onClick={() => {
          setStyle({
            backgroundColor: ['red','blue','green','yellow','pink'][parseInt(Math.random()*10)%3],
          });
        }}
      >
        color
      </button>
      
    </div>
  );
};

export default Button;
