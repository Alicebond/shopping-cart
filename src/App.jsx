import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="landing">
        <h1 className="temp-header">Welcome to Shopping Now!</h1>
        <Link to="products" className="btn start-btn">
          Browse our products {"---->"}
        </Link>
      </div>
    </div>
  );
}

export default App;
