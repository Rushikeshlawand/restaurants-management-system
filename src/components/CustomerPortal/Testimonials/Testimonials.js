import React from 'react';
import './Testimonials.css';

const testimonials = [
    { id: 1, name: 'John Doe', rating: 5, message: 'Great experience!', favoriteDish: 'Pasta', emoji: '😊' },
    { id: 2, name: 'Jane Smith', rating: 4, message: 'Loved the service!', favoriteDish: 'Burger', emoji: '😁' },
    { id: 3, name: 'Alice Johnson', rating: 5, message: 'Will definitely come again.', favoriteDish: 'Pizza', emoji: '😍' },
    { id: 4, name: 'Bob Brown', rating: 3, message: 'It was okay.', favoriteDish: 'Salad', emoji: '😐' }
];

const TestimonialsPage = () => {
    return (
        <div className="testimonials-page">
            <h1>Customer Testimonials</h1>
            <div className="testimonials-container">
                {testimonials.map(testimonial => (
                    <div
                        key={testimonial.id}
                        className={`testimonial-card tilt-${testimonial.id % 2 === 0 ? 'left' : 'right'}`}
                    >
                        <div className="left-side">{testimonial.emoji}</div>
                        <div className="right-side">{testimonial.emoji}</div>
                        <h3>{testimonial.name}</h3>
                        <div className="rating">{'⭐'.repeat(testimonial.rating)}</div>
                        <p>{testimonial.message}</p>
                        <p><strong>Favorite Dish:</strong> {testimonial.favoriteDish}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsPage;
