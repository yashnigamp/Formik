import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const DataTable = (props) => {
    //console.log(props);
    return (
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
              {props.data.map((val, key) => {
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
                        onClick={() => props.handleDataTableClick(val.id)}
                      >
                        &#10060;
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
    )
}

export default DataTable;