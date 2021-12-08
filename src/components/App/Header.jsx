import { Link } from 'react-router-dom';

function Header() {
   return (
      <header>
         <h1 Link to = "https://youtu.be/k2rDbRUDkds">Books w/ Redux!</h1>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/newbook">Add Book</Link></li>
         </ul>
      </header>
      
   );
}

export default Header;