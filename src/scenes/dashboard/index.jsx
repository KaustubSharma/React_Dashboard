import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import VisibilityIcon from '@mui/icons-material/Visibility';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { mockDataTeam } from "../../data/mockData";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ marginLeft: '30px', marginTop: '-45px' }}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Hello Kaustub ✋" />

      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="90px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1023"
            subtitle={
              <Typography
                variant="body2"
                sx={{ color: '#4f3396' }}
              >
                Impressions
              </Typography>
            }
            progress="0.75"
            increase={
              <Typography
                variant="body2"
                sx={{ color: '#4f3396' }}
              >
                +14%
              </Typography>
            }
            icon={
              <VisibilityIcon
               sx={{color: '#4f3396',fontSize: '18px' }} 
               />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="977"
            subtitle={
              <Typography
                variant="body2"
                sx={{ color: '#4f3396' }}
              >
                Total Audience
              </Typography>
            }
            progress="0.50"
            increase={
              <Typography
                variant="body2"
                sx={{ color: '#4f3396' }}
              >
                +21%
              </Typography>
            }
            icon={
              <PeopleIcon 
              style={{ color: '#4f3396', fontSize: '26px' }} 
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1461"
            subtitle={
              <Typography
                variant="body2"
                sx={{ color: '#4f3396' }}
              >
                Engagements
              </Typography>
            }
            progress="0.30"
            increase={
              <Typography
                variant="body2"
                sx={{ color: '#4f3396' }}
              >
                +5%
              </Typography>
            }
            icon={
              <TrendingUpIcon 
              style={{ color:'#4f3396', fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="867"
            subtitle={
              <Typography
                variant="body2"
                sx={{ color: '#4f3396' }}
              >
                Engaged Audience
              </Typography>
            }
            progress="0.80"
            increase={
              <Typography
                variant="body2"
                sx={{ color: '#4f3396' }}
              >
                +43%
              </Typography>
            }
            icon={
              <PeopleIcon 
              style={{ color:'#4f3396', fontSize: '26px' }} 
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="2px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color="#4f3396"
              >
                Revenue <TrendingUpIcon 
              style={{ color: '#00c800', fontSize: '26px' }}
              
              /> 
              <Typography
              color={'#009b00'}
              >
                +0.7%
              
              </Typography>
              </Typography>
              
            
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                
              </Typography>
            </Box>
            <Box>
              
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            mt="-5px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
                sx={{ marginBottom: '-5px' ,marginLeft: '-5px'}}
              >
                <Typography variant="h5" fontWeight="600" sx={{ color: '#4f3396',marginBottom: '-5px' }}>
            Visitors
        </Typography>
                <ArrowDownwardIcon  
              style={{ transform: 'rotate(320deg)', color: 'red', fontSize: '26px',marginLeft: '50px',marginBottom: '-10px',}}
              
              /> 
              <Typography
              color="red"
              sx={{ marginTop: '-15px' }}
              >
                -0.4%
              
              </Typography>
              </Typography>
              
            
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
              </Typography>
            </Box>
            <Box>
              
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          
          backgroundColor={colors.primary[400]}
          p="5px"
          mt="15px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h5" fontWeight="600" sx={{ color: '#4f3396' }}>
            Sales
        </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="2px"
          >
            <ProgressCircle size="75" />
            <Typography
              variant="h5"
              color={'#009b00'}
              sx={{ mt: "2px" }}
            >
              4,351 Total Sale
            </Typography>
            <Typography>Current Week 5000 
            {  
              <TrendingUpIcon 
              style={{ color: '#009b00', fontSize: '26px' }}
              />
            } <Typography
            variant="h5"
            color={'#009b00'}
            sx={{ mt: "2px" }}
          >
          +0.5%
          </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="5px"
          mt="15px"
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Sale</TableCell>
                  <TableCell>Rating</TableCell>
                  <TableCell>Earning</TableCell>
                  <TableCell>Visitor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockDataTeam.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.Category}</TableCell>
                    <TableCell>{item.Sale}</TableCell>
                    <TableCell>{item.Rating}</TableCell>
                    <TableCell>{item.Earning}</TableCell>
                    <TableCell>{item.Visitor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
