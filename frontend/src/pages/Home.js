import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Table } from '../components/Table';
import { toast } from 'react-toastify';
const Home = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(()=>{
      getContacts();
  }, []);

  const getContacts = async ()=>{
      const response = await axios.get("http://127.0.0.1:5000/api/v1/contact/list");
      if(response.status === 200){
        setContacts(response.data);
      }
  }

  const deleteUser = async (id)=>{
    if(window.confirm("Voulez-vous supprimez")){
      const response = await axios.get(`http://127.0.0.1:5000/api/v1/contact/remove/${id}`);
      if(response.status === 200){
        toast.success(response.data);
        getContacts();
      }   
    }
  }
  
  return (
    <div className='content'>
      <Table contacts={contacts} deleteUser={deleteUser} />
    </div>
  )
}

export default Home