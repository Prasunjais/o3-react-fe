const dev = {
  base_url: "https://vast-shore-74260.herokuapp.com/banks"
};

const staging = {
  base_url: "https://vast-shore-74260.herokuapp.com/banks"
};

const uat = {
  base_url: "https://vast-shore-74260.herokuapp.com/banks"
}

const production = {
  base_url: "https://vast-shore-74260.herokuapp.com/banks"
}

let configVariables = {
  ...dev
};

//Change the config for production and development
switch (process.env.REACT_APP_BUILD_ENV) {
  case "staging":
    configVariables = {
      ...staging
    };
    break;
  case "uat":
    configVariables = {
      ...uat
    };
    break;
  case "production":
    configVariables = {
      ...production
    };
    break;
  default:
    configVariables = {
      ...dev
    };
    break;
}

// ecporting the defaults 
export default {
  ...configVariables
}
