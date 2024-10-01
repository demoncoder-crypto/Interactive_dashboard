// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

ReactDOM.render(<App />, document.getElementById('root'));
