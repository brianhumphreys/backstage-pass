import React from "react";

const BottomTiles = () => {
    return (
        <ul className="os-percentages horizontal-list">
            <li>
                <p className="ios os scnd-font-color">iOS</p>
                <p className="os-percentage">
                    21<sup>%</sup>
                </p>
            </li>
            <li>
                <p className="mac os scnd-font-color">Mac</p>
                <p className="os-percentage">
                    48<sup>%</sup>
                </p>
            </li>
            <li>
                <p className="linux os scnd-font-color">Linux</p>
                <p className="os-percentage">
                    9<sup>%</sup>
                </p>
            </li>
            <li>
                <p className="win os scnd-font-color">Win</p>
                <p className="os-percentage">
                    32<sup>%</sup>
                </p>
            </li>
        </ul>
    );
};

export default BottomTiles;
