// {eslint-disable}
import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MessageIcon from '@mui/icons-material/Message';


const Item = ({ title, to, icon, selected, setSelected }) => {
 
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: "#ffffff", 
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "#6a5ab5 !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#ffff !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]} style={{color: "#ffff", }}>
                  Skilify Admin
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

         

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Course"
              to="/"
              icon={<VideoLibraryIcon style={{ color: 'white', fontSize: '18px' }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/"
              icon={<CalendarTodayIcon style={{ color: 'white', fontSize: '18px' }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Resource"
              to="/"
              icon={<MenuBookIcon style={{ color: 'white', fontSize: '18px' }} />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Quiz"
              to="/"
              icon={<HelpOutlineIcon style={{ color: 'white', fontSize: '18px' }} />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Message"
              to="/"
              icon={<MessageIcon style={{ color: 'white', fontSize: '18px' }} />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="My Status"
              to="/"
              icon={<TrendingUpIcon style={{ color: 'white', fontSize: '18px' }} />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="Wallet"
              to="/"
              icon={<AccountBalanceWalletIcon style={{ color: 'white', fontSize: '18px' }} />}
              selected={selected}
              setSelected={setSelected}
            />
             <Item
              title="My Account"
              to="/"
              icon={<AccountCircleIcon style={{ color: 'white', fontSize: '18px' }} />}
              selected={selected}
              setSelected={setSelected}
            />
             {!isCollapsed && (
            <Box mt="25px">
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                <img
                  alt="grand-opening"
                  width="150px"
                  height="150px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "0%", marginLeft: "30px" }}
                />
              </Box>
              <Box textAlign="left">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h6" style={{color: "#ffff"}}>
                  Skilify Teacher Dashboard Admin
                  <br />
                  © 2024 All right reserved
                  
                </Typography>
                
              </Box>      
                </Typography>
                
              </Box>
            </Box>
          )}

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              
            </Typography>
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
            </Typography>
            
  
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
