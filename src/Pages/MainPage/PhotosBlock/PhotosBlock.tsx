import React, { useState } from "react"
import { Box } from "@material-ui/core"
import { connect } from "react-redux"

type PhotosBlockProps = {
  currentDate: Date,
  dispatch: any,
}

const PhotosBlock: React.FunctionComponent<PhotosBlockProps> = ({
  currentDate,
  dispatch,
}) => {
  return (
    <Box component={"div"} className={"photos-block"}>
      2
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  currentDate: state.data.data,
})

export default connect(mapStateToProps)(PhotosBlock)
