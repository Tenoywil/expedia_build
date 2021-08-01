import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import "./CardDisplay.scss";

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 200,
    minHeight: 360,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: 1,
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "30%",
      top: 0,
      zIndex: 1,
      background: "linear-gradient(to bottom, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    top: 0,
    width: "100%",
  },
  button: {
    position: "absolute",
    width: "fit-content",
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "10px",
    paddingRight: "10px",
    zIndex: 2,
    bottom: "10%",
    left: "5%",
  },
}));

const CardDisplay = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({
    height: "100%",
    borderRadius: "2px",
  });
  const styles = useStyles();
  return (
    <div className="container-card">
      <Card className={styles.card}>
        <CardMedia
          classes={mediaStyles}
          image={
            "https://a.travel-assets.com/travel-assets-manager/7bde04c8-dbd7-4bcf-927b-8832e982c05c/CMCT-3303_AdobeStock_223432371_375x468.jpg"
          }
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoTitle>Book Now, travel</InfoTitle>
            <InfoTitle>whenever</InfoTitle>

            <InfoSubtitle>
              Now is the perfect time to turn your travel
            </InfoSubtitle>
            <InfoSubtitle>
              dreams into vacations to look forward to.
            </InfoSubtitle>
          </Info>
        </Box>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={styles.button}
          style={{
            padding: "10px",
            backgroundColor: "#005aeb",
            fontSize: "12px",
            fontWeight: "bold",
            textTransform: "lower-case",
          }}
        >
          Explore popular destinations
        </Button>
      </Card>
    </div>
  );
});
export default CardDisplay;
