import { useEffect, useMemo, useState } from "react";
import { fetchGeoData } from "../services/api";

export const useGeoData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [sortBy, setSortBy] = useState("");
const [selectedProject, setSelectedProject] = useState(null);

 useEffect(() => {
  fetchGeoData().then(res => {
    setData(res);
    setLoading(false); // ✅ MUST
  });
}, []);


  const filteredData = useMemo(() => {
    let temp = [...data];

    // 🔍 SEARCH
    if (search) {
      temp = temp.filter(item =>
        item.projectName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🎛️ FILTER
    if (status !== "All") {
      temp = temp.filter(item => item.status === status);
    }

    // 🔃 SORT
    if (sortBy === "name") {
      temp.sort((a, b) =>
        a.projectName.localeCompare(b.projectName)
      );
    }
    if (sortBy === "date") {
      temp.sort(
        (a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated)
      );
    }

    return temp;
  }, [data, search, status, sortBy]);

return {
  filteredData,
  loading,
  search,
  setSearch,
  status,
  setStatus,
  sortBy,
  setSortBy,
  selectedProject,
  setSelectedProject
};
};
