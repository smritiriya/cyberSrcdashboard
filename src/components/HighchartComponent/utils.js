import Highcharts from "highcharts";

import HighchartsExporting from "highcharts/modules/exporting";
import * as HighchartsExportData from "highcharts/modules/export-data";

HighchartsExporting(Highcharts);
// HighchartsExportData(Highcharts);

export const data = [1, 2, 3, 4, 5];
export const data1 = [1, 3, 5, 7, 5];

export const options = {
  title: {
    text: "Simple Line Chart",
  },
  series: [
    {
      name: "Data Series",
      data: data,
    },
    {
      name: "Data Series",
      data: data1,
    },
  ],
};

export const data2 = [5, 10, 15, 7, 20];

export const options1 = {
  chart: {
    type: "column",
  },
  title: {
    text: "Simple Bar Chart",
  },
  xAxis: {
    categories: [
      "Category 1",
      "Category 2",
      "Category 3",
      "Category 4",
      "Category 5",
    ],
  },
  yAxis: {
    title: {
      text: "Values",
    },
  },
  series: [
    {
      name: "Data Series",
      data: data,
    },
  ],
};
