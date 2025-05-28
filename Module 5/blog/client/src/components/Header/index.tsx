import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Header>
      <div>
        <Link to="/">
          <h1>Baby's First Blog</h1>
        </Link>
        <p>A forum for leaving blog posts!</p>
      </div>
    </header>
  );
};

export default Header;
