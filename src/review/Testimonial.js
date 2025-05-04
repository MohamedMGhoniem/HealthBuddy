export default function Testimonial({ quote, name, stars }) {
    const displayStars = Math.min(stars, 5); 
    return (
        <div className="testimonial">
            <p className="quote">"{quote}"</p>
            <div className="down">
                <div className="user-info">
                    <div className="avatar"></div>
                    <span className="name">{name}</span>
                </div>
                <div className="rating">
                    {[...Array(displayStars)].map((_, i) => (
                        <span key={i} className="star">★</span>
                    ))}
                </div>
            </div>
        </div>
    );
}