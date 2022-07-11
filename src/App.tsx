import "./index.scss";
import "./App.scss";
import { Chart } from "./components/chart/Chart";
import { Table } from "./components/Table/Table";
import { data } from "./data/data.json";
import { IData } from "./types";

function App() {
  return (
    <div id="container">
      <Chart data={data as IData[]} />
      <Table data={data as IData[]} />
    </div>
  );
}

export default App;
