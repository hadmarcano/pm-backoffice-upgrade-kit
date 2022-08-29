// material-ui
import { useTheme } from "@mui/material/styles";
import logo from "../../assets/images/logoDarkFaceId.png";

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (
    <>
      <img src={logo} alt="FaceId" width="300"/>
    </>
  );
};

export default Logo;
