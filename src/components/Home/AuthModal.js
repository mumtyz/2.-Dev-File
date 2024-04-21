import { useState } from "react";
import {
  Dialog,
  Box,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  Typography,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { auth } from "../../firebase";
import { Close as CloseIcon } from "@material-ui/icons";

const AuthModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSignIn, setIsSignIn] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) =>
    setForm((oldForm) => ({
      ...oldForm,
      [event.target.name]: event.target.value,
    }));

  const handleAuth = async () => {
    setLoading(true);
    try {
      if (isSignIn) {
        await auth.signInWithEmailAndPassword(form.email, form.password);
      } else {
        await auth.createUserWithEmailAndPassword(form.email, form.password);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return (
    <Dialog open fullWidth onClose={onClose}>
      <DialogTitle>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {isSignIn ? "Sign in" : "Sign up"}
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoComplete={false}
          style={{ marginBottom: "24px" }}
          variant="filled"
          fullWidth
          value={form.email}
          name="email"
          onChange={handleChange}
          label="Email"
        />
        <TextField
          variant="filled"
          fullWidth
          value={form.password}
          name="password"
          onChange={handleChange}
          label="Password"
        />
        <Box mt={2} color="red">
          <Typography>{error}</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
          mx={2}
        >
          <Typography onClick={() => setIsSignIn((o) => !o)}>
            {isSignIn ? "Don't have an account?" : "Already have an account"}
          </Typography>
          <Button
            disableElevation
            variant="contained"
            color="primary"
            onClick={handleAuth}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress color="inherit" size={22} />
            ) : isSignIn ? (
              "Sign in"
            ) : (
              "Sign up"
            )}
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
};

export default AuthModal;
