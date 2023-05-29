import '@/styles/globals.css';
import "../styles/navbar.css"; // Import the CSS file
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
