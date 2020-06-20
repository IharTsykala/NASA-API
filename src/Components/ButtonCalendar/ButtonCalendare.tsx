import React, { useEffect } from "react"
import DateFnsUtils from "@date-io/date-fns"
import Grid from "@material-ui/core/Grid"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import { Box } from "@material-ui/core"
import { connect } from "react-redux"
import { setData } from "../../Redux/store/Data/Data.actions"

type ButtonCalendarProps = {
  currentDate: Date,
  dispatch: any,
}

const ButtonCalendar: React.FunctionComponent<ButtonCalendarProps> = ({
  currentDate,
  dispatch,
}) => {
  useEffect(() => {
    const date = localStorage.getItem("date")
    console.log(date)
    // console.log(currentDate)
  }, [])

  const handleDateChange = (newDate: Date | null) => {
    if (
      newDate &&
      newDate.toString().slice(4, 11) !== currentDate.toString().slice(4, 11)
    ) {
      dispatch(setData(newDate))
      console.log(newDate)
      localStorage.setItem("date", JSON.stringify(newDate.toString()))
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
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </Box>
  )
}

const mapStateToProps = (state: any) => ({
  currentDate: state.data.data,
})

export default connect(mapStateToProps)(ButtonCalendar)
