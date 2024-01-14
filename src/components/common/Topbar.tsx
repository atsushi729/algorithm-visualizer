import { AppBar, Toolbar, styled } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";

const Topbar = () => {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <div className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
          <a href="/" style={{ textDecoration: "none" }}>
            Home
          </a>
        </div>
        <div className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
          <a href="/" style={{ textDecoration: "none" }}>
            About
          </a>
        </div>
      </Toolbar>
    </StyledAppBar>
  );
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------

const StyledAppBar = styled(AppBar)({
  width: `calc(100% - ${sizeConfigs.sidebar.width})`,
  ml: sizeConfigs.sidebar.width,
  boxShadow: "unset",
  backgroundColor: colorConfigs.topbar.bg,
  color: colorConfigs.topbar.color,
});

export default Topbar;
