import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import GroupIcon from "@mui/icons-material/Group";
import BarChartIcon from "@mui/icons-material/BarChart";
import CreateIcon from "@mui/icons-material/Create";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export const sidebarData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Order list",
    icon: <ListIcon />,
    link: "/orderList",
  },
  {
    title: "order detail",
    icon: <InsertDriveFileIcon />,
    link: "/orderDetail",
  },
  {
    title: "Customer",
    icon: <GroupIcon />,
    link: "/customer",
  },
  {
    title: "customer detail",
    icon: <PersonIcon />,
    link: "/customerDetail",
  },
  {
    title: "Analytics",
    icon: <BarChartIcon />,
    link: "/analytics",
  },
  {
    title: "Review",
    icon: <CreateIcon />,
    link: "/review",
  },
  {
    title: "Foods",
    icon: <FastfoodIcon />,
    link: "/foods",
  },
  {
    title: "Food detail",
    icon: <HomeIcon />,
    link: "/foodDetail",
  },

  {
    title: "calendar",
    icon: <CalendarMonthIcon />,
    link: "/calendar",
  },
  {
    title: "chart",
    icon: <HomeIcon />,
    link: "/chart",
  },
  {
    title: "wallet",
    icon: <HomeIcon />,
    link: "/wallet",
  },
];
