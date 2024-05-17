import React from 'react';
import "../Styles/StatSection.css"

const StatsSection = () => {

    const statsData = [
        {
          "value": 890,
          "label": "Delivered packages"
        },
        {
          "value": 137,
          "label": "Countries covered"
        },
        {
          "value": 740,
          "label": "Tons of Goods"
        },
        {
          "value": 600,
          "label": "Satisfied Clients"
        }
    ]

  return (
    <section className="stats-section">
      {statsData.map((stat, index) => (
        <div key={index} className="stat">
          <h2>{stat.value}</h2>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default StatsSection;