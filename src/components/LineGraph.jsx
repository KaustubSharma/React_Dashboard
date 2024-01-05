import { Box, LinearProgress, useTheme } from "@mui/material";
import { tokens } from "../theme";

const LineGraph = ({ progress = 75, size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ width: `${size}px` }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: "8px",
          borderRadius: "5px",
          backgroundColor: colors.primary[400],
          "& .MuiLinearProgress-bar": {
            borderRadius: "5px",
            backgroundColor: colors.blueAccent[500],
          },
        }}
      />
    </Box>
  );
};

export default LineGraph;