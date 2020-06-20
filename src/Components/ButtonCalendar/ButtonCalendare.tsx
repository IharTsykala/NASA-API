import React, { useState } from "react"
import DateFnsUtils from "@date-io/date-fns"
import Grid from "@material-ui/core/Grid"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import { Box } from "@material-ui/core"

const ButtonCalendar: React.FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  )

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
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
            value={selectedDate}
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

export default ButtonCalendar
