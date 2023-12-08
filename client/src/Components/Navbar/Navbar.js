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
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../JS/actions/user';
import HomeIcon from '@mui/icons-material/Home';
import { useState } from 'react';

const pages = ['Home'];
const settings = ['Profile', 'Account', 'Dashboard'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
const isAuth = useSelector(state => state.userReducer.isAuth);
const navigate= useNavigate();
const dispatch = useDispatch()




  return (

    <div>
<AppBar position="static" sx={{ backgroundColor: '#b90000' }}>
<AppBar position="static"  sx={{ backgroundColor: '#212121'}}>
      <Container>
        <Toolbar  >
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
              alt=""
              src="https://mymsi.co.id/wp-content/uploads/elementor/thumbs/Logo-MSI-baru_19Nov21-pj51x7a59nvi9993lx594j0ffu7cspeomm1e9kckeo.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
            />{' '}          </Typography>
          <nav>
          <AppBar >
 
       </AppBar >
            <Link
               
              
              
              sx={{ p: 2, textDecoration: 'none' }}
            >
             </Link>
            <Link
               to="/"
               
              sx={{ p: 2, textDecoration: 'none' }}
            >
              
            </Link>
            <Link
               
              
              sx={{ p: 2, textDecoration: 'none' }}
            >
              
            </Link>
            <Link
               
              sx={{ p: 2, textDecoration: 'none' }}
            >
              
            </Link>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
           <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <HomeIcon>
            Home
            </HomeIcon>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page} onClick={() => navigate("/")} sx={{ my: 2, color: 'inherit', display: 'block' }} >
                {page}
              </Button>
              ))}
            <Button onClick={() => navigate("/product")} sx={{ my: 2, color: 'inherit', display: 'block' }} >
              product             
             </Button>
            <Button onClick={() => navigate("/AddProduct")} sx={{ my: 2, color: 'inherit', display: 'block' }} >
              add product
            </Button>
          </Box>
              {
              isAuth ?  <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
  <MenuItem  onClick={()=>dispatch(logout())}>
                    <Typography textAlign="center">logout</Typography>
                  </MenuItem>
  
              </Menu>
            </Box>
            :
            <div style={{display :"flex"}}>
                  <MenuItem  >
                  <Typography sx={{ color: 'inherit' }}textAlign="center" onClick={()=>navigate("/login")}>Login</Typography>
                </MenuItem>
                <MenuItem  >
                  <Typography   sx={{ color: 'inherit' }} textAlign="center" onClick={()=>navigate("/register")}>Register</Typography>
                </MenuItem>
              
            </div>
}
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;