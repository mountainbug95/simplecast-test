var themeUiData = require('../../data/theme-ui.json');

export default {
  useCustomProperties: themeUiData.useCustomProperties,
  initialColorMode: themeUiData.initialColorMode,
  colors: {
    text: themeUiData.colors.text,
    background: themeUiData.colors.background,
    backgroundLighten10: themeUiData.colors.backgroundLighten10,
    backgroundLighten20: themeUiData.colors.backgroundLighten20,
    primaryDarken: themeUiData.colors.primaryDarken,
    primary: themeUiData.colors.primary,
    primaryLighten10: themeUiData.colors.primaryLighten10,
    primaryLighten50: themeUiData.colors.primaryLighten50,
    primaryLighten70: themeUiData.colors.primaryLighten70,
    secondary: themeUiData.colors.secondary,
  },
}
