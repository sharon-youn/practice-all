import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button {
    padding: 5px;
    margin: 2px;
    border-radius: 5px;
  }
`
// const BlueButton = styled.button`
//   background-color: blue;
//   color:white;
// `;

// const BigBlueButton = styled(BlueButton)`
//   padding:10px;
//   margin-top:10px;
// `

// const BigRedButton = styled(BigBlueButton)`
//   background-color: red
// `
// const Button = styled.button`
//   background: ${ (props) => (props.skyblue? "skyblue" : "white")}
// `

const Button1 = styled.button`
  background: ${(props) => (props.color? props.color : "white")};
`
const Button2 = styled.button`
  background: ${(props) => props.color || "white"};
`

export default function App() {
  return (
    <>
    <GlobalStyle/>
    <Button1>Button1</Button1>
    <Button1 color="orange">Button1</Button1>
    <Button1 color="tomato">Button1</Button1>
    <br />
    <Button2>Button2</Button2>
    <Button2 color="pink">Button2</Button2>
    <Button2 color="turquoise">Button2</Button2>

    {/* <Button skyblue>Button1</Button>
    <br/>
    <Button>Button2</Button>
    <br />
     <BlueButton>BlueButton</BlueButton>
     <br />
     <BigBlueButton>Big Blue Button</BigBlueButton>
     <br />
     <BigRedButton>Big Red Button</BigRedButton> */}
    </>
 
  )
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
