import { Modal, Box, Typography, TextField, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const LoginDialog = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 360,
          bgcolor: "#ffffff",
          borderRadius: 3,
          boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
          p: 4,
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "grey.600",
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Title */}
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          mb={1}
          color="#333"
        >
          Welcome Back 👋
        </Typography>

        <Typography variant="body2" align="center" color="text.secondary" mb={2}>
          Please login to continue
        </Typography>

        {/* Email */}
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          variant="outlined"
        />

        {/* Password */}
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          variant="outlined"
        />

        {/* Login Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            py: 1.2,
            borderRadius: 2,
            textTransform: "none",
            fontSize: "16px",
            background: "linear-gradient(45deg, #1976d2, #42a5f5)",
          }}
        >
          Login
        </Button>
      </Box>
    </Modal>
  );
};

export default LoginDialog;
