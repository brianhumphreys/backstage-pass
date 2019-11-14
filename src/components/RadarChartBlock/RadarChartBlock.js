import React, { useEffect } from "react";
import "./RadarChartBlock.css";
import renderChart from "./helpers";
import BottomTiles from "../subcomponents/BottomTiles";
import {Link} from "react-router-dom";

const RadarChartBlock = ({ id, account, comparing, initiative }) => {
  useEffect(() => {
    renderChart(id, account, initiative, comparing);
  }, []);
  return (
    <Link to={"/skillflex"}>
      <div className="donut-chart-block block">
        <div className="about">
          <h2 className="titular">SKILLS</h2>
          {initiative ? (
            <div className="legend-blue">
              Skills desired for {initiative.name}
            </div>
          ) : (
            <div></div>
          )}
          <div className="legend-red">
            {account.name.split(" ")[0]}'s Skills
          </div>
          <div id="tooltip" className="tooltip-placeholder"></div>
        </div>
        <canvas id={id} width="300" height="200"></canvas>
        <BottomTiles />
        <BottomTiles />
      </div>
    </Link>
  );
};

export default RadarChartBlock;
