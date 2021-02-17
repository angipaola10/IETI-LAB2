import React, { useState } from 'react';
import TodoList from "./TodoList";
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function TodoApp() {

    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState("");
    const [priority, setPriority] = useState(0);
    const [dueDate, setDueDate] = useState(moment());

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.length || !priority.length || !dueDate)
            return;

        const newItem = {
            text: text,
            priority: priority,
            dueDate: dueDate,
        };

        setTodoList([...todoList, newItem]);
    }

    return (
        <React.Fragment>
            <br />
            <form onSubmit={handleSubmit}  className="todo-form" autoComplete="off">
            <Typography variant="h4" style={{marginBottom: "2rem"}}>New TODO</Typography>
                <TextField
                    id="text"
                    value={text}
                    label="Text"
                    onChange={(e) => setText(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth>
                </TextField>
                <br />
                <br />
                <TextField
                    id="priority"
                    type="number"
                    label="Priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    fullWidth>
                </TextField>
                <br />
                <br />
                <MuiPickersUtilsProvider utils={DateFnsUtils} >
                    <KeyboardDatePicker
                        id="due-date"
                        label="Due Date"
                        selected={dueDate}
                        placeholderText="Due date"
                        format="dd/MM/yyyy"
                        onChange={(date) => setDueDate(date)}
                        fullWidth>
                    </KeyboardDatePicker>
                </MuiPickersUtilsProvider>
                <br />
                <Button variant="contained" color="primary" style={{"marginTop": "2rem"}} fullWidth type="submit" >
                    Add #{todoList.length + 1}
                </Button>
            </form>
            <br />
            <br />
            <TodoList todoList={todoList} />
        </React.Fragment>
    );
}