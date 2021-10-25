import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <h1>Web Practice</h1>
            <div className="links">
                <Link to="/home" style={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '8px'
                }}>Home</Link>
                <Link to="/created-list" style={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '8px'
                }}>Created List</Link>
                <Link to="/contact" style={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '8px'
                }}>Contact</Link>
                <Link to="/sign-out" style={{
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '8px'
                }}
                >Sign Out</Link>
            </div>
        </footer>
    );
}

export default Footer;