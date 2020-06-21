import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@material-ui/core"
import { PhotoInterface } from "../../Redux/InterfacesEntity/Photo.interface"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: "1400px",
      margin: "auto",
      height: "100%",
      textAlign: "center",
    },
    media: {
      paddingTop: "56.25%", // 16:9
      position: "relative",
    },
    content: {
      overflowY: "auto",
    },
  })
)

type CardPhotoProps = {
  currentPhoto: PhotoInterface,
}

const CardPhoto: React.FunctionComponent<CardPhotoProps> = ({
  currentPhoto,
}) => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={currentPhoto.title} subheader={currentPhoto.date} />
        {currentPhoto.url && (
          <CardMedia
            image={currentPhoto.url}
            title={"photoOfTheDay"}
            className={classes.media}
          >
            <ArrowBackIosIcon className={`photos-block__back`} />
            <ArrowForwardIosIcon className={`photos-block__forward`} />
          </CardMedia>
        )}
        <CardContent className={classes.content}>
          <Typography variant="body2" color="textSecondary" component="p">
            {currentPhoto.explanation}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default CardPhoto
