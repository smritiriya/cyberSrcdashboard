import React from "react";
import "./Table.css";

const Table = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      userType: "Admin",
      status: "Approved",
          joined: "23 aug,2023 ",
      
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      userType: "User",
      status: "Pending",
      joined: "23 aug,2023 ",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      userType: "Editor",
      status: "Rejected",
      joined: "23 aug,2023 ",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      userType: "User",
      status: "Pending",
      joined: "23 aug,2023 ",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      userType: "Viewer",
      status: "Approved",
      joined: "23 aug,2023 ",
    },
    {
      id: 6,
      name: "Eva Davis",
      email: "eva@example.com",
      userType: "Admin",
      status: "Rejected",
      joined: "23 aug,2023 ",
    },
  ];

    return (
      <div className="table-container">
        <div className="table-responsive">
          {/* <table className="table"> */}
            {/* ... */}
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>User Type</th>
                  <th>Joined </th>
                  <th> Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.userType}</td>
                    <td>{row.joined}</td>
                    <td>
                      <span >{row.status}</span>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            {/* </table> */}
          </table>
        </div>
      </div>
    );
};

export default Table;
