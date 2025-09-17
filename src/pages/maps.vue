<script setup>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted } from 'vue'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

let map = null

onMounted(() => {
  map = L.map('map').setView([59.4032, 24.6573], 16)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map)

 
  const markerCoords = [59.4032, 24.6573]
  L.marker(markerCoords).addTo(map).bindPopup("Minu koht")

  
  L.circle(markerCoords, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 100, 
  }).addTo(map).bindPopup("100m ring")


  L.polygon([
    [59.4036, 24.6575],
    [59.4030, 24.6580],
    [59.4032, 24.6565],
  ], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.2,
  }).addTo(map).bindPopup("Kolmnurkne ala")
})

function goTo(coords, zoom) {
  map.flyTo(coords, zoom)
}
</script>

<template>
  <button class="button is-primary" @click="goTo([59.4032, 24.6573], 17)">Go to Home</button>
  <div id="map" class="map-container"></div>
</template>

<style scoped>
.map-container {
  height: 90vh;
  width: 100%;
}
</style>

