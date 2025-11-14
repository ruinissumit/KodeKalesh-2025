// Initialize map
const map = L.map("map").setView([20, 0], 2);

// Add map tiles (no API key needed)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// Forest data (30 locations)
const forests = [
  { name: "Amazon Rainforest", lat: -3.4653, lon: -62.2159, temp: 55 },
  { name: "Sundarbans", lat: 21.9497, lon: 89.1833, temp: 47 },
  { name: "Congo Rainforest", lat: -0.7893, lon: 21.0936, temp: 38 },
  { name: "Daintree Forest", lat: -16.1700, lon: 145.4185, temp: 34 },
  { name: "Tongass National Forest", lat: 57.5, lon: -135.0, temp: 22 },
  { name: "Black Forest", lat: 48.0, lon: 8.0, temp: 30 },
  { name: "Borneo Rainforest", lat: 0.5, lon: 113.5, temp: 45 },
  { name: "New Guinea Forest", lat: -5.0, lon: 141.0, temp: 41 },
  { name: "Sierra Nevada Forest", lat: 37.77, lon: -119.59, temp: 33 },
  { name: "Taiga Forest", lat: 60.0, lon: 100.0, temp: 10 },
  { name: "Valdivian Forest", lat: -40.0, lon: -73.0, temp: 28 },
  { name: "Atlantic Forest", lat: -15.0, lon: -47.0, temp: 44 },
  { name: "Madhya Pradesh Forest", lat: 23.25, lon: 77.41, temp: 48 },
  { name: "Kaziranga Forest", lat: 26.6, lon: 93.2, temp: 37 },
  { name: "Jim Corbett Forest", lat: 29.53, lon: 78.77, temp: 35 },
  { name: "Aravalli Forest", lat: 27.0, lon: 74.0, temp: 49 },
  { name: "Western Ghats", lat: 10.0, lon: 76.0, temp: 43 },
  { name: "Eastern Ghats", lat: 17.0, lon: 83.0, temp: 39 },
  { name: "Gir Forest", lat: 21.12, lon: 70.79, temp: 46 },
  { name: "Satpura Forest", lat: 22.0, lon: 78.0, temp: 42 },
  { name: "Nilgiri Hills", lat: 11.5, lon: 76.6, temp: 37 },
  { name: "Kanha Forest", lat: 22.33, lon: 80.61, temp: 40 },
  { name: "Bandhavgarh Forest", lat: 23.72, lon: 81.05, temp: 39 },
  { name: "Pench Forest", lat: 21.7, lon: 79.4, temp: 44 },
  { name: "Ranthambore Forest", lat: 26.0, lon: 76.4, temp: 47 },
  { name: "Achanakmar Forest", lat: 22.4, lon: 81.8, temp: 41 },
  { name: "Manas Forest", lat: 26.7, lon: 91.0, temp: 38 },
  { name: "Simlipal Forest", lat: 21.9, lon: 86.4, temp: 43 },
  { name: "Nagarhole Forest", lat: 12.0, lon: 76.1, temp: 36 },
  { name: "Kazuma Pan Forest", lat: -18.0, lon: 26.0, temp: 52 }
];

// Add markers for each forest
forests.forEach(f => {
  let color = "green";
  if (f.temp >= 50) color = "red";
  else if (f.temp >= 40) color = "orange";

  const icon = L.divIcon({
    html: `<span style="font-size:22px;">🌳</span>`,
    className: "custom-icon",
  });

  const marker = L.marker([f.lat, f.lon], { icon }).addTo(map);
  marker.bindPopup(
    `<b>${f.name}</b><br>Temperature: ${f.temp}°C<br>Risk: ${
      f.temp >= 50 ? "🔥 High" : f.temp >= 40 ? "⚠️ Medium" : "✅ Low"
    }`
  );
});
