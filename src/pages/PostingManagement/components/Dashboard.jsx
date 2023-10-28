import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SubSideMenu from "./SubSideMenu";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Dashboard({ children }) {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          marginTop: 5,
          ".MuiPaper-root.MuiPaper-elevation": {
            top: "68px !important",
          },
        }}
        variant="permanent"
        className="custom-drawer"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <List>
          {[
            {
              text: "Inbox",
            },
            {
              text: "Quản lý tin đăng",
              items: [
                { text: "Đăng mới", link: "/quan-ly-dang-tin" },
                { text: "Danh sách tin", link: "/quan-ly-dang-tin/danh-sach" },
                { text: "Tin nháp", link: "/quan-ly-dang-tin/danh-sach-nhap" },
                {
                  text: "Danh sách tin tài trợ",
                  link: "Danh sách tin tài trợ",
                },
              ],
            },
            {
              text: "Send email",
            },
            {
              text: "Drafts",
              items: [],
            },
          ].map((item) => (
            <SubSideMenu
              key={item.text}
              text={item.text}
              items={item.items}
              open={open}
            />
          ))}
        </List>
      </Drawer>

      <Box className="main-box" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
Dashboard.propTypes = {
  children: PropTypes.element,
};
