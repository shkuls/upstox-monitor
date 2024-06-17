import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
export default function App({ Component, pageProps }) {
  return (
    <div className='w-[400px] h-[400px]'>
    <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
