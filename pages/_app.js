import Footer from '../components/Footer';
import '../styles/globals.css';
export default function App({ Component, pageProps }) {
  return (
    <div className='w-[400px] h-[400px] overflow-scroll'>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
