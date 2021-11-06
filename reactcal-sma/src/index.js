import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText( ) {
  return 'Hi There';
}

const App  =  ( )  =>  {
  //const buttonText ='Click me!';

  return (
    <div>
      <label for="name" className="label" >enter e-mail</label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'red', color: 'white' }}>
      {getButtonText()}
      </button>
    </div>
  )
}


//const App  =  ( )  =>  {
//  const buttonText ={text: 'Click me!'};
//
//  return (
//    <div>
//      <label for="name" className="label" >enter e-mail</label>
//      <input id="name" type="text" />
//      <button style={{ backgroundColor: 'red', color: 'white' }}>
//      {buttonText.text}
//      </button>
//    </div>
//  )
//}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)