import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

const localizer = BigCalendar.momentLocalizer(moment);
console.log(moment('2019-01-10 11:05:32').toDate());

export default class Calendar extends Component {
    render() {
        const { events } = this.props;
        console.log(events);
        return (
            <div style={{ height: '60vh' }}>
                <BigCalendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    defaultDate={new Date()}
                />
            </div>
        );
    }
}
