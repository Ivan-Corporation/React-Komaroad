import React from "react";
import { useForm } from "react-hook-form";

export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = data => console.log(data);
   
  return (
    <div className='App-header'>
    <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Имя</h4> 
      <input {...register("firstName", { required: true, maxLength: 20 })} /> <br></br>
      <h4>Фамилия</h4> 
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} /> <br></br>
      <h4>Возраст</h4> 
      <input type="number" {...register("age", { min: 18, max: 99 })} /> <br></br>
      
      <input type="submit" />
    </form>
    </div>
  );
}