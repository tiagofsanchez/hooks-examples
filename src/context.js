import React from "react";

const theme = {
  themeClass: {
    backgroundColor: `#cccccc`,
    borderRadius: `8px`,
    marginBottom: `20px`,
    textAlign: `right`
  },
  themeHooks: {
    backgroundColor: `#FB4E83`,
    borderRadius: `8px`,
    color: `pink`,
    textAlign: `left`,
  },
};

export const ThemeContext = React.createContext(theme);
