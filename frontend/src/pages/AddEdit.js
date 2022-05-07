import React, {useState} from 'react';
import { useLocation,  useNavigate } from 'react-router-dom';
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

  const {fullName, email, telephone} = state;

  const navigate = useNavigate();

  const handleInput = (event)=>{
    const {name, value} = event.target;

    setState({...state, [name]: value})
  }

  const addContact = async (data)=>{
    const response = await axios.post("http://127.0.0.1:5000/api/v1/contact/add", data);
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
      addContact(state);
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