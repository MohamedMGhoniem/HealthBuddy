import { useState } from 'react';
import Testimonial from './Testimonial';
import CommentsForm from './CommentsForm';

//I remember that🤺
const testimonialsArr = [
  {
    quote:
      'I love the AI mascot so much. A little health coach, my wellness companion. Cheering me on and keeping me strong 24/7!',
    name: 'Ayla L.',
    stars: 5,
  },
  {
    quote:
      'I’ve tried meal planners before, but this one actually feels like it gets me. I love how it adapts to my goals without being strict.',
    name: 'Jordan M.',
    stars: 5,
  },
  {
    quote:
      'I never thought I’d say this, but I’m actually motivated to eat healthy now. It’s been a game-changer for me.',
    name: 'Ahmed Z.',
    stars: 5,
  },
  {
    quote:
      'I never thought I’d say this, but I’m actually motivated to eat healthy now. It’s been a game-changer for me.',
    name: 'Ahmed Z.',
    stars: 5,
  },
];
export default function TestimonialCarousel() {
  const [openForm, setOpenForm] = useState(false);
  const [testimonials, setTestimonials] = useState(testimonialsArr);

  function handleAddComment() {
    setOpenForm(true);
  }

  function handleCloseForm() {
    setOpenForm(false);
  }

  return (
    <div
      className="carousel-container"
      style={{ '--num-items': testimonials.length }}
    >
      <div className="testimonials">
        {testimonials.slice(-4).map((testimonial, index) => (
          <Testimonial
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            stars={testimonial.stars}
          />
        ))}
      </div>
      {openForm ? (
        <CommentsForm
          comments={testimonials}
          setComments={setTestimonials}
          onCloseForm={handleCloseForm}
        />
      ) : (
        <button className="btn-add-comment" onClick={handleAddComment}>
          + <span className="txt">add new comment</span>
        </button>
      )}
    </div>
  );
}
