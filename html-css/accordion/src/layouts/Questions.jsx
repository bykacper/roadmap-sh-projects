import React from "react";
import Accordion from "../components/Accordion";
import accordionData from '../assets/data/questions.json';

export default function Questions() {
    return (
        <>
            <h1> Frequently asked questions </h1>
            {accordionData && accordionData.map(item => {
                return <Accordion key={item.key} question={item.question} answer={item.answer} />
            })}
        </>
    );
}
