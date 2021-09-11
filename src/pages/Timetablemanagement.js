
import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import 'date-fns';
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import "react-datepicker/dist/react-datepicker.css";
const locales = {
    "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
});

const events = [
    {
        title: "Big Meeting",
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20),
        end: new Date(2021, 6, 23),
    },
];

const Timetablemanagement = () => {
  useEffect(()=>{
    Axios.get("http://localhost:3000/getTimetable").then((response)=>{
     // setTeacherList(response.data);
    });
  },[]);

    const [newEvent, setNewEvent] = useState({ subject: "",date:"",start: "", end: "" });
    const [allEvents, setAllEvents] = useState(events);
    const registerSession = () => {
      Axios.post("http://localhost:3000/registerTimetable",{
        jour:newEvent.date,heure_debut:newEvent.start,heure_fin:newEvent.end,matiere:newEvent.subject
    });
    console.log("???");
    setAllEvents([...allEvents, newEvent]); }
   

    return (
        <div className="App">
            <center>
            <h1>Calendar</h1>
            <h2>Add New Event</h2>
            </center>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
         <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
            <div>
                <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
              
                <button stlye={{ marginTop: "10px" }} onClick={registerSession}>
                    Add Event
                </button>
            </div>
            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
        </div>
        );
    };
    
    export default Timetablemanagement 
     /*import React from 'react';
    import { Eventcalendar, getJson, setOptions, CalendarNav, Button, CalendarToday, SegmentedGroup, SegmentedItem, localeAr } from 'mobiscroll-react';
 
    const Timetablemanagement = () => {
   
        
        const [view, setView] = React.useState('calendar');
        const [myEvents, setEvents] = React.useState([]);
        const [currentDate, setCurrentDate] = React.useState(new Date());
        const [calView, setCalView] = React.useState(
            {
                calendar: {
                    labels: true
                }
            }
        );
    
        React.useEffect(() => {
            getJson('https://trial.mobiscroll.com/events/?vers=5', (events) => {
                setEvents(events);
            }, 'jsonp');
        }, []);
    
        const changeView = React.useCallback((event) => {
            let calendarView;
            switch (event.target.value) {
                case 'calendar':
                    calendarView = {
                        calendar: {
                            labels: true
                        }
                    };
                    break;
                case 'schedule':
                    calendarView = {
                        schedule: {
                            type: 'week'
                        }
                    };
                    break;
            }
            setView(event.target.value);
            setCalView(calendarView);
        }, [setView, setCalView]);
    
        const onSelectedDateChange = React.useCallback((event) => {
            setCurrentDate(event.date);
        }, [setCurrentDate]);
    
        const getFirstDayOfWeek = React.useCallback((d, prev) => {
            const day = d.getDay();
            const diff = d.getDate() - day + (prev ? -7 : 7);
            return new Date(d.setDate(diff));
        }, []);
    
        const navigatePage = React.useCallback((prev) => {
            if (view == 'calendar') {
                const prevNextPage = new Date(currentDate.getFullYear(), currentDate.getMonth() + (prev ? -1 : 1), 1);
                setCurrentDate(prevNextPage);
            } else {
                const prevNextSunday = getFirstDayOfWeek(currentDate, prev);
                setCurrentDate(prevNextSunday);
            }
        }, [view, currentDate, setCurrentDate, getFirstDayOfWeek]);
    
        const customWithNavButtons = () => {
            return <React.Fragment>
                <CalendarNav className="md-custom-header-nav" />
                <div className="md-custom-header-controls">
                    <Button onClick={() => navigatePage(true)} icon="material-arrow-back" variant="flat" className="md-custom-header-button"></Button>
                    <CalendarToday className="md-custom-header-today" />
                    <Button onClick={() => navigatePage(false)} icon="material-arrow-forward" variant="flat" className="md-custom-header-button"></Button>
                </div>
                <div className="md-custom-header-view">
                    <SegmentedGroup value={view} onChange={changeView}>
                        <SegmentedItem value="calendar" icon="calendar" />
                        <SegmentedItem value="schedule" icon="material-list" />
                    </SegmentedGroup>
                </div>
            </React.Fragment>;
        }
    
        return (
            <div className="md-custom-header">
                <Eventcalendar
                    onSelectedDateChange={onSelectedDateChange}
                    selectedDate={currentDate}
                    renderHeader={customWithNavButtons}
                    view={calView}
                    data={myEvents}
                    height={750}
                />
            </div>
        );
    }
    
export default Timetablemanagement;

import React, { Component } from 'react'  
import FullCalendar from "@fullcalendar/react";  
import dayGridPlugin from "@fullcalendar/daygrid";  
import timeGridPlugin from "@fullcalendar/timegrid";  
  
import "@fullcalendar/core";  
import "@fullcalendar/daygrid";  
import "@fullcalendar/timegrid";  
  
const events = [
    {
        title: "Big Meeting",
        start: new Date(2021, 6, 0),
        end: new Date(2021, 6, 0),
    },
    {
        title: "Vacation",
        start: new Date(2021, 6, 7),
        end: new Date(2021, 6, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 6, 20,18,0,0),
        end: new Date(2021, 6, 20,7,0,0),
    },
    {
        title: "Conference2",
        start: new Date(2021, 6, 20,8,0,0),
        end: new Date(2021, 6, 20,9,0,0),
    },
]; 
const Timetablemanagement = () => {  
        return (  
            <div className="container">  
                  <div className="row title" style={{ marginTop: "20px" }} >  
                    <div class="col-sm-12 btn btn-info">  
                        FullCalendar In React Application  
               </div>  
                </div>  
                 <FullCalendar  
              defaultView="dayGridMonth"  
             header={{  
            left: "prev,next",  
            center: "title",  
           right: "dayGridMonth,timeGridWeek,timeGridDay"  
        }}  
        plugins={[dayGridPlugin, timeGridPlugin]}  
        events={events}  
      />  
            </div>  
        )  
    }  
  
  
export default Timetablemanagement;  */