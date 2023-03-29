import React, { useState } from 'react'
import './Rating.css'
import { Link } from 'react-router-dom';
import {
  RiArrowGoBackFill,
  RiShoppingCart2Line,
} from 'react-icons/ri'

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-top'>
        <Link to='/checkout'>
          <RiArrowGoBackFill />
        </Link>
        <h5>Rating</h5>
        <RiShoppingCart2Line style={{ visibility: 'hidden' }} />
      </div>
    </div>
  );
};

const Rating = () => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const handleReviewChange = e => {
    setReview(e.target.value);
  }

  const handleRatingChange = value => {
    setRating(value);
  }

  return (
    <div className='rating'>
      <Navbar />
      <div className='review-container'>
        <div className='rating-scale'>
            <h3>Rating</h3>
            <div className='rating-star'>
                {[1,2,3,4,5].map(num => (
                    <span
                    key={num}
                    onClick={() => handleRatingChange(num)}
                    className={`star ${num <= rating ? 'filled' : ''}`}
                    >
                    &#9733;
                    </span>
                ))}
            </div>
        </div>
        <div className='review'>
            <h3>Leave a Review</h3>
            <textarea
            rows='4'
            placeholder='Write your review here...'
            value={review}
            onChange={handleReviewChange}
            />
        </div>
        <button className='rating-btn'>SUBMIT</button>
      </div>
    </div>
  )
}

export default Rating
