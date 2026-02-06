import "./App.css";
import DataTable from "./components/DataTable";
import MapView from "./components/MapView";
import Charts from "./components/Charts";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import { useGeoData } from "./hooks/useGeoData";

const App = () => {
  const geo = useGeoData();

  return (
    <div style={{ padding: 20 }}>
      {/* Header */}
      <Header />

      {/* Summary Cards */}
      <SummaryCards data={geo.filteredData} />

      {/* Charts */}
      <Charts
        data={geo.filteredData}
        selectedProject={geo.selectedProject}
      />

      {/* Table + Map */}
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <DataTable
            data={geo.filteredData}
            loading={geo.loading}
            search={geo.search}
            setSearch={geo.setSearch}
            status={geo.status}
            setStatus={geo.setStatus}
            sortBy={geo.sortBy}
            setSortBy={geo.setSortBy}
            selectedProject={geo.selectedProject}
            onSelect={geo.setSelectedProject}
          />
        </div>

        <div style={{ flex: 1 }}>
          <MapView
            data={geo.filteredData}
            selectedProject={geo.selectedProject}
            onSelect={geo.setSelectedProject}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
