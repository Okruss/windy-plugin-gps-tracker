// Plugin de Windy para seguir GPS en tiempo real y mostrar lluvias
export default {
    name: 'gps-tracker',
    version: '1.0.0',
    description: 'Sigue la ubicación GPS y muestra lluvias y tormentas en Windy.',
    
    onopen() {
        console.log('🌍 GPS Tracker activado en Windy');

        const { map } = W;

        function updateLocation(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            map.setView([lat, lon], 10);
            console.log(`📍 Ubicación: Lat ${lat}, Lon ${lon}`);
        }

        function handleLocationError(error) {
            console.error('❌ Error de GPS:', error.message);
        }

        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(updateLocation, handleLocationError, {
                enableHighAccuracy: true,
                maximumAge: 5000,
                timeout: 10000
            });
        } else {
            console.error('⚠️ Geolocalización no soportada.');
        }

        // Activar capa de lluvias
        W.store.set('overlay', 'rain');
    },

    onclose() {
        console.log('GPS Tracker desactivado.');
    }
};
