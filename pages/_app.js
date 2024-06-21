import Footer from '../components/Footer';
import '../styles/globals.css';
export default function App({ Component, pageProps }) {
  return (
    <div className='w-[400px] contain-content scrollable'>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
