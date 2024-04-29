import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" style={{backgroundColor: '	#FFB6C1' }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} style={{ color: '#8B4513' }}>
          Japan Job Quest
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="black" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="black" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="black" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="black" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="black" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="black" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="black" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="black"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="black" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="black" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="black" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="black" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
