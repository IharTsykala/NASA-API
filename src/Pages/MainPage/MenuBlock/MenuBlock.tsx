import React from "react"
import { Box } from "@material-ui/core"
import Calendar from "../../../Components/Calendar/Calendar"
import Catalog from "../../../Components/Catalog/Catalog"

// type SearchProps = {
//   dispatch: any,
// }

const MenuBlock: React.FunctionComponent = () => {
  return (
    <Box component={"div"} className={"menu-block"}>
      <Calendar />
      <Catalog />
    </Box>
  )
}

// const mapStateToProps = (state: any) => ({
//   searchStringState: state.pagination.searchString,
// })

export default MenuBlock
