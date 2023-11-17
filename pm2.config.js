module.exports = {
  apps: [
    {
      name: "react-app",
      script: "npm start",
      args: ["--color"],
    },
    {
      name: "express-server",
      script: "node ./src/server.js",
    },
  ],
};
