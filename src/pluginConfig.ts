import type { ExternalPluginConfig } from '@windy/interfaces';

const config: ExternalPluginConfig = {
    name: "windy-plugin-gps-tracker",  // ✅ Debe comenzar con "windy-plugin-"
    version: "1.0.0",
    icon: "📍",  // ✅ Un solo emoji válido
    title: "GPS Tracker for Windy",  // ✅ Entre 5 y 30 caracteres
    description: "Sigue la ubicación GPS y muestra lluvias en Windy",
    author: "Tu Nombre o Empresa",  // ✅ Puedes poner un nombre aquí
    desktopUI: "rhpane",  // ✅ Opciones válidas: "rhpane", "fullscreen", "standalone"
    mobileUI: "fullscreen",  // ✅ Opciones válidas: "rhpane", "fullscreen", "standalone"
};

export default config;
