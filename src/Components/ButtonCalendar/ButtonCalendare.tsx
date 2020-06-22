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
import { getPhotoById } from "../../Redux/store/Photo/Photo.actions"

type ButtonCalendarProps = {
  currentDate: Date,
  // valueTodayDate: boolean,
  dispatch: any,
}

const ButtonCalendar: React.FunctionComponent<ButtonCalendarProps> = ({
  currentDate,
  // valueTodayDate,
  dispatch,
}) => {
  const date = Date.parse(localStorage.getItem("date") || "[]")

  useEffect(() => {
    // const date = Date.parse(localStorage.getItem("date") || "[]")
    if (!Array.isArray(date) && !localStorage.getItem("valueTodayDate")) {
      dispatch(setData(new Date(date)))
      dispatch(getPhotoById(new Date(date)))
    }
  }, [date, dispatch])

  useEffect(() => {
    // const date = Date.parse(localStorage.getItem("date") || "[]")
    if (!Array.isArray(date) && localStorage.getItem("valueTodayDate"))
      dispatch(getPhotoById(currentDate))
  }, [currentDate, date, dispatch])

  const handleDateChange = (newDate: Date | null) => {
    if (
      newDate &&
      newDate.toString().slice(4, 11) !== currentDate.toString().slice(4, 11)
    ) {
      dispatch(setData(newDate))
      if (
        newDate.toString().slice(4, 11) !== new Date().toString().slice(4, 11)
      ) {
        dispatch(getPhotoById(newDate))
        localStorage.setItem("date", JSON.stringify(newDate.toString()))
        // dispatch(setTodayData(false))
        localStorage.setItem("valueTodayDate", "")
      } else {
        // dispatch(setTodayData(true))
        localStorage.setItem("valueTodayDate", "true")
      }
    }
  }
  return (
    <Box component={"div"} className={"button-calendar"}>
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
  // valueTodayDate: state.data.valueTodayDate,
})

export default connect(mapStateToProps)(ButtonCalendar)
