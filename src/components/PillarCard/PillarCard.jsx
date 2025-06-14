import "./PillarCard.css";

export default function PillarCard({ image, statIcon, statText, statUnits, title, description }) {
    return (
        <div className="pillar-card">
            <img src={image} className="pillar-img" />
            <div className="stats">
                <img src={statIcon} className="stat-icon" />
                <p> {statText} <span className="units"> {statUnits}</span></p>
            </div>
            <div className="data">
                <h2 className="title">{title}</h2>
                <p className="text">{description}</p>
            </div>
        </div>
    );
}
