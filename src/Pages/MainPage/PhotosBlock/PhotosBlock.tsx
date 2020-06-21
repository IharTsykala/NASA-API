import React, { useEffect, useState } from "react"
import {Avatar, Box} from "@material-ui/core"
import { connect } from "react-redux"
import { getPhotoById } from "../../../Redux/store/Photo/Photo.actions"

type PhotosBlockProps = {
  currentDate: Date,
  dispatch: any,
}

const PhotosBlock: React.FunctionComponent<PhotosBlockProps> = ({
  currentDate,
  dispatch,
}) => {
  useEffect(() => {
    dispatch(getPhotoById(currentDate))
  }, [currentDate, dispatch])
  return (
    <Box component={"div"} className={"photos-block"}>
      <Avatar src={} alt={photoOfTheDay}/>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  currentDate: state.data.data,
})

export default connect(mapStateToProps)(PhotosBlock)
