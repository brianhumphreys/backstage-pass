import React from 'react';

const LineChartBlock = () => {
    return (
        <div className="line-chart-block block clear">
            <div className="line-chart">
                <div className="grafico">
                    <ul className="eje-y">
                        <li data-ejeY="30"></li>
                        <li data-ejeY="20"></li>
                        <li data-ejeY="10"></li>
                        <li data-ejeY="0"></li>
                    </ul>
                    <ul className="eje-x">
                        <li>Apr</li>
                        <li>May</li>
                        <li>Jun</li>
                    </ul>
                    <span data-valor="25">
                    <span data-valor="8">
                      <span data-valor="13">
                        <span data-valor="5">
                          <span data-valor="23">
                            <span data-valor="12">
                              <span data-valor="15"></span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
            </div>
            <ul className="time-lenght horizontal-list">
                <li>
                    <a className="time-lenght-btn">
                        Week
                    </a>
                </li>
                <li>
                    <a className="time-lenght-btn">
                        Month
                    </a>
                </li>
                <li>
                    <a className="time-lenght-btn">
                        Year
                    </a>
                </li>
            </ul>
            <ul className="month-data clear">
                <li>
                    <p>
                        APR<span className="scnd-font-color"> 2013</span>
                    </p>
                    <p>
                        <span className="entypo-plus increment"> </span>21
                        <sup>%</sup>
                    </p>
                </li>
                <li>
                    <p>
                        MAY<span className="scnd-font-color"> 2013</span>
                    </p>
                    <p>
                        <span className="entypo-plus increment"> </span>48
                        <sup>%</sup>
                    </p>
                </li>
                <li>
                    <p>
                        JUN<span className="scnd-font-color"> 2013</span>
                    </p>
                    <p>
                        <span className="entypo-plus increment"> </span>35
                        <sup>%</sup>
                    </p>
                </li>
            </ul>
        </div>
    )
};

export default LineChartBlock;