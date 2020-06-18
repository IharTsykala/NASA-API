import React from "react"
import MenuBlock from "./MenuBlock/MenuBlock"
import PhotosBlock from "./PhotosBlock/PhotosBlock"
import Box from "@material-ui/core/Box"

const MainPage: React.FunctionComponent = () => {
  return (
    <Box component={"div"} className={"main-page"}>
      <MenuBlock />
      <PhotosBlock />
    </Box>
  )
}

export default MainPage
