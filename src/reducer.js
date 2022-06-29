
//initial state
export const init = {
  isOpen: true,//sideBar control
  id: null,
  layoutElements: [],//controls elements 
  layout: [],//controls layout
  color: '#37D67A',//controls color change
  changeColor: false,
  preview: false,//edit/preview toggle
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, isOpen: !state.isOpen, id: action.payload };
    case 'addButton':
      return {
        ...state,
        layoutElements: [...state.layoutElements, action.payload],
      };
    case 'addText':
      return {
        ...state,
        layoutElements: [...state.layoutElements, action.payload],
      };
    case 'changeLayout':
      return {
        ...state,
        layout: action.payload,
      };

    case 'changeColor':
      return {
        ...state,
        color: action.payload,
      };
    case 'resetColor':
      return {
        ...state,
        color: action.payload,
      };
    case 'remove':
      return {
        ...state,
        layoutElements: state.layoutElements.filter((e) => Number(e.key) !== action.payload),
      };
    case 'preview':
      return {
        ...state,
        preview: !state.preview,
      };
    default:
      return state;
  }
};


