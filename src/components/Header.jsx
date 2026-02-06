
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mb: 3
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "#E3F2FD",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <LocationOnIcon color="primary" />
      </Box>

      <Box>
        <Typography variant="h5" fontWeight={600}>
          Geo Data Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Projects location and status overview
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
