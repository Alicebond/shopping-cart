import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="landing">
        <h1>Welcome to Shopping Now!</h1>
        <Link to="products">
          <button className="btn start-btn">
            Browse our products {"---->"}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
