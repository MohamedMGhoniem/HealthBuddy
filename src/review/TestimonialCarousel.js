import Testimonial from './Testimonial';

export default function TestimonialCarousel() {
    const testimonials = [
        {
            quote: "I love the AI mascot this much... a little health coach cheering me on 24/7.",
            name: "Ayla L.",
            stars: 5,
        },
        {
            quote: "I’ve tried meal planners before, but this one actually feels like it gets me. I love how it adapts to my goals without being strict.",
            name: "Jordan M.",
            stars: 5,
        },
        {
            quote: "I never thought I’d say this, but I’m actually motivated to eat healthy now. It’s been a game-changer for me.",
            name: "Ahmed Z.",
            stars: 5,
        },
    ];

    return (
        <div className="carousel-container">
            <div className="testimonials">
                {testimonials.map((testimonial, index) => (
                    <Testimonial
                        key={index}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        stars={testimonial.stars}
                    />
                ))}
            </div>
            <button className="btn-add-comment">Add new comment</button>
        </div>
    );
}