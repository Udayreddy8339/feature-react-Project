import { useState } from "react";
import { Button, Box } from "@mui/material";
import LoginDialog from "./components/LoginDialog";

function App() {
  const [open, setOpen] = useState(false);
 

  return (
    <Box
      sx={{display: "flex",gap: 2, justifyContent: "center",mt: 5,              
      }}
    >
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
