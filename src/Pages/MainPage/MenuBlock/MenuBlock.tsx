import React from "react"
import { Box } from "@material-ui/core"
import ButtonCalendar from "../../../Components/ButtonCalendar/ButtonCalendare"
import ButtonPhotoTape from "../../../Components/ButtonPhotoTape/ButtonPhotoTape"

// type SearchProps = {
//   dispatch: any,
// }

const MenuBlock: React.FunctionComponent = () => {
  return (
    <Box component={"div"} className={"menu-block"}>
      <ButtonCalendar />
      <ButtonPhotoTape />
    </Box>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default MenuBlock
