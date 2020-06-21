import React, { useEffect, useState } from "react"
import { Box, List } from "@material-ui/core"
import { connect } from "react-redux"
import { PhotoInterface } from "../../../Redux/InterfacesEntity/Photo.interface"
import CardPhoto from "../../../Components/CartPhoto/CartPhoto"

type PhotosBlockProps = {
  currentDate: Date,
  currentPhoto: PhotoInterface,
  catalogValue: boolean,
  catalog: [PhotoInterface],
  dispatch: any,
}

const PhotosBlock: React.FunctionComponent<PhotosBlockProps> = ({
  currentDate,
  currentPhoto,
  catalogValue,
  catalog,
  dispatch,
}) => {
  return (
    <Box component={"div"} className={"photos-block"}>
      {currentPhoto && !catalogValue && (
        <>
          <CardPhoto currentPhoto={currentPhoto} />
        </>
      )}
      {currentPhoto && catalogValue && (
        <List className={"list_request__container__list"}>
          {catalog.map((item: PhotoInterface, index: number) => (
            <CardPhoto currentPhoto={item} key={index} />
          ))}
        </List>
      )}
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  currentDate: state.data.data,
  currentPhoto: state.currentPhoto.currentPhoto,
  catalogValue: state.catalog.catalogValue,
  catalog: state.currentPhoto.catalog,
})

export default connect(mapStateToProps)(PhotosBlock)
