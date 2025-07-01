// Get lat/lng from URL if available, else use Sri Lanka default
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const lat = parseFloat(getQueryParam("lat")) || 7.8731;
const lng = parseFloat(getQueryParam("lng")) || 80.7718;

// Initialize Leaflet map centered at GPS coordinates or fallback
const map = L.map('map').setView([lat, lng], 15);

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Create custom bus marker icon
const busIcon = L.divIcon({
  className: 'bus-marker',
  html: '<div style="background:#4CAF50; width:20px; height:20px; border-radius:50%; border:3px solid white; box-shadow:0 2px 6px rgba(0,0,0,0.3);"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

// Add marker at the GPS location from URL
const busMarker = L.marker([lat, lng], { icon: busIcon }).addTo(map)
  .bindPopup("Current GPS Location").openPopup();

// Optional: Simulate movement (remove this if using real GPS updates)
let offset = 0.0005;
setInterval(() => {
  let newLat = busMarker.getLatLng().lat + offset;
  let newLng = busMarker.getLatLng().lng + offset;
  busMarker.setLatLng([newLat, newLng]);
  map.setView([newLat, newLng]);
  offset *= -1; // toggle direction
}, 5000);