import React, { useContext, useEffect, useState } from 'react';
import { BlockPicker } from 'react-color';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { globalContext } from '../../App';

const Sidebar = (props) => {
  const { context, dispatch } = useContext(globalContext);
  const [isOpen, setIsOpen] = React.useState(props.toggle);
  const [color, setColor] = useState(context.color);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    setIsOpen((prevState) => !prevState);
  }, [props.toggle]);

  const changeColor = (currentColor) => {
    dispatch({ type: 'changeColor', payload: currentColor });
  };
    
    const sideBarStyle = {
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

  return (
    <>
      <Drawer size={300} open={isOpen} onClose={toggleDrawer} direction="right" className="bla bla bla">
        <div
          style={sideBarStyle}
              >
            <div style={{fontSize:'25px',margin:'10px'}}>Pick color</div>
          <BlockPicker
            width={250}
            color={color}
            onChange={(e) => {
              setColor(e.hex);
              changeColor(e.hex);
            }}
          />
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;
