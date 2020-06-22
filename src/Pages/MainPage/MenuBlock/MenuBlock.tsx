import React from "react"
import { Box } from "@material-ui/core"
import Calendar from "../../../Components/Calendar/Calendar"
import Catalog from "../../../Components/Catalog/Catalog"

const MenuBlock: React.FunctionComponent = () => {
  return (
    <Box component={"div"} className={"menu-block"}>
      <Calendar />
      <Catalog />
    </Box>
  )
}

export default MenuBlock
