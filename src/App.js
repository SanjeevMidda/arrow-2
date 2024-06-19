import "./index.css";

function App() {
  return (
    <div className="App">
      <h1>UK</h1>
      <svg
        width="190"
        height="83"
        viewBox="0 0 190 83"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        id="arrow"
      >
        <rect
          width="190"
          height="83"
          rx="41.5"
          fill="url(#paint0_linear_2_24)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2_24"
            x1="95"
            y1="0"
            x2="95"
            y2="83"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1BB458" />
            <stop offset="0.9999" stop-color="#1CB55A" />
            <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default App;
