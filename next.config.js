module.exports = {
      ...require("nextra")({
        theme: "nextra-theme-docs",
        themeConfig: "./theme.config.jsx",
        latex: true,
        titleSuffix:
        "Apollo 13 Accident: Debugging the Power System in Real-Time",
      })()
    };