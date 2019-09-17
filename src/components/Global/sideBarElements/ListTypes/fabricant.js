const fabricants = [
  {
    icon: "home",
    selected: true,
    title: "les Fabricants",
    submenu: null,
    to: "fabricants"
  },
  {
    icon: "wrench",
    selected: false,
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
    submenu: [
      {
        title: "fichier stock",
        selected: false,
        to: "upload"
      },
      {
        title: "fichier tarif",
        selected: false,
        to: "manag-versions"
      }
    ]
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
    submenu: [
      {
        title: "en cours",
        selected: true,
        to: "commandes"
      },
      {
        title: "valider",
        selected: false,
        to: "commandes-valider"
      }
    ]
  }
];

export default fabricants;
