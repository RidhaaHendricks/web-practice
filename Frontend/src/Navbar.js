import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Web Practice</h1>
      <div className="links">
        <Link to="/home" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Home</Link>
        <Link to="/created-list" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px'
        }}>Created List</Link>
        <Link to="/contact" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Contact</Link>
        <Link to="/sign-out" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}
        >Sign Out</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;