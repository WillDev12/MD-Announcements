const themes = {
  type: {
    horizontal: {
      width: "100%",
      height: "130px",
      icon: {
        x: "91.5%",
        y: "40",
      },
    },
    vertical: {
      width: "300px",
      height: "400px",
      icon: {
        x: "83%",
        y: "38",
      },
    },
  },
  borderColor: {
    green: "#2dba4e",
    yellow: "#ffbe0b",
    red: "#bd2c00",
    gh: "#21262D",
    none: "#0D1117",
  },
  animation: {
    fadeIn: {
      code: `<style> @keyframes fadein { 0% { opacity: 0; transform: translateY(6px); } 100% { opacity: 1; } } .fadein {animation: 0.5s fadein ease-out;} </style>`,
      class: "fadein",
    },
    fadeInRight: {
      code: `<style> @keyframes fadeinright { 0% { opacity: 0; transform: translateX(6px); } 100% { opacity: 1; } } .fadeinright {animation: 0.5s fadeinright ease-out;} </style>`,
      class: "fadeinright",
    },
    fadeInTop: {
      code: `<style>@keyframes fadeintop { 0% { opacity: 0; transform: translateY(-6px); } 100% { opacity: 1; } } .fadeintop {animation: 0.5s fadeintop ease-out;} </style>`,
      class: "fadeintop",
    },
    fadeInLeft: {
      code: `<style> @keyframes fadeinleft { 0% { opacity: 0; transform: translateX(-6px); } 100% { opacity: 1; } } .fadeinleft {animation: 0.5s fadeinleft ease-out;} </style>`,
      class: "fadeinleft",
    },
  },
  icon: {
    alert: "⚠️",
    star: "⭐",
    green: "🟢",
    yellow: "🟡",
    red: "🔴",
  },
};

module.exports = themes;