import React, { useState } from 'react';
import TodoList from "./TodoList";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";

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
            <br />
            <form onSubmit={handleSubmit} className="todo-form">
                <h3>New TODO</h3>
                <label htmlFor="text" className="right-margin">
                    Text:
                </label>
                <input
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}>
                </input>
                <br />
                <br />
                <label htmlFor="priority" className="right-margin">
                    Priority:
                    </label>
                <input
                    id="priority"
                    type="number"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}>
                </input>
                <br />
                <br />
                <DatePicker
                    id="due-date"
                    selected={dueDate}
                    placeholderText="Due date"
                    onChange={(date) => setDueDate(date)}>
                </DatePicker>
                <br />
                <button>
                    Add #{todoList.length + 1}
                </button>
            </form>
            <br />
            <br />
            <TodoList todoList={todoList} />
        </React.Fragment>
    );
}