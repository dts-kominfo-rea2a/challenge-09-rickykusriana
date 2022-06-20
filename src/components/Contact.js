// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css';
import React from 'react';

const Contact = (props) => {
    return (
        <div className='contact'>
            {
                props.data.map((value, key) =>
                    <div key={key} className="contactList">
                        <img class="photo" alt={value.photo} src={value.photo} width="100"/>
                        <p class="name">{value.name}</p>
                        <p class="phone">{value.phone}</p>
                        <p class="email">{value.email}</p>
                    </div>
                )
            }
        </div>
    )
}

export default Contact;