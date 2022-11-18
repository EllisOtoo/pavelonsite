import MUIIcon from "../a_atoms/MUIIcon";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MUICard = ({ description, MUIIconComp, caption }) => {
  return (
    <Card raised>
      <CardContent>
        <MUIIcon> {MUIIconComp}</MUIIcon>
        <Typography
          sx={{ marginY: 4 }}
          variant="h5"
          color="text.secondary"
          gutterBottom
        >
          {caption}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      {/* <MUIIcon>{MUIIconComp}</MUIIcon> */}
    </Card>
  );
};

export default MUICard;
