import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListIcon from "@mui/icons-material/List";
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
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
    title: "Order list",
    icon: <ListIcon />,
    link: "/orderList",
  },
  {
    title: "order detail",
    icon: <InsertDriveFileOutlinedIcon />,
    link: "/orderDetail",
  },
  {
    title: "Customer",
    icon: <PeopleAltOutlinedIcon />,
    link: "/customer",
  },
  {
    title: "customer detail",
    icon: <PersonOutlineOutlinedIcon />,
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
    icon: <FreeBreakfastOutlinedIcon />,
    link: "/foods",
  },
  {
    title: "Food detail",
    icon: <HomeOutlinedIcon />,
    link: "/foodDetail",
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
