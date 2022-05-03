import React, { useEffect, useState } from 'react';
import axios from "axios"
import { Table } from '../components/Table';
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
  
  return (
    <div className='content'>
      <Table contacts={contacts} />
    </div>
  )
}

export default Home