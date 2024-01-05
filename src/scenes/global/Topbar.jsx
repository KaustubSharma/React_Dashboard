import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { MoreHoriz as MoreHorizIcon } from "@mui/icons-material";


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
      {/* SEARCH BAR */}
      <Box style={{ marginTop: '10px', width: '300px',marginLeft: 'auto', marginRight: '215px'}}
        display="flex"
        alignItems="center"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/* NEW UPLOAD BUTTON */}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '10px', backgroundColor: '#ff3300', color: '#fff' }}
        startIcon={<UploadFileIcon />}
      >
        New Upload
      </Button>

      {/* ICONS */}
      <Box style={{ marginTop: '10px' }}>
        <IconButton>
            <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
        <MoreHorizIcon />
        </IconButton>
        {/* <IconButton>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton>
        <Typography variant="body2" style={{marginTop: '-15px', marginLeft: '5px',marginRight:'-2px' }}><h4> Kaustub</h4></Typography>
        <Typography variant="body2" style={{ marginTop:'15px',marginLeft: '-45px',marginRight:'5px' }}> <h4>Developer</h4> </Typography>
          <PersonOutlinedIcon />
          <img
                  alt="grand-opening"
                  width="150px"
                  height="150px"
                  src={`../../assets/img_2.png`}
                  style={{marginLeft: '5px', borderRadius: '50%', width: '32px', height: '32px' }}
                />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
