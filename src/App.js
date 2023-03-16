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
  const [desc, setDesc] = useState(false);
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
      email == "" ||
      desc == null ||
      desc == ""
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
        Desc: desc,
      });
      handleOpen();
    }
  };

  return (
    <div className="App">
      <div className="form">
        <img src="https://i.imgur.com/twT3QYh.png" alt="" />
        <TextField
          required
          className="inputField"
          sx={{
            margin: 0.5,
            color: "white",
          }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          id="outlined-basic"
          label="Name"
          color="warning"
          inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
          onChange={(event) => {
            setName(event.target.value);
          }}
          variant="outlined"
        />
        <TextField
          required
          className="inputField"
          sx={{
            margin: 0.5,
            color: "white",
          }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          id="outlined-basic"
          label="Branch"
          color="warning"
          inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
          onChange={(event) => {
            setBranch(event.target.value);
          }}
          variant="outlined"
        />
        <TextField
          required
          className="input"
          sx={{ margin: 0.5, color: "white" }}
          id="outlined-basic"
          label="Reg No"
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          color="warning"
          inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
          onChange={(event) => {
            setRegno(event.target.value);
          }}
          variant="outlined"
        />
        <TextField
          required
          className="input"
          id="outlined-basic"
          sx={{ margin: 0.5, color: "white" }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          label="Email Id"
          color="warning"
          inputProps={{
            style: { fontFamily: "nunito", color: "white" },
            inputMode: "email",
          }}
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
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          color="warning"
          label="Phone No"
          inputProps={{
            style: { fontFamily: "nunito", color: "white" },
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          variant="outlined"
        />
        <TextField
          required
          className="input"
          id="outlined-basic"
          sx={{ margin: 0.5, color: "white" }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          label="Year"
          color="warning"
          inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
          onChange={(event) => {
            setYear(event.target.value);
          }}
          variant="outlined"
        />
        <TextField
          required
          className="input"
          id="outlined-basic"
          sx={{ margin: 0.5, color: "white" }}
          InputLabelProps={{
            sx: {
              color: "white",
            },
          }}
          label="Why you want to join. Describe in one line"
          color="warning"
          inputProps={{ style: { fontFamily: "nunito", color: "white" } }}
          onChange={(event) => {
            setDesc(event.target.value);
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
