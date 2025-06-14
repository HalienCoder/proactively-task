import {useRef } from "react";
import "./PillarsSection.css";
import PillarCard from "../PillarCard/PillarCard";
import data from "./pillars.json";

export default function PillarsSection() {
    const scrollRef = useRef(null)
    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -350, behavior: 'smooth' })
    }
    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 350, behavior: 'smooth' })
}
    return (
        <section className="full-section pillar-section">
            <h2 className="how">HOW IT WORKS</h2>
            <div className="straight">
                <h2 className="sec2-heading">
                    <span className="lifestyle">Lifestyle as medicine:</span> The six plilars
                </h2>
                <div className="nav-buttons">
                    <button className="left" onClick={scrollLeft}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12L19 12M5 12L11 18M5 12L11 6" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button className="right" onClick={scrollRight}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12L5 12M19 12L13 18M19 12L13 6" stroke="#747474" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </button>
                </div>
            </div>
            <div className="pillar-cards" ref={scrollRef}>
                {data.map(card => (
                    <PillarCard
                        key={card.id}
                        image={card.image}
                        statIcon={card.statIcon}
                        statText={card.statText}
                        statUnits={card.statUnits}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </section>
    )
}
