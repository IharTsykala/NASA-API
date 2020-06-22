import React, { useEffect } from "react"
import { Box, FormControlLabel, Checkbox } from "@material-ui/core"
import { getCatalogByDay } from "../../Redux/store/Photo/Photo.actions"
import { connect } from "react-redux"
import { setCatalogValue } from "../../Redux/store/Catalog/Catalog.actions"

type CatalogProps = {
  currentDate: Date,
  catalogValue: boolean,
  dispatch: any,
}

const Catalog: React.FunctionComponent<CatalogProps> = ({
  currentDate,
  catalogValue,
  dispatch,
}) => {
  useEffect(() => {
    dispatch(getCatalogByDay(currentDate))
  }, [currentDate, dispatch])

  const handleChange = () => {
    dispatch(setCatalogValue())
  }
  return (
    <Box component={"div"} className={"catalog"}>
      <FormControlLabel
        control={
          <Checkbox
            checked={catalogValue}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Catalog"
      />
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  currentDate: state.data.data,
  catalogValue: state.catalog.catalogValue,
})

export default connect(mapStateToProps)(Catalog)