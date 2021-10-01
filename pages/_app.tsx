import '../styles/globals.css';
import styles from '../styles/BasePage.module.scss';
import type { AppProps } from 'next/app';
import { Header } from '../components/navigation/Header/Header';
import { Footer } from '../components/navigation/Footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <section className={styles.basePage}>
        <Component {...pageProps} />
      </section>
      <Footer />
    </>
  )
}
export default MyApp
