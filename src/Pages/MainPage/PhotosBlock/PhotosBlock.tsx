import React, { useEffect, useState } from "react"
import { Avatar, Box } from "@material-ui/core"
import { connect } from "react-redux"
import { getPhotoById } from "../../../Redux/store/Photo/Photo.actions"
import { PhotoInterface } from "../../../Redux/InterfacesEntity/Photo.interface"

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
  useEffect(() => {
    // dispatch(getPhotoById(currentDate))
    console.log(currentDate)
    console.log(currentPhoto)
  }, [currentDate, currentPhoto, dispatch])
  return (
    <Box component={"div"} className={"photos-block"}>
      <Avatar src={currentPhoto.url} alt={"photoOfTheDay"} />
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  currentDate: state.data.data,
  currentPhoto: state.currentPhoto.currentPhoto,
})

export default connect(mapStateToProps)(PhotosBlock)
