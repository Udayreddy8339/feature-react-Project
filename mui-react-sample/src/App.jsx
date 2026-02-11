import { useState,useEffect } from "react";
import { Button, Box } from "@mui/material";
import LoginDialog from "./components/LoginDialog";

function App() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  // 🔥 Lambda API Call
  useEffect(() => {
    fetch("https://lk8phf4iog.execute-api.ap-south-1.amazonaws.com/dev")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      })
      .catch((err) => console.error(err));
  }, []);


  return (
    <Box
      sx={{display: "flex",gap: 2, justifyContent: "center",mt: 5,              
      }}
    >
      <Typography variant="h4">
        React + Lambda Integration
      </Typography>

      <Typography variant="body1">
        {message}
      </Typography>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Login Page
      </Button>

      <Button variant="outlined" onClick={() => setOpen(true)}>
        Create New Account
      </Button>

      <LoginDialog open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}

export default App;
