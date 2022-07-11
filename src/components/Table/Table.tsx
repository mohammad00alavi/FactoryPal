import { TableProps } from "../../types";
import { Row } from "./Row";
import "./Table.scss";

export const Table = (props: TableProps) => {
  const { data } = props;
  return (
    <div id="tableContainer">
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>label</th>
              <th>value</th>
              <th>type</th>
              <th>description</th>
              <th>category</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <Row data={item} key={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
