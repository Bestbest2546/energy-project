import { useEffect } from 'react';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script load error: ${src}`));
    document.head.appendChild(script);
  });
}

function Map() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure the global `google` object doesn't already exist
      if (!window.google) {
        loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyC5x6GeZcFEDThuEx-EHI38yBoq3fSSn0o&callback=initMap`)
          .then(() => {
            window.initMap = initMap;
          })
          .catch(e => console.error(e));
      } else {
        initMap();
      }
    }
  }, []);

  function initMap() {
    new google.maps.Map(document.getElementById("map"), {
      zoom: 19,
      center: { lat: 14.87525914852264, lng: 101.9984208954818 },
      disableDefaultUI: true,
    });
  }

  return <div id="map" style={{ height: "300px", width: "100%" }}></div>;
}

export default Map;
