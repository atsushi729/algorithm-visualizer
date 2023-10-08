import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import styled from "@emotion/styled";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const Sidebar = () => {
  return (
    <StyledDrawer variant="permanent">
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar src={assets.images.logo} />
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) =>
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        )}
      </List>
    </StyledDrawer>
  );
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------
const StyledDrawer = styled(Drawer)({
  width: sizeConfigs.sidebar.width,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: sizeConfigs.sidebar.width,
    boxSizing: "border-box",
    borderRight: "0px",
    backgroundColor: colorConfigs.sidebar.bg,
    color: colorConfigs.sidebar.color,
  },
});

export default Sidebar;
