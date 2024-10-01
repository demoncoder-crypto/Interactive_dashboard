// src/components/EarthquakeChart.tsx
import React from 'react';
import { Scatter } from 'react-chartjs-2';

interface EarthquakeChartProps {
  data: any;
}

const EarthquakeChart: React.FC<EarthquakeChartProps> = ({ data }) => {
  const earthquakes = data.features.map((feature: any) => ({
    x: feature.properties.mag,
    y: feature.geometry.coordinates[2], // Depth in km
    label: feature.properties.place,
  }));

  const chartData = {
    datasets: [
      {
        label: 'Earthquake Magnitude vs. Depth',
        data: earthquakes,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Magnitude',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Depth (km)',
        },
        reverse: true, // So that deeper earthquakes are lower on the chart
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.raw.label || '';
            return `Location: ${label}`;
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>Earthquakes in the Past Week</h2>
      <Scatter data={chartData} options={options} />
    </div>
  );
};

export default EarthquakeChart;
