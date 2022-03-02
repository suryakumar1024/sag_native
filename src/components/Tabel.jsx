import React from "react";
import { useSelector } from "react-redux";
import classes from "./tabel.module.css";

function Tabel(props) {
  const details = useSelector((state) => state.item.itemsArray);

  return (
    <div>
      <table className={classes.tabel}>
        <tbody>
          {details.map((item) => (
            <tr key={item.name}>
              <th className={classes.tabelHead}>{item.name}</th>
              <td className={classes.tabelHead}>{item.val} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabel;
