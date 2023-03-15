import "./App.css";
import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { TextField, Button } from "@mui/material";
import { collection, addDoc } from "firebase/firestore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 200,
  bgcolor: "rgba(255, 255, 255, 0.5);",
  border: "2px solid primary.main",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

function App() {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [regno, setRegno] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [year, setYear] = useState("");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    if (
      name == null ||
      name == "" ||
      branch == null ||
      branch == "" ||
      regno == null ||
      regno == "" ||
      email == null ||
      email == "" ||
      phone == null ||
      phone == "" ||
      year == null ||
      year == "" ||
      email == null ||
      email == ""
    ) {
      alert("Please Fill In All Required Fields");
      return false;
    } else {
      await addDoc(usersCollectionRef, {
        Branch: branch,
        Name: name,
        Phoneno: phone,
        Regno: regno,
        Year: year,
        email: email,
      });
      handleOpen();
    }
  };

  return (
    <div className="App">
      <div className="form">
        <img src="https://i.imgur.com/twT3QYh.png" alt="" />
        <TextField
          className="input"
          sx={{ margin: 0.5 }}
          id="outlined-basic"
          onChange={(event) => {
            setName(event.target.value);
          }}
          label="Name"
          required
          color="warning"
          variant="outlined"
        />
        <TextField
          required
          className="inputField"
          sx={{ margin: 0.5 }}
          id="outlined-basic"
          label="Branch"
          color="warning"
          inputProps={{ style: { fontFamily: 'nunito', color: 'white' } }}
          onChange={(event) => {
            setBranch(event.target.value);
          }}
          placeholderTextColor="#000" 
          variant="outlined"
        />
        <TextField
          required
          className="input"
          sx={{ margin: 0.5 }}
          id="outlined-basic"
          label="Reg No"
          color="warning"
          onChange={(event) => {
            setRegno(event.target.value);
          }}
          variant="outlined"
        />
        <TextField
          required
          className="input"
          id="outlined-basic"
          sx={{ margin: 0.5 }}
          label="Email Id"
          color="warning"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          variant="outlined"
        />
        <TextField
          required
          className="input"
          id="outlined-basic"
          sx={{ margin: 0.5 }}
          color="warning"
          label="Phone No"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          variant="outlined"
        />
        <TextField
          required
          className="input"
          id="outlined-basic"
          sx={{ margin: 0.5 }}
          label="Year"
          color="warning"
          onChange={(event) => {
            setYear(event.target.value);
          }}
          variant="outlined"
        />
        <Button type="submit" variant="contained" onClick={createUser}>
          Submit
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="p">
              You are successfully registered.
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default App;
