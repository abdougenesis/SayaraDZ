const simpleUserList = [
  {
    icon: "wrench",
    selected: true,
    title: "geree donnees",
    submenu: [
      {
        title: "gerer model",
        selected: true,
        to: "manag-models"
      },
      {
        title: "gerer version",
        selected: false,
        to: "manag-versions"
      },
      {
        title: "gerer couleur",
        selected: false,
        to: "manag-colors"
      },
      {
        title: "gerer options",
        selected: false,
        to: "manag-options"
      }
    ]
  },
  {
    icon: "upload",
    selected: false,
    title: "uploader fichier",
    submenu: null,
    to: "upload"
  },
  {
    icon: "play",
    selected: false,
    title: "simuler",
    submenu: null,
    to: "simuler"
  },
  {
    icon: "com",
    selected: false,
    title: "commandes",
    submenu: null,
    to: "commandes"
  }
];

export default simpleUserList;
