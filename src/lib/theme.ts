export const themeColors = {
  background: "#fff1e7",
  surface: "#fff7f1",
  text: "#3b1f0f",
  muted: "#7a5b44",
  accent: "#f1782c",
  primary: "#d1530f",
  secondary: "#f6b684",
  border: "#e9d3c1",
  hover: "#f2d1b6",
  success: "#3f7a45",
  warning: "#d27b18",
  danger: "#b23b2c",
};

export const generatePaletteFromLogo = async (logoUrl: string) => {
  return {
    brand: {
      primary: themeColors.primary,
      secondary: themeColors.secondary,
      accent: themeColors.accent,
    },
    neutral: {
      background: themeColors.background,
      surface: themeColors.surface,
      text: themeColors.text,
      muted: themeColors.muted,
      border: themeColors.border,
    },
    feedback: {
      success: themeColors.success,
      warning: themeColors.warning,
      danger: themeColors.danger,
    },
  };
};
