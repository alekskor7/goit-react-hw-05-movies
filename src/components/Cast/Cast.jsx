import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../../Api/Api';
import error from '../../images/default.png';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        setShowLoader(true);
        const movieCredits = await getMovieCredits(movieId);
        setCast(movieCredits);
      } catch (error) {
        toast.error(error.message, { theme: 'colored' });
      } finally {
        setShowLoader(false);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      {showLoader && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      {cast && (
        <ul>
          {cast
            .map(item => {
              if (item.known_for_department === 'Acting') {
                return (
                  <li
                    key={item.id}
                    style={{ display: 'flex', marginBottom: '20px' }}
                  >
                    <div style={{ width: '150px' }}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300${item.profile_path}`}
                        alt={item.title}
                        onError={e => {
                          e.target.onerror = null;
                          e.target.src = error;
                        }}
                      />
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                      <h3>{item.name}</h3>
                      <p>
                        Character:{' '}
                        <span>
                          {item.character !== ''
                            ? item.character
                            : 'No information'}
                        </span>
                      </p>
                    </div>
                  </li>
                );
              }

              return null;
            })
            .slice(0, 12)}
        </ul>
      )}
    </div>
  );
}

Cast.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    profile_path: PropTypes.string,
    character: PropTypes.string,
  }).isRequired,
};

