import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    if(window.history.length > 1) { 
      navigate(-1);
    } else {
      navigate('/');
    }
  }
  return (
    <footer>
      <div>
        {location.pathname !== '/' && (
          <button
            onClick={handleGoBack}
          >
            &larr; Go Back
          </button>
        )}
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by Bloggy McBloggerson
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
