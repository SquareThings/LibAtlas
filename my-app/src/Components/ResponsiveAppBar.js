import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logo from '../assets/fonts/logo.png';
import { menuItems } from './menuItems.js';
import MenuItems from './menuItems';
import Dropdown from "react-multilevel-dropdown";
import { red } from '@mui/material/colors';
import '../App.css';

const pages = ['About', 'Archive', 'Resources'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: 'black', color: 'black', alignContent: 'center', flexWrap: 'wrap' }}>
      <Container maxWidth={false} sx={{ color: 'white', bgcolor: 'black', marginLeft: "3%", marginRight: "3%" }}>
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'right',
              fontFamily: 'EBGaramond',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
              maxWidth: 'xl',
              marginLeft: "3%",
              marginRight: "0"
            }}
          >
            Liberation Atlas
          </Typography>
          <img src={logo} style={{ height: 50, width: 50 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'white', justifyContent: 'flex-end', marginRight: '0' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color='white'
              sx={{ color: 'white' }}
            >
              <MenuIcon />

            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }, color: 'black', marginLeft: '3%'
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'EBGaramond',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Liberation Atlas
          </Typography>

          <div class="pageBox">

            {menuItems.map((menuItems) => (
              menuItems.children && menuItems.children.length > 0 ? (
                <Dropdown
                  style={{ backgroundColor: "black", color: "white" }}
                  title={menuItems.name}
                  $secondary
                >
                  {menuItems.children &&
                    menuItems.children.map((item) => (
                      <Dropdown.Item>
                        {item.name}
                        {item.children}
                      </Dropdown.Item>
                    ))}
                </Dropdown>
              ) :
                <Dropdown
                  style={{ backgroundColor: "black", color: "white" }}
                  title={menuItems.name}
                  $secondary
                >
                </Dropdown>
            ))}
          </div>

          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, color: 'white', justifyContent: 'flex-end', alignItems: 'flex-end' }}>

            {menuItems.map((menu, index) => {
              return (
                <li className="menu-items" key={index}>
                  <a href={menu.url}>{menu.title}</a>
                </li>
              );
            })}

            {pages.map((page) => (
              <a href={`my-app/src/${page}`}
                style={{ textDecoration: 'none' }}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', margin: '3%' }}
                >
                  {page}
                </Button>
              </a>
            ))}
            <a href={`my-app/src/${menuItems.url}`}
                style={{ textDecoration: 'none' }}>
                <Button
                  key={menuItems.url}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', margin: '3%' }}
                >
                  {menuItems.name}
                </Button>
              </a>

          </Box> */}

        </Toolbar>
      </Container>
    </AppBar >
  );

}
export default ResponsiveAppBar;