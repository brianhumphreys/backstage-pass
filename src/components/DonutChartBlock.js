import React from 'react';
import BottomTiles from "./subcomponents/BottomTiles";

const DonutChartBlock = () => {
    return  (
        <div className="donut-chart-block block">
            <h2 className="titular">OS AUDIENCE STATS</h2>
            <div className="donut-chart">
                <div id="porcion1" className="recorte">
                    <div className="quesito ios" data-rel="21"></div>
                </div>
                <div id="porcion2" className="recorte">
                    <div className="quesito mac" data-rel="39"></div>
                </div>
                <div id="porcion3" className="recorte">
                    <div className="quesito win" data-rel="31"></div>
                </div>
                <div id="porcionFin" className="recorte">
                    <div className="quesito linux" data-rel="9"></div>
                </div>
                <p className="center-date">
                    JUNE
                    <br />
                    <span className="scnd-font-color">2013</span>
                </p>
            </div>
            <BottomTiles />
            <BottomTiles />
        </div>
    );
};

export default DonutChartBlock;