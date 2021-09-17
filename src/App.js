import React from "react";
import {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./App.css";
import Wilder from "./Wilder";
// // Styled Components
import { H1, Container, Header } from "./element"

function App() {

 
    const [wilders, setWilders] = useState([]);
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [error, setError] =useState("")
    const { register, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);

    useEffect(() => {
      const fetchWilders = async () => {
        try {
          const result = await axios(
            "http://localhost:5000/api/wilders"
          );
          setWilders(result.data.result);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchWilders();
    }, []);

  return (
    <div>

      <Header>
        <div className="container">
          <H1>Wilders Book</H1>
        </div>
      </Header>
      <Container>
        <h2>Wilders</h2>
        <section className="card-row">
        {wilders.map((wilder) => (
            <Wilder key={wilder._id} {...wilder} />
          ))}
        </section>
      </Container>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>

      {/* FORM */}
      <form onSubmit={async(e)=>{
        e.preventDefault();
        try{
          const result = await axios.post(
            "http://localhost:5000/api/wilders",
            {
              name,
              city,
            }
          );
          console.log(result)
          if(result.data.success){
            setError("")
          }
        }catch (error){
          if(error.response) {
            setError(error.response.data.message)
          } else {
            setError(error.message)
          }

        }
      }}>
      <label htmlFor="name-input">Name :</label>
      <input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="city-input">City :</label>
      <input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button>Add</button>


      </form>

    </div>

   
  );
}

export default App;
