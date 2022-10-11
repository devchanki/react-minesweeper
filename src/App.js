import createMine from "./util/createMine";
function App() {
  return (
    <div className="App">
      {JSON.stringify(createMine(9, 9, 10))}
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
