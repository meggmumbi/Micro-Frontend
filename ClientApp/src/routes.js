import React from "react";

import async from "./components/Async";

// All pages that rely on 3rd party components (other than MUI) are
// loaded asynchronously, to keep the initial JS bundle to a minimum size

// Layouts
import AuthLayout from "./layouts/Auth";
import PresentationLayout from "./layouts/Presentation";
import AnalyticsLayout from "./layouts/AnalyticsLayout";
import MISLayout from "./layouts/MISLayout";
import OrganizationList from "./pages/MISAdministration/organization/OrganizationList";
import OrganizationDetails from "./pages/MISAdministration/organization/OrganizationDetails";
import SiteList from "./pages/MISAdministration/sites/SiteList";
import Tenant from "./pages/MISAdministration/sites/Tenant";
import RolesList from "./pages/MISAdministration/roles/RolesList";
import Role from "./pages/MISAdministration/roles/Role";
import UsersList from "./pages/MISAdministration/users/UserList";
import User from "./pages/MISAdministration/users/User";

import RolePermissions from "./pages/analytics/RolePermissions";

// Guards
import AuthGuard from "./components/guards/AuthGuard";

// Auth components
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ResetPassword from "./pages/auth/ResetPassword";
import Page404 from "./pages/auth/Page404";
import Page500 from "./pages/auth/Page500";

const LandingPage = async(() => import("./pages/home/LandingPage"));



const MenusList = async(() => import("./pages/analytics/MenusList"));
const NewMenu = async(() => import("./pages/analytics/NewMenu"));
const MiddleWareStatus = async(() =>
  import("./pages/MISAdministration/MiddleWareStatus")
);
const UniversalComponent = async(() =>
  import("./pages/analytics/UniversalComponent")
);
const MISAdministration = async(() => import("./pages/MISAdministration"));




const CMSContentRegistry = async(() =>
  import("./pages/MISAdministration/CMSContentRegistry")
);
const CMSContentImpactCreate = async(() =>
  import("./pages/MISAdministration/CMSContentImpact-create")
);
const CMSContentImpactList = async(() =>
  import("./pages/MISAdministration/CMSContentImpact-list")
);
const CMSContentLeadershipCreate = async(() =>
  import("./pages/MISAdministration/CMSContentLeadership-create")
);
const CMSContentLeadershipList = async(() =>
  import("./pages/MISAdministration/CMSContentLeadership-list")
);
const UMUsersList = async(() =>
  import("./pages/MISAdministration/UMUsers-list")
);
const UMRolesList = async(() =>
  import("./pages/MISAdministration/UMRoles-list")
);
const UMCountriesList = async(() =>
  import("./pages/MISAdministration/UMCountries-list")
);
const UMOptionRoutesList = async(() =>
  import("./pages/MISAdministration/UMOptionRoutes-List")
);
const UMRoleOptionsList = async(() =>
  import("./pages/MISAdministration/UMRoleOptions-List")
);
const UMUserRolesList = async(() =>
  import("./pages/MISAdministration/UMUserRoles-List")
);
const LOGRecordsList = async(() =>
  import("./pages/MISAdministration/LOGRecords-List")
);


const ApplicationConfiguration = async(() =>
  import("./pages/MISAdministration/application-configuration/index")
);
const ApplicationDetails = async(() =>
  import(
    "./pages/MISAdministration/application-configuration/ApplicationDetails"
  )
);
const NewApplication = async(() =>
  import("./pages/MISAdministration/application-configuration/NewApplication")
);
const NewModule = async(() =>
  import("./pages/MISAdministration/application-configuration/NewModule")
);

const routes = [
  {
    path: "/",
    element: (
      <AuthGuard>
        <PresentationLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
    ],
  },

  {
    path: "MISAdministration/roles",
    permission: ["Edit Roles", "Delete Roles", "View Roles", "Add Roles"],
    element: <MISLayout />,
    children: [
      {
        path: "",
        permission: ["Edit Roles", "Delete Roles", "View Roles", "Add Roles"],
        element: <RolesList />,
      },
      {
        path: "role/:id",
        permission: ["Edit Roles", "Delete Roles", "View Roles", "Add Roles"],
        element: <Role />,
      },
      {
        path: "role",
        permission: ["Edit Roles", "Delete Roles", "View Roles", "Add Roles"],
        element: <Role />,
      },
    ],
  },
  {
    path: "MISAdministration/tenants",
    permission: ["Add Tenant", "Edit Tenant", "View Tenant", "Delete Tenant"],
    element: <MISLayout />,
    children: [
      {
        path: "",
        permission: [
          "Add Tenant",
          "Edit Tenant",
          "View Tenant",
          "Delete Tenant",
        ],
        element: <SiteList />,
      },
      {
        path: "tenant/:id",
        permission: [
          "Add Tenant",
          "Edit Tenant",
          "View Tenant",
          "Delete Tenant",
        ],
        element: <Tenant />,
      },
      {
        path: "tenant",
        permission: [
          "Add Tenant",
          "Edit Tenant",
          "View Tenant",
          "Delete Tenant",
        ],
        element: <Tenant />,
      },
    ],
  },
  {
    path: "MISAdministration/users",
    permission: [
      "Edit User Management",
      "View User Management",
      "Delete User Management",
      "Add User Management",
    ],
    element: <MISLayout />,
    children: [
      {
        path: "",
        permission: [
          "Edit User Management",
          "View User Management",
          "Delete User Management",
          "Add User Management",
        ],
        element: <UsersList />,
      },
      {
        path: "user/:id",
        permission: [
          "Edit User Management",
          "View User Management",
          "Delete User Management",
          "Add User Management",
        ],
        element: <User />,
      },
      {
        path: "user",
        permission: [
          "Edit User Management",
          "View User Management",
          "Delete User Management",
          "Add User Management",
        ],
        element: <User />,
      },
    ],
  },
  {
    path: "MISAdministration/application-configuration",
    permission: [
      "Edit Application Configuration",
      "View Application Configuration",
    ],
    element: <MISLayout />,
    children: [
      {
        path: "",
        permission: [
          "Edit Application Configuration",
          "View Application Configuration",
        ],
        element: <ApplicationConfiguration />,
      },
      {
        path: "new-application",
        permission: [
          "Edit Application Configuration",
          "View Application Configuration",
        ],
        element: <NewApplication />,
      },
      {
        path: "new-module/:applicationId",
        permission: [
          "Edit Application Configuration",
          "View Application Configuration",
        ],
        element: <NewModule />,
      },
    ],
  },
  {
    path: "MISAdministration/application-details/:id",
    permission: [
      "Edit Application Configuration",
      "View Application Configuration",
    ],
    element: <MISLayout />,
    children: [
      {
        path: "",
        element: <ApplicationDetails />,
      },
    ],
  },
  {
    path: "MISAdministration",
    permission: [
      "View Organization",
      "Edit Organization",
      "Add Tenant",
      "Edit Roles",
      "Edit User Management",
      "View User Management",
      "Delete Organization",
      "Delete Roles",
      "Delete User Management",
      "Edit Tenant",
      "View Roles",
      "Add Organization",
      "Edit Application Configuration",
      "Add User Management",
      "Add Roles",
      "View Application Configuration",
      "View Tenant",
      "Delete Tenant",
      "Add Documents",
      "Edit Documents",
      "Delete Documents",
      "View Documents",
      "Add Folders",
      "Edit Folders",
      "Delete Folders",
      "View Folders",
      "Create Template",
      "Edit Template",
      "Delete Template",
      "View Templates",
      "Create Template Version",
      "Edit Template Version",
      "Delete Template Version",
      "View Template Versions",
      "Upload Data",
      "Delete Uploaded Data",
      "Edit Uploaded Data",
      "View Uploaded Data",
      "Add CommCare App Details",
      "Edit CommCare App Details",
      "Delete CommCare App Details",
      "View Form List",
      "View Form Data",
      "Export Form Data",
    ],
    /*element: <DashboardLayout />,*/
    element: <MISLayout />,
    children: [
      {
        path: "",
        element: <MISAdministration />,
      },
      {
        path: "middle-ware-status",
        permission: ["View all options", "View middle ware status"],
        element: <MiddleWareStatus />,
      },
      // {
      //   path: "user-registry",
      //   element: <UserRegistry />,
      // },
      // {
      //   path: "new-user-form",
      //   element: <NewUserForm />,
      // },
      // {
      //   path: "assign-user-role",
      //   element: <AssignUserRole />,
      // },
      {
        path: "content-registry",
        element: <CMSContentRegistry />,
      },
      {
        path: "content-impact-create",
        element: <CMSContentImpactCreate />,
      },
      {
        path: "content-impact-list",
        element: <CMSContentImpactList />,
      },
      {
        path: "content-leadership-create",
        element: <CMSContentLeadershipCreate />,
      },
      {
        path: "content-leadership-list",
        element: <CMSContentLeadershipList />,
      },
      {
        path: "users-list",
        element: <UMUsersList />,
      },
      {
        path: "roles-list",
        element: <UMRolesList />,
      },
      {
        path: "countries-list",
        element: <UMCountriesList />,
      },
      {
        path: "optionroutes-List",
        element: <UMOptionRoutesList />,
      },
      {
        path: "roleoptions-List",
        element: <UMRoleOptionsList />,
      },
      {
        path: "userroles-list",
        element: <UMUserRolesList />,
      },
      {
        path: "organisations",
        element: <OrganizationList />,
      },
      {
        path: "logrecords-List",
        element: <LOGRecordsList />,
      },
    ],
  },
  
 
  //Organization routes
  {
    path: "MISAdministration/organization",
    permission: [
      "View Organization",
      "Edit Organization",
      "Delete Organization",
      "Add Organization",
    ],
    element: <MISLayout />,
    children: [
      {
        path: "",
        permission: [
          "View Organization",
          "Edit Organization",
          "Delete Organization",
          "Add Organization",
        ],
        element: <OrganizationList />,
      },
      {
        path: "list",
        permission: [
          "View Organization",
          "Edit Organization",
          "Delete Organization",
          "Add Organization",
        ],
        element: <OrganizationList />,
      },
      {
        path: "details",
        permission: [
          "View Organization",
          "Edit Organization",
          "Delete Organization",
          "Add Organization",
        ],
        element: <OrganizationDetails />,
      },
      {
        path: "details/:id",
        permission: [
          "View Organization",
          "Edit Organization",
          "Delete Organization",
          "Add Organization",
        ],
        element: <OrganizationDetails />,
      },
    ],
  },
 
  //Dynamic dashboards Routes
  {
    path: "analytics",
    permission: [
      "Create Dashboard",
      "Update Dashboard",
      "Read Dashboard",
      "Delete Dashboard",
    ],
    element: <AnalyticsLayout />,
    children: [
      {
        path: "",
        permission: [
          "Create Dashboard",
          "Update Dashboard",
          "Read Dashboard",
          "Delete Dashboard",
        ],
        element: <></>,
      },
      {
        path: "config",
        permission: [
          "Create Dashboard",
          "Update Dashboard",
          "Read Dashboard",
          "Delete Dashboard",
        ],
        element: <MenusList />,
      },
      {
        path: "new-menu",
        permission: [
          "Create Dashboard",
          "Update Dashboard",
          "Read Dashboard",
          "Delete Dashboard",
        ],
        element: <NewMenu />,
      },
      {
        path: "new-menu/:id",
        permission: [
          "Create Dashboard",
          "Update Dashboard",
          "Read Dashboard",
          "Delete Dashboard",
        ],
        element: <NewMenu />,
      },
      {
        path: "universal-route/:id",
        permission: [
          "Create Dashboard",
          "Update Dashboard",
          "Read Dashboard",
          "Delete Dashboard",
        ],
        element: <UniversalComponent />,
      },
      {
        path: "role_permissions",
        permission: ["Assign Role Permissions"],
        element: <RolePermissions />,
      },
    ],
  },


  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
      {
        path: "500",
        element: <Page500 />,
      },
    ],
  },
  {
    path: "*",
    element: <AuthLayout />,
    children: [
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
];

export default routes;
