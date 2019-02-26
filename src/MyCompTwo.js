import React from 'react';

const MyCompTwo = (props) => {
  return (
    <div>
      <button onClick={props.onSub} >-1</button>
      <button onClick={props.onAdd} >+1</button>
    </div>
  );
};

export default MyCompTwo;