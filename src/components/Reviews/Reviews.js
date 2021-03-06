import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useReviews(6);
    return (
        <div className='reviews-cont'>
            <div className='review-container'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review = {review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;