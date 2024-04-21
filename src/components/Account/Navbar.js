import { Toolbar, AppBar, Typography, Button, Box } from "@material-ui/core";
import { auth } from "../../firebase";

const Navbar = () => {
  return (
    <AppBar elevation={0} color="secondary" position="static">
      <Toolbar>
        <Typography variant="h6">Tyz</Typography>
        <Box ml="auto">
          <Button color="inherit">Links</Button>
          <Button onClick={() => auth.signOut()} color="inherit">
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
