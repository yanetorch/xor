import React from "react";

//class Square extends React.Component {
function Square(props) {
  //render() {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value /* TODO */}
    </button>
  );
}

export { Square }; //пример именованного импорта.
