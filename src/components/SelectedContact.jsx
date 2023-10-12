import React from "react";

export default function SelectedContact({contact, selectedContactId}) {
    return (
        <>
        <tr>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
        </tr>
        </>

    );
}