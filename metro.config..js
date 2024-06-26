const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  
  // Modifica la URL base del servidor de desarrollo
  defaultConfig.server.serverHostname = 'https://nueva-url.com'; // Cambia 'mi-nueva-url' por la URL que desees utilizar

  return defaultConfig;
})();
