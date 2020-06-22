import React, { useEffect, useState } from "react"
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
} from "@material-ui/core"
import { connect } from "react-redux"
import { PhotoInterface } from "../../../Redux/InterfacesEntity/Photo.interface"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

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
    },
    content: {
      overflowY: "auto",
    },
  })
)

type PhotosBlockProps = {
  currentDate: Date,
  currentPhoto: PhotoInterface,
  dispatch: any,
}

const PhotosBlock: React.FunctionComponent<PhotosBlockProps> = ({
  currentDate,
  currentPhoto,
  dispatch,
}) => {
  const classes = useStyles()
  useEffect(() => {
    // dispatch(getPhotoById(currentDate))
    // console.log(currentDate)
    // console.log(currentPhoto)
  }, [currentDate, currentPhoto, dispatch])
  return (
    <Box component={"div"} className={"photos-block"}>
      {currentPhoto && (
        <Card className={classes.root}>
          <CardHeader
            title={currentPhoto.title}
            subheader={currentPhoto.date}
          />
          {currentPhoto.url && (
            <CardMedia
              image={currentPhoto.url}
              title={"photoOfTheDay"}
              className={classes.media}
            />
          )}
          <CardContent className={classes.content}>
            <Typography variant="body2" color="textSecondary" component="p">
              {currentPhoto.explanation}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  currentDate: state.data.data,
  currentPhoto: state.currentPhoto.currentPhoto,
})

export default connect(mapStateToProps)(PhotosBlock)
