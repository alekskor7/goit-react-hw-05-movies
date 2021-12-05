import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul style={{ marginTop: '20px' }}>
      {movies.map(movie => (
        <li key={movie.id} style={{ marginBottom: '5px' }}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

