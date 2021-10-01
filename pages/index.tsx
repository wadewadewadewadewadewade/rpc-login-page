import styles from '../styles/Home.module.scss';
import { useForm, Controller } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
};

export default function Home() {
  const { handleSubmit, control, formState } = useForm<FormData>({ mode: 'onChange' });
  const onSubmit = handleSubmit(data => console.log(data));
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
              pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
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
          <button disabled={!formState.isValid} type="submit">Sign In</button>
        </form>
        <a href="/create-account" className={styles.createAccount}>
          Don't have an account? Create one now!
        </a>
      </div>
    </div>
  );
}
