import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListIcon from "@mui/icons-material/List";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BarChartIcon from "@mui/icons-material/BarChart";
import CreateIcon from "@mui/icons-material/Create";
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
export const sidebarData = [
  {
    title: "Dashboard",
    icon: <HomeOutlinedIcon />,
    link: "/",
  },
  {
    title: "Order ",
    icon: <ListIcon />,
    link: "/orderList",
  },
  {
    title: "Customer",
    icon: <PeopleAltOutlinedIcon />,
    link: "/customer",
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
    title: "Category",
    icon: <InsertDriveFileOutlinedIcon />,
    link: "/category",
  },
  {
    title: "Foods",
    icon: <FreeBreakfastOutlinedIcon />,
    link: "/foods",
  },
  {
    title: "calendar",
    icon: <CalendarMonthIcon />,
    link: "/calendar",
  },
  {
    title: "chart",
    icon: <HomeOutlinedIcon />,
    link: "/chart",
  },
  {
    title: "wallet",
    icon: <HomeOutlinedIcon />,
    link: "/wallet",
  },
];
