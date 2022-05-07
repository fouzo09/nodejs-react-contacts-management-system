import React from 'react';
import { Link } from 'react-router-dom';
import "./style/table.css";


export function Table(props) {

    const contacts = props.contacts;
    const deleteUser = props.deleteUser;

    const handleDeleteUser = (id)=>{
        deleteUser(id);
    }
    
    let content = '';
    if(contacts.length > 0){
        content = contacts.map((contact, index) =>(
                            <tr key={contact.id}>
                                <td>{index + 1}</td>
                                <td>{contact.fullName}</td>
                                <td>{contact.email}</td>
                                <td>{contact.telephone}</td>
                                <td>
                                    <Link to={`/edit/${contact.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-edit" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </Link>
                                    <Link to={`/view/${contact.id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-edit" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </Link>
                                    <svg onClick={()=> handleDeleteUser(contact.id)} xmlns="http://www.w3.org/2000/svg"  className="icon icon-remove" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </td>
                            </tr>
                        ));
    }else{
        content = (<tr colSpan="5">La liste des contacts est vide.</tr>);
    }
  return (
     <>
         <table>
             <thead>
                 <tr>
                     <th>#</th>
                     <th>Nom complet</th>
                     <th>Email</th>
                     <th>Telephone</th>
                     <th>Actions</th>
                 </tr>
             </thead>
             <tbody>
                 
                 {content}
             </tbody>
         </table>
     </>
  )
}
