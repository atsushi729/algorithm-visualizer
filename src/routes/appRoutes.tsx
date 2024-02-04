import { RouteType } from "./config";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import HomePage from "../pages/home/HomePage";
import DashboardPageLayout from "../pages/dashboard/DashboardPageLayout";
import AlgorithmPage from "../pages/dashboard/AlgorithmPage";
import TimeComplexityPage from "../pages/dashboard/TimeComplexityPage";
import TechniquePage from "../pages/dashboard/TechniquePage";
import ChangelogPage from "../pages/changelog/ChangelogPage";
import DataStructure from "../pages/data-structure/DataStructure";
import Stack from "../pages/data-structure/Stack";
import Array from "../pages/data-structure/Array";
import Queue from "../pages/data-structure/Queue";
import LinkedList from "../pages/data-structure/LinkedList";
import BubbleSort from "../pages/sort/BubbleSort";
import MergeSort from "../pages/sort/MergeSort";
import QuickSort from "../pages/sort/QuickSort";
// import InstallationPage from "../pages/installation/InstallationPage";
// import DocumentationPage from "../pages/documentation/DocumentationPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  // {
  //   path: "/installation",
  //   element: <InstallationPage />,
  //   state: "installation",
  //   sidebarProps: {
  //     displayText: "Installation",
  //     icon: <FileDownloadOutlinedIcon />
  //   }
  // },
  {
    path: "/dashboard",
    element: <DashboardPageLayout />,
    state: "dashboard",
    sidebarProps: {
      displayText: "Dashboard",
      icon: <DashboardOutlinedIcon />,
    },
    child: [
      {
        index: true,
        element: <AlgorithmPage />,
        state: "dashboard.index",
      },
      {
        path: "/dashboard/algorithm",
        element: <AlgorithmPage />,
        state: "dashboard.algorithm",
        sidebarProps: {
          displayText: "Algorithm",
        },
      },
      {
        path: "/dashboard/timecomplexity",
        element: <TimeComplexityPage />,
        state: "dashboard.timecomplexity",
        sidebarProps: {
          displayText: "Time Complexity",
        },
      },
      {
        path: "/dashboard/technique",
        element: <TechniquePage />,
        state: "dashboard.technique",
        sidebarProps: {
          displayText: "Technique",
        },
      },
    ],
  },
  {
    path: "/data-structure",
    element: <DataStructure />,
    state: "data-structure",
    sidebarProps: {
      displayText: "Data Structure",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/data-structure/array",
        element: <Array />,
        state: "data-structure.array",
        sidebarProps: {
          displayText: "Array",
        },
      },
      {
        path: "/data-structure/stack",
        element: <Stack />,
        state: "data-structure.stack",
        sidebarProps: {
          displayText: "Stack",
        },
      },
      {
        path: "/data-structure/queue",
        element: <Queue />,
        state: "data-structure.queue",
        sidebarProps: {
          displayText: "Queue",
        },
      },
      {
        path: "/data-structure/lined-list",
        element: <LinkedList />,
        state: "data-structure.lined-list",
        sidebarProps: {
          displayText: "Linked List",
        },
      },
    ],
  },
  {
    path: "/sort",
    element: <DataStructure />,
    state: "sort",
    sidebarProps: {
      displayText: "Sort",
      icon: <AppsOutlinedIcon />,
    },
    child: [
      {
        path: "/sort/bubble-sort",
        element: <BubbleSort />,
        state: "sort.bubble-sort",
        sidebarProps: {
          displayText: "Bubble sort",
        },
      },
      {
        path: "/sort/merge-sort",
        element: <MergeSort />,
        state: "sort.merge-sort",
        sidebarProps: {
          displayText: "Merge sort",
        },
      },
      {
        path: "/sort/quick-sort",
        element: <QuickSort />,
        state: "sort.quick-sort",
        sidebarProps: {
          displayText: "Quick sort",
        },
      },
    ],
  },
  {
    path: "/documentation",
    element: <DataStructure />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <ArticleOutlinedIcon />,
    },
  },
  {
    path: "/changelog",
    element: <ChangelogPage />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <FormatListBulletedOutlinedIcon />,
    },
  },
];

export default appRoutes;
