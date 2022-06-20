// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css';
import React from 'react';

const Contact = (props) => {
    return (
        <div className='contact'>
            <div className="contactList">
                <img alt={props.data.photo} src={props.data.photo} width="100"/>
                <p>{props.data.name}</p>
                <p>{props.data.phone}</p>
                <p>{props.data.email}</p>
            </div>
        </div>
    )
}

export default Contact;