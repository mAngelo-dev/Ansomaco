import Navbar from './navbar.jsx';
import PropTypes from "prop-types";
import Footer from "./footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="d-flex">
      <Navbar />
      <main className="flex-grow-1" style={{ marginLeft: '4.5rem', padding: '1rem' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node
};