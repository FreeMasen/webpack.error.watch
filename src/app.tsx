require("es6-object-assign/auto");
import * as React from 'react';
import * as ReactDOM from "react-dom";
import * as moment from 'moment';
import BigCalendar from "react-big-calendar";
import { Provider } from 'react-redux';
import {createStore} from 'redux';

require("../lib/css/sos-big-calendar.css");

BigCalendar.momentLocalizer(moment);


export class App extends React.Component<any, any> {
    render() {
        return (
            <Provider>
            <BigCalendar/>
        </Provider>)
    }
}
ReactDOM.render((<App/>), document.getElementById('app'))