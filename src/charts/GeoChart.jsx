import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Poor"],
  ["Bangladesh", 90000],
  ["India", 500000],
  ["Afghanistan", 6000],
  ["Pakistan", 75000],
  ["Iran", 15000],
];

export const options = {
  region: "034",
  colorAxis: { colors: ["#00853f", "black", "#e31b23"] },
  backgroundColor: "#dad5d5",
  datalessRegionColor: "#dad5d5",
  defaultColor: "#dad5d5",
};

export default function GeoChart() {
  return (
    <Chart
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
