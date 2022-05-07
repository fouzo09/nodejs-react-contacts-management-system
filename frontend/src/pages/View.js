import axios from 'axios';
import React, {useEffect, useState}from 'react'
import { useLocation, useParams} from 'react-router-dom'

const View = () => {

  const {id} = useParams();
  const [state, setState] = useState([]);

  useEffect(()=>{
    if(id){
      getContact(id);
    }
  }, []);

  const getContact = async (id)=>{
    const response = await axios.get(`http://127.0.0.1:5000/api/v1/contact/one/${id}`);
    if(response.status === 200){
     
      setState(response.data);
    }
  }

  return (
    <div className='content'>
      <p><strong>Nom complet</strong> {state.fullName}</p>
      <p><strong>Email</strong> {state.email}</p>
      <p><strong>Telephone</strong> {state.telephone}</p>
    </div>
  )
}

export default View