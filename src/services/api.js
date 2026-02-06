export const fetchGeoData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json(); // 10 users

  const statuses = ["Active", "Pending", "Inactive"];

  // 🔥 10 users × 200 repeat = 2000 records
  return Array.from({ length: 200 }).flatMap((_, batchIndex) =>
    users.map((user, index) => ({
      id: user.id + batchIndex * users.length,
      projectName: `${user.company.name} ${batchIndex + 1}`,
      latitude: parseFloat(user.address.geo.lat),
      longitude: parseFloat(user.address.geo.lng),
      status: statuses[(index + batchIndex) % statuses.length],
      lastUpdated: `2026-01-${(batchIndex % 28) + 1}`
    }))
  );
};
