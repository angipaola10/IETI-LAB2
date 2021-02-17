import React from 'react';

export default function Todo ({ text, priority, dueDate }) {

    return (
        <tr>
            <td>{text}</td>
            <td>{priority}</td>
            <td>{dueDate.toLocaleDateString()}</td>
        </tr>
    );

}