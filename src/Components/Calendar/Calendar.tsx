import React, { useEffect } from "react"
import DateFnsUtils from "@date-io/date-fns"
import Grid from "@material-ui/core/Grid"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import { Box } from "@material-ui/core"
import { connect } from "react-redux"
import { setData, setTodayData } from "../../Redux/store/Data/Data.actions"
import { getPhotoByDay } from "../../Redux/store/Photo/Photo.actions"
import handlerCommonChange from "../../services/common"

type CalendarProps = {
  currentDate: Date,
  dispatch: any,
}

const Calendar: React.FunctionComponent<CalendarProps> = ({
  currentDate,
  dispatch,
}) => {
  const date = Date.parse(localStorage.getItem("date") || "[]")

  useEffect(() => {
    if (!Array.isArray(date) && !localStorage.getItem("valueTodayDate")) {
      dispatch(setData(new Date(date)))
      dispatch(getPhotoByDay(new Date(date)))
    }
  }, [date, dispatch])

  useEffect(() => {
    if (!Array.isArray(date) && localStorage.getItem("valueTodayDate"))
      dispatch(getPhotoByDay(currentDate))
  }, [currentDate, date, dispatch])

  const handleDateChange = (newDate: Date | null) => {
    if (
      newDate &&
      newDate.toString().slice(4, 11) !== currentDate.toString().slice(4, 11)
    )
      handlerCommonChange(dispatch, newDate)
  }
  return (
    <Box component={"div"} className={"calendar"}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={currentDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            maxDate={new Date()}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  currentDate: state.data.data,
})

export default connect(mapStateToProps)(Calendar)
