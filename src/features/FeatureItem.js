
export default function FeatureItem({ icon, text }) {
    return (
        <div className="feature-item">
            <svg className="icon">
                <use href={`./svg.svg#icon-${icon}`}></use>
            </svg>
            <span className="text">{text}</span>
        </div>
    );
}