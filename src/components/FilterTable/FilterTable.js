import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
