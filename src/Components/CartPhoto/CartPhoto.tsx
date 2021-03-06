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
import handlerCommonChange from "../../services/common"
import { getPhotoByDay } from "../../Redux/store/Photo/Photo.actions"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      margin: "0 auto",
      textAlign: "center",
    },
    media: {
      width: "100%",
      maxWidth: "1400px",
      paddingTop: "56.25%", // 16:9
      position: "relative",
    },
  })
)

type CardPhotoProps = {
  currentDate: Date,
  currentPhoto: PhotoInterface,
  catalogValue: boolean,
  dispatch?: any,
}

const CardPhoto: React.FunctionComponent<CardPhotoProps> = ({
  currentDate,
  currentPhoto,
  catalogValue,
  dispatch,
}) => {
  const classes = useStyles()

  let disableForward = false
  if (
    new Date().toString().slice(4, 11) === currentDate.toString().slice(4, 11)
  )
    disableForward = true

  const back = new Date(Date.parse(currentDate.toString()) - 24 * 3600 * 1000)
  const forward = new Date(
    Date.parse(currentDate.toString()) + 24 * 3600 * 1000
  )

  const handlerArrow = (newDate: Date) => {
    if (localStorage.getItem("valueTodayDate")) dispatch(getPhotoByDay(newDate))
    handlerCommonChange(dispatch, newDate)
  }

  return (
    <>
      <Card className={`photo-card-block ${classes.root}`}>
        <CardHeader title={currentPhoto.title} subheader={currentPhoto.date} />
        {currentPhoto.url && (
          <CardMedia
            image={currentPhoto.url}
            title={"photoOfTheDay"}
            className={classes.media}
          >
            {!catalogValue && (
              <ArrowBackIosIcon
                className={`photos-block__back`}
                onClick={() => handlerArrow(back)}
              />
            )}
            {!catalogValue && !disableForward && (
              <ArrowForwardIosIcon
                className={`photos-block__forward`}
                onClick={() => handlerArrow(forward)}
              />
            )}
          </CardMedia>
        )}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {currentPhoto.explanation}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default CardPhoto
