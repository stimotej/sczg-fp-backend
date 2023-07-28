const config = {
  locales: ["hr"],
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Francuski paviljon",
      "app.components.LeftMenu.navbrand.workplace": "Administracija",
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
