import React from 'react'

function Table() {
    return (
        <table className="custom-border">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Demo</td>
                    <td>test@demo.com</td>
                </tr>
            </tbody>
            
        </table>
    )
}

export default Table
