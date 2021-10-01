import React from 'react';
import styles from '../styles/Home.module.scss';
import { useForm, Controller } from "react-hook-form";
import { LoginResponse } from './api/login';

interface FormData {
  email: string;
  password: string;
};

export default function Home() {
  const { handleSubmit, control, formState, watch } = useForm<FormData>({ mode: 'onChange' });
  const [error, setError] = React.useState<string | undefined>(undefined);
  const { email, password } = watch();
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const response = await fetch(`/api/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
    const responseData: LoginResponse = await response.json();
    if (!responseData.isValid) {
      setError(responseData.message);
    } else if (!!error) {
      setError(undefined);
    }
  });
  return (
    <div className={styles.loginPage}>
      <div className={styles.formContainer}>
        <h2 className={styles.loginHeader}>Welcome back!</h2>
        <form onSubmit={onSubmit}>
          <legend>
            Sign in and get to it.
          </legend>
          <label>Email</label>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
              pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i,
            }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                placeholder="Email Address"
                type="email"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                ref={ref}
              />
            )}
          />
          <label>Password</label>
          <Controller
            control={control}
            name="password"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <input
                placeholder="Password"
                type="password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                ref={ref}
              />
            )}
          />
          <a href="/forgot-password" className={styles.forgotPassword}>
            Forgot your password?
          </a>
          {!!error && (
            <div className={styles.error}>
              <svg viewBox="0 0 24 24">
                <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1.5C6.201 1.5 1.5 6.201 1.5 12S6.201 22.5 12 22.5 22.5 17.799 22.5 12 17.799 1.5 12 1.5zm0 14.25c.58 0 1.057.439 1.118 1.002l.007.123c0 .58-.439 1.057-1.002 1.118L12 18c-.621 0-1.125-.504-1.125-1.125S11.379 15.75 12 15.75zM12 6c.38 0 .693.282.743.648l.007.102v6.75c0 .414-.336.75-.75.75-.38 0-.693-.282-.743-.648l-.007-.102V6.75c0-.414.336-.75.75-.75z" transform="translate(-144 -866) translate(144 183) translate(0 54) translate(0 501) translate(0 37) translate(0 90) translate(0 1)" />
              </svg>
              {' '}
              {error}
            </div>
          )}
          <button disabled={!formState.isValid} type="submit">Sign In</button>
        </form>
        <a href="/create-account" className={styles.createAccount}>
          Don't have an account? Create one now!
        </a>
      </div>
    </div>
  );
}
