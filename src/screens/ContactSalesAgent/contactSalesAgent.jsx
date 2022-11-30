import { Typography } from "@mui/material";
import { HomeHeroBanner } from "../../components";
import FooterSection from "../../components/FooterSection/FooterSection";
import ResponsiveNav from "../../components/ResponsiveNav/ResponsiveNav";

export default () => {
  return (
    <>
      <ResponsiveNav makeMenuDark />

      <div className="w-8/12 m-auto h-72">
        <Typography variant="h4"></Typography>
      </div>

      <FooterSection />
    </>
  );
};
