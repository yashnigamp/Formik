import { useEffect, useState } from "react";
import axios from "../api/axios";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const GET_URL = "/users";

const User = () => {
  const [response, setResponse] = useState(null);
  async function fetchData() {
    const tabledata = await axios.get(GET_URL, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    await setResponse(tabledata?.data);
  }

  async function deleteData(id) {
    const response = await axios.delete(`${GET_URL}/${id}`);
    fetchData();
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {response && (
        <Container>
          <h1>USERS</h1>
          <hr />
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {response.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>{val.phno}</td>
                    <td>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => deleteData(val.id)}
                      >
                        &#10060;
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};
export default User;
