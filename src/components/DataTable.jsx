import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  Paper,
  Box,
  Pagination,
  Chip
} from "@mui/material";
import { CircularProgress } from "@mui/material";

const ROWS_PER_PAGE = 10;

// 🔹 Status color mapping
const statusColor = {
  Active: "success",
  Pending: "warning",
  Inactive: "default"
};

const DataTable = ({
  data,
  loading,
  search,
  setSearch,
  status,
  setStatus,
  sortBy,
  setSortBy,
  selectedProject,
  onSelect
}) => {
  const [page, setPage] = useState(1);

  const paginatedData = data.slice(
    (page - 1) * ROWS_PER_PAGE,
    page * ROWS_PER_PAGE
  );

  if (loading) {
    return (
      <Paper sx={{ p: 4, textAlign: "center" }}>
        <CircularProgress />
      </Paper>
    );
  }

  return (
    <Paper sx={{ borderRadius: 2, p: 2 }}>
      {/* Search + Filter + Sort */}
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          size="small"
          placeholder="Search..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setPage(1);
          }}
          sx={{ width: 200 }}
        />

        <Select
          size="small"
          value={status}
          onChange={e => {
            setStatus(e.target.value);
            setPage(1);
          }}
          sx={{ width: 140 }}
        >
          <MenuItem value="All">All Status</MenuItem>
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>

        <Select
          size="small"
          value={sortBy}
          onChange={e => setSortBy(e.target.value)}
          displayEmpty
          renderValue={(selected) =>
            selected === ""
              ? "Sort By"
              : selected === "name"
              ? "Name (A–Z)"
              : "Last Updated"
          }
          sx={{ width: 160 }}
        >
          <MenuItem value="">Sort By</MenuItem>
          <MenuItem value="name">Name (A–Z)</MenuItem>
          <MenuItem value="date">Last Updated</MenuItem>
        </Select>
      </Box>

      {/* Table */}
      <TableContainer sx={{ maxHeight: 360 }}>
        <Table
          stickyHeader
          size="small"
          sx={{
            borderCollapse: "separate",
            borderSpacing: "0 8px" // ✅ ROW GAP
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Project Name</TableCell>
              <TableCell>Latitude</TableCell>
              <TableCell>Longitude</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map(row => {
              const isSelected = selectedProject?.id === row.id;

              return (
                <TableRow
                  key={row.id}
                  hover
                  onClick={() => onSelect(row)}
                  sx={{
                    cursor: "pointer",
                    backgroundColor: isSelected
                      ? "rgba(25, 118, 210, 0.08)"
                      : "#fff",
                    "&:hover": {
                      backgroundColor: isSelected
                        ? "rgba(25, 118, 210, 0.12)"
                        : "rgba(0,0,0,0.04)"
                    }
                  }}
                >
                  <TableCell>{row.projectName}</TableCell>
                  <TableCell>{row.latitude}</TableCell>
                  <TableCell>{row.longitude}</TableCell>

                  {/* ✅ STATUS WITH COLOR */}
                  <TableCell>
                    <Chip
                      label={row.status}
                      size="small"
                      color={statusColor[row.status]}
                      variant={row.status === "Inactive" ? "outlined" : "filled"}
                    />
                  </TableCell>

                  <TableCell>{row.lastUpdated}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
        <Pagination
          count={Math.ceil(data.length / ROWS_PER_PAGE)}
          page={page}
          onChange={(_, value) => setPage(value)}
          size="small"
          color="primary"
        />
      </Box>
    </Paper>
  );
};

export default DataTable;
