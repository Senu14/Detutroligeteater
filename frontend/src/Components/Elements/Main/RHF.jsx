import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const RHF = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="username">Username:</label>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} type="text" />}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => <input {...field} type="password" />}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RHF;
