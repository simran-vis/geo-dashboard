A React-based Geo Data Dashboard that visualizes spatial and tabular project data with full synchronization between a data table, map, and charts.

This project demonstrates clean React architecture, local state management, and performance-friendly handling of large datasets.

🚀 Live Features
📊 Data Table

Displays project data with columns:

Project Name

Latitude

Longitude

Status

Last Updated

Client-side pagination (10 rows per page)

Search by project name

Status-based filtering (Active / Pending / Inactive)

Sorting by name and last updated date

Color-coded status indicators

Selected row highlighting

🗺️ Map Integration

Implemented using Leaflet

Markers plotted using latitude and longitude

Clicking a table row:

Zooms the map to the selected project

Highlights the corresponding marker

Clicking a map marker:

Highlights the related table row

Two-way synchronization between table and map

📈 Charts & Visualization

Donut (Pie) Chart: Projects by status

Bar Chart: Status distribution

Charts dynamically update based on filtered data

Selecting a project highlights its status in both charts

🧾 Summary Cards

Total Projects

Active Projects

Pending Projects

Inactive Projects

Equal-sized cards with icons and clean UI styling

🧠 Architecture & State Management

Built entirely using functional components and React hooks

No Redux or external state management libraries

A custom hook (useGeoData) manages:

Data fetching

Loading state

Search, filter, and sorting logic

Selected project state

This ensures a single source of truth shared across all UI components.

⚡ Performance Considerations

Client-side pagination to handle large datasets

Memoized filtering and sorting using useMemo

Dashboard tested with 2000+ records

Easily scalable to 5k+ rows

Architecture supports future enhancements like:

Table virtualization

Server-side pagination

🛠️ Tech Stack
Frontend

React (Vite)

JavaScript (ES6+)

Material UI (MUI)

Maps

Leaflet

React-Leaflet

Charts

Recharts

Data

Mock API (JSONPlaceholder)

Client-side data transformation to simulate large datasets
