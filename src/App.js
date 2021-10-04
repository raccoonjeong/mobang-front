import {BrowserRouter, Route} from 'react-router-dom'
import PostMain from './page/post/PostMain';
import PostView from './page/post/PostView';
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/postView/:id' component={PostView}></Route>
        <Route exact path='/' component={PostMain}></Route>
      </BrowserRouter>
    </div>
  );
}
 
export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() { //aaa
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
