import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsGrid1X2Fill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import Table from "../Table";

function Home() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main
      className="main-container"
      style={{ backgroundColor: "rgba(246, 246, 246, 0.95)" }}
    >
      <div className="main-title">
        <h3>
          {" "}
          <BsGrid1X2Fill className="icon" /> <span style={{color:"black"}}>Dashboard</span>
        </h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <div style={{ padding: "15px" }}>
              {" "}
              <p style={{ marginTop: "5px", marginBottom: "5px" }}>
                Stock Trial
              </p>
              <h1 style={{ marginTop: "5px", marginBottom: "5px" }}>$150000</h1>
            </div>

            <BsFillArchiveFill className="card_icon" />
          </div>
          <div style={{ padding: "15px" }}>
            {" "}
            <p>Increased by 60%</p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div style={{ padding: "15px" }}>
              {" "}
              <p style={{ marginTop: "5px", marginBottom: "5px" }}>
                Total Profit
              </p>
              <h1 style={{ marginTop: "5px", marginBottom: "5px" }}>$25000</h1>
            </div>

            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <div style={{ padding: "15px" }}>
            {" "}
            <p>Increased by 30%</p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div style={{ padding: "15px" }}>
              {" "}
              <p style={{ marginTop: "5px", marginBottom: "5px" }}>
                Unique Visitors
              </p>
              <h1 style={{ marginTop: "5px", marginBottom: "5px" }}>$250000</h1>
            </div>

            <BsPeopleFill className="card_icon" />
          </div>
          <div style={{ padding: "15px" }}>
            {" "}
            <p>Increased by 80%</p>
          </div>
        </div>

        {/* <div className="card">
          <div className="card-inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="card_icon" />
          </div>
          <h1>42</h1>
        </div> */}
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div style={{ marginTop: "20px" }}>
        {" "}
        <Table />
      </div>
    </main>
  );
}

export default Home;
