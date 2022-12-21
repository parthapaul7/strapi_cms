import logo from "./extensions/logo.png";
import logoSm from "./extensions/logo_sm.png";

export default {
  config: {
    locales: [
      // 'ar'
    ],
    auth:{
      logo: logo,
    },
    menu:{
      logo: logoSm, 
    },
    favicon:{
      favicon: logoSm,   
    },
    head:{
      title: "Admin Panel",
    },
    notifications:{
      release:false
    },
    tutorials:false,
  },
  bootstrap(app: any) {
    console.log(app);
  },
};