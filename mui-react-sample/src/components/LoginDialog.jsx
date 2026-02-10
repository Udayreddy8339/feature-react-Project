import { Modal, Box, Typography, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const LoginDialog = ({ open, onClose }) => {
return (
    <Modal open={open} onClose={onClose}>
    <Box
        sx={{position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)",width: 350,bgcolor: "background.paper",borderRadius: 2,boxShadow: 24,
        p: 4,}}
    >
        <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 8, right: 8 }}
        >
        <CloseIcon />
        </IconButton>

        <Typography variant="h6" mb={2}>
          Login
        </Typography>

        <TextField fullWidth
          label="Email"
          margin="normal"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginDialog;
