import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles(theme => ({
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

const MenuAppBar = ({ 
  open, 
  handleMenu, 
  handleClose,
  handleSignOut,
  anchorEl,
  showAnchor,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {showAnchor && (
            <>
              <IconButton
                {...{
                  edge: 'start',
                  className: classes.menuButton,
                  color: 'inherit',
                  onClick: handleMenu,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                {...{
                  id: 'menu-appbar',
                  anchorEl,
                  anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'right',
                  },
                  keepMounted: true,
                  transformOrigin: {
                      vertical: 'top',
                      horizontal: 'right',
                  },
                  open,
                  onClose: handleClose,
                }}
              >
                <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
              </Menu>
            </>
          )}
          <Typography variant="h6" className={classes.title}>
            Fitnesse
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MenuAppBar;
