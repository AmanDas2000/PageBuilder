import React, { useState, useRef, useContext, useEffect } from 'react';
import './style.css';
import { globalContext } from '../../App';
import { AiOutlineClose } from 'react-icons/ai';
import { FiEdit } from 'react-icons/fi';

const Text = (props) => {
  const { context, dispatch } = useContext(globalContext);
  const [text, setText] = useState('');
  const ref = useRef(null);
  const textInputStyle = {
    border: 'none',
    fontSize: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%!important',
  };
  
  const [styleInput, setStyleInput] = useState(textInputStyle);

  useEffect(() => {
    if (context.id === props.id) {
      setStyleInput({ ...styleInput, color: context.color });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.color, context.id, props.id]);

  useEffect(() => {
    setStyleInput({ ...styleInput, textAlign:'center',height: `${document?.getElementsByClassName('textWrap')[0]?.clientHeight}px` })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [document?.getElementsByClassName('textWrap')[0]?.clientHeight])

  return (
    <div ref={ref} className='textWrap'>
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
            dispatch({ type: 'resetColor', payload: styleInput.color });
          }}
        >
          <FiEdit />
        </span>
      </div>
      :null}
      {!context.preview ?
        <input
        // className='textInput'
        style={styleInput}
        type="text"
        placeholder="Enter text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />:
      <div style={styleInput}>{text}</div>}
    </div>
  );
};

export default Text;
