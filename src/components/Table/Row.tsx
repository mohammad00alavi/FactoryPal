import { IData } from "../../types";
import "./Table.scss";

export const Row = (props: { data: IData }) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.label}</td>
      <td>{props.data.value}</td>
      <td>{props.data.type}</td>
      <td>{props.data.description}</td>
      <td>{props.data.category}</td>
    </tr>
  );
};
