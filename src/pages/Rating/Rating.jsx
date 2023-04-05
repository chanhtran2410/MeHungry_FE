import React, { useState } from 'react'
import './Rating.css'
import { Link } from 'react-router-dom';
import {
  RiArrowGoBackFill,
  RiShoppingCart2Line,
} from 'react-icons/ri'
import { Space, Tag } from 'antd';


const { CheckableTag } = Tag;
const tagsData = ['Services', 'Quantity', 'Payment', 'Delivery', 'Promotion', 'Gift'];


const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-top'>
        <Link to='/home'>
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
  /*=====Review======*/
  const handleReviewChange = e => {
    setReview(e.target.value);
  }
  /*=====Rating=====*/
  const handleRatingChange = value => {
    setRating(value);
  }
  /*=====Tags=====*/
  const [selectedTags, setSelectedTags] = useState(['Books']);
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className='rating'>
      <Navbar />
      <div className='review-container'>
        <div className='rating-tag'>
          <h2>How do you feel about the service?</h2>
          <Space size={[0, 8]} wrap>
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedTags.includes(tag)}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </Space>
        </div>
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
