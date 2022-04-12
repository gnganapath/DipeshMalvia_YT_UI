import React from 'react';

import { useForm } from 'react-hook-form';

export const ReactHookFormEg = () =>{

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h5> React Hook Form </h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          placeholder="First Name"
          type="text"
          {...register("firstName", { required: true, maxLength: 10 })}
        />

        {errors.firstName && <p>Please check the First Name</p>}

        <label>Last Name</label>
        <input
          placeholder="Last Name"
          type="text"
          {...register("lastName", { required: true, maxLength: 10 })}
        />

        {errors.lastName && <p>Please check the Last Name</p>}

        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />

        {errors.email && <p>Please check the Email</p>}

        <label>Password</label>
        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
          })}
        />

        {errors.password && <p>Please check the Password</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
