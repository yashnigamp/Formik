import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';
import Table from "react-bootstrap/Table";
import axios from "../api/axios";
import DataTable from './DataTable'
const GET_URL = "/users";

const User = () => {
  //Constants

  //States
  const [response, setResponse] = useState(null);
  const [show, setShow] = useState(false);
  const [id,setId] = useState();
  //Hooks 
  useEffect(() => {
    fetchData();
  }, []);
  //Functions 
  const handleClose = () => {
    deleteData(id);
    setShow(false);
  }
  const handleShow = (id) => {
    //console.log(event);
    setId(id);
    setShow(true);
  }

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
    const responseData = await axios.delete(`${GET_URL}/${id}`);
    fetchData();
  }
  

  return (
    <>
      {response && (
        <Container>
          <h1>USERS</h1>
          <hr />
          <DataTable data= {response} handleDataTableClick={handleShow}/>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you Sure ?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>
        
      )}
    </>
  );
};
export default User;
