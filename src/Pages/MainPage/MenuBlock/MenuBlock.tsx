import React from "react"
import { Box } from "@material-ui/core"
import Calendar from "../../../Components/Calendar/Calendar"
import Tape from "../../../Components/Tape/Tape"

const MenuBlock: React.FunctionComponent = () => {
  return (
    <Box component={"div"} className={"menu-block"}>
      <Calendar />
      <Tape />
    </Box>
  )
}

export default MenuBlock
