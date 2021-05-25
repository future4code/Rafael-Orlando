import React from 'react';
import { goToFeed, goToLogin, goToRegister } from "../../routes/coordinator";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import {StyledToolBar} from "../styled";
import {useHistory} from "react-router-dom";



const Header = () => {
  const history = useHistory()
  
  return (
      <AppBar position="static">
          <StyledToolBar>
          <Button onClick={() => goToFeed(history)} color="inherit">LabeEddit</Button>
          <Button onClick={() => goToLogin(history)} color="inherit">Login</Button>
          </StyledToolBar>
      </AppBar>
 
  );
}

export default Header;


