import React, { useContext, useRef, useState, useEffect } from 'react';
import './style.css';
import { globalContext } from '../../App';
import { FiEdit } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const initialWrap = {
  width: '105%',
  height: '100%',
  minWidth: '50px',
  minHeight: '50px',
  fontSize: '25px',
  border: '2px solid gray',
  borderRadius: '5px',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'
};

const inputWrap = {
  border: 'none',
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '25px',
  width: '100%',
  backgroundColor: '#f0f0f0',
};



const Button = (props) => {
  const ref = useRef(null);
  const [style, setStyle] = useState(initialWrap);
  const [styleInput, setStyleInput] = useState(inputWrap);
  const [text, setText] = useState('');
  const { context, dispatch } = useContext(globalContext);

  useEffect(() => {
    if (context.id === props.id) {
      setStyle({ ...style, backgroundColor: context.color });
      setStyleInput({ ...styleInput, backgroundColor: context.color });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.color, context.id, props.id]);

  return (
    <div ref={ref} className="buttonwrap">
      {!context.preview ?
      <div>
        <span
          className="removeStyle"
          onClick={() => {
            dispatch({ type: 'remove', payload: props.id });
          }}
        >
          <AiOutlineClose />
        </span>
        <span
          className="colorStyle"
          onClick={() => {
            dispatch({ type: 'toggle', payload: props.id });
            dispatch({ type: 'resetColor', payload: style.backgroundColor });
          }}
        >
          <FiEdit />
        </span>
      </div>
      :null}
      {!context.preview ? (
        <button style={style}>
          <input
            placeholder="Enter text"
            style={styleInput}
            value={text}
            onChange={(e) => {
              e.preventDefault();
              setText(e.target.value);
            }}
          />
        </button>
      ) : (
        <button style={style}>{text}</button>
      )}
    </div>
  );
};

export default Button;
