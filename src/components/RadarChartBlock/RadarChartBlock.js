import React, { useEffect } from "react";
import "./RadarChartBlock.css";
import renderChart from "./helpers";
import BottomTiles from "../subcomponents/BottomTiles";

const RadarChartBlock = ({ id, account, comparing, initiative }) => {
  useEffect(() => {
    renderChart(id, account, initiative, comparing);
  }, []);
  return (
      <div className="donut-chart-block block">
        <div className="about">
          <h2 className="titular">SKILLS</h2>
          <div id="tooltip" className="tooltip-placeholder"></div>
        </div>
        <canvas id={id} width="300" height="200"></canvas>
        <BottomTiles/>
        <BottomTiles/>
      </div>

  );
};

export default RadarChartBlock;
