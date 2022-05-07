import React, {useEffect, useState} from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "./style/AddEdit.css"
import { toast } from 'react-toastify';


const initialState = {
  fullName: "",
  email: "",
  telephone: ""
}

const AddEdit = () => {

  const [state, setState] = useState(initialState);
  const navigate = useNavigate();
  const {id} = useParams();
  

  const {fullName, email, telephone} = state;

  useEffect(()=>{
    if(id){
      
      getContact(id);
    }
  }, []);

  const handleInput = (event)=>{
    const {name, value} = event.target;

    setState({...state, [name]: value})
  }

  const getContact = async (id)=>{
    const response = await axios.get(`http://127.0.0.1:5000/api/v1/contact/one/${id}`);
    if(response.status === 200){
      console.log(response.data);
      setState(response.data);
    }
  }

  const addContact = async (data)=>{
    const response = await axios.post("http://127.0.0.1:5000/api/v1/contact/add", data);
    if(response.status === 200){

      toast.success(response.data);
    }else{
      toast.error(response.data);
    }
  }

  const updateContact = async (data)=>{
    const response = await axios.post(`http://127.0.0.1:5000/api/v1/contact/edit`, data);
    if(response.status === 200){

      toast.success(response.data);
    }else{
      toast.error(response.data);
    }
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    if(!fullName || !email || !telephone){
      toast.error("Tous les champs sont obligatoires");
    }else{
      if(state.id){
        updateContact(state);
      }else{
        addContact(state);
      }
      
      setTimeout(()=> navigate("/"), 8000);
    }
    
  }

  return (
    <div className='content'>
      <form onSubmit={handleSubmit}>
          <label>Nom complet</label>
          <input type="text"className='form--control' name="fullName" value={fullName} onChange={handleInput} />

          <label>Email</label>
          <input type="text"className='form--control' name="email" value={email} onChange={handleInput} />

          <label>Telephone</label>
          <input type="text"className='form--control' name="telephone" value={telephone} onChange={handleInput} />
          <button className='btn btn--save'>Enregistrer</button>
      </form>
    </div>
  )
}

export default AddEdit