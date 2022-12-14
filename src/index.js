// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';

// 這支 CSS 檔的樣式會作用到全域
import './styles.css';

function App() {
  return <WeatherApp />;
}

// render weatherApp.js
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);