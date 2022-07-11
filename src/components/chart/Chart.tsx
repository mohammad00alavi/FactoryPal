import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from "recharts";
import { IData } from "../../types";
import "./Chart.scss";

export const Chart = (props: { data: IData[] }) => {
  const { data } = props;
  const keys = data.map(({ id }) => id);
  const types = [...new Set(data.map(({ type }) => type))];

  return (
    <div id="chart">
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="label" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="value" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </div>
  );
};
