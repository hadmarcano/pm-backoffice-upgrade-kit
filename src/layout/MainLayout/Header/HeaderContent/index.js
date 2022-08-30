// Material-ui
import { Box, IconButton, Link, useMediaQuery } from "@mui/material";
import { GithubOutlined } from "@ant-design/icons";

// Project import
import Search from "./Search";
import Profile from "./profile";
import Notification from "./Notification";
import MobileSection from "./MobileSection";

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const matchesXs = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      {!matchesXs && <Search />}
      {matchesXs && <Box sx={{ width: "100%", ml: 1 }} />}

      <IconButton
        component={Link}
        href="https://github.com/hadmarcano/pm-backoffice-upgrade-kit"
        target="_blank"
        disableRipple
        color="secondary"
        title="Ver código fuente"
        sx={{ color: "purple.700", bgcolor: "purple.50" }}
      >
        <GithubOutlined />
      </IconButton>

      {/* <Notification /> */}
      {!matchesXs && <Profile />}
      {matchesXs && <MobileSection />}
    </>
  );
};

export default HeaderContent;
