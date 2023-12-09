import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { options } from "./utils";
import { options1 } from "./utils";

function HighchartComponent() {
  return (
    <div style={{ display: "flex" }}>
      <HighchartsReact
        containerProps={{ className: `linechart` }}
        highcharts={Highcharts}
        options={options}
      />
      <HighchartsReact highcharts={Highcharts} options={options1} />
    </div>
  );
}

export default HighchartComponent;
