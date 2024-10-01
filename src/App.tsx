// src/App.tsx
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { getEarthquakeData } from './services/dataService';
import './App.css';

const EarthquakeChart = lazy(() => import('./components/EarthquakeChart'));

const App: React.FC = () => {
  const [earthquakeData, setEarthquakeData] = useState<any>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getEarthquakeData();
        setEarthquakeData(data);
        setError('');
      } catch (err) {
        setError('Error fetching data.');
        setEarthquakeData(null);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Earthquake Data Visualization</h1>
      {error && <p className="error">{error}</p>}
      {earthquakeData && (
        <Suspense fallback={<div>Loading Chart...</div>}>
          <EarthquakeChart data={earthquakeData} />
        </Suspense>
      )}
    </div>
  );
};

export default App;
