
import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [text, setText] = useLocalStorage("text", "");

  return (
    <div className="container mt-5 App">
      <div className="form-group">
        <label>Text</label>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter text"
        />
      </div>
    </div>
  );
}

export default App;