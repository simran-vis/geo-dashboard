import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ScheduleIcon from "@mui/icons-material/Schedule";
import CancelIcon from "@mui/icons-material/Cancel";

const cards = [
  {
    label: "Total Projects",
    icon: <FolderIcon />,
    color: "#E3F2FD"
  },
  {
    label: "Active",
    icon: <CheckCircleIcon />,
    color: "#E8F5E9"
  },
  {
    label: "Pending",
    icon: <ScheduleIcon />,
    color: "#FFF3E0"
  },
  {
    label: "Inactive",
    icon: <CancelIcon />,
    color: "#F5F5F5"
  }
];

const SummaryCards = ({ data }) => {
  const counts = {
    total: data.length,
    active: data.filter(d => d.status === "Active").length,
    pending: data.filter(d => d.status === "Pending").length,
    inactive: data.filter(d => d.status === "Inactive").length
  };

  const values = [
    counts.total,
    counts.active,
    counts.pending,
    counts.inactive
  ];

  return (
    <Grid container spacing={2} mb={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={card.label}>
          <Card sx={{ height: "100%", borderRadius: 2 ,width :"280px"}}>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Box>
                <Typography variant="body2" color="text.secondary">
                  {card.label}
                </Typography>
                <Typography variant="h4" fontWeight={600}>
                  {values[index]}
                </Typography>
              </Box>

              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: card.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {card.icon}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default SummaryCards;
