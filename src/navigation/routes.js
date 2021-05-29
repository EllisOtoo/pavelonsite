const { lazy } = require("react");

const Dashboard = lazy(()=> import('../screens/Dashboard/index'));

const routes =[
    {
      path: "/dashboard",
      exact: false,
      component: Dashboard,
      name: "Dashboard",
    },
];

export default routes;