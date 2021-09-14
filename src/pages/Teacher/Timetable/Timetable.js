import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import {appointments} from '../../Administration/TimeTableMangement/demo-data/appointments'

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  text: theme.typography.h6,
  formControlLabel: {
    ...theme.typography.caption,
    fontSize: '1rem',
  }
}));

const currentDate = '2018-06-27';

const TimeTable = () => {
  const [data, setData] = React.useState(appointments);

  return (
    <React.Fragment>
      <Paper>
        <Scheduler
          data={data}
          height={1100}
        >
          <ViewState
            currentDate={currentDate}
          />
          <WeekView
            startDayHour={7}
            endDayHour={18}
          />

          <Appointments />
        </Scheduler>
      </Paper>
    </React.Fragment>
  );
};

export default TimeTable;


