import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { getMovieReviews } from '../../Api/Api';
import Notification from '../Notification';

export default function Reviews({ movieId }) {
  const [review, setReview] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const fetchMovieReview = async () => {
      try {
        setShowLoader(true);
        const movieCredits = await getMovieReviews(movieId);
        setReview(movieCredits);
      } catch (error) {
        toast.error(error.message, { theme: 'colored' });
      } finally {
        setShowLoader(false);
      }
    };

    fetchMovieReview();
  }, [movieId]);

  return (
    <div>
      {showLoader && (
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      )}
      {review ? (
        <ul>
          {review.map(item => {
            return (
              <li key={item.id}>
                <h3>{item.author}</h3>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <Notification />
      )}
    </div>
  );
}

Reviews.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};