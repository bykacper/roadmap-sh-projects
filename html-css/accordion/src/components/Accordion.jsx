import React, { useRef } from "react";

export default function Accordion({ question, answer }) {
    const answerRef = useRef(0);

    const toogleAnswer = (question) => {
        document.querySelectorAll('.answer').forEach(question => {
            question.classList.add('hidden');
        });

        if(answerRef.current.classList.contains('hidden')) 
            answerRef.current.classList.remove('hidden');
        else 
            answerRef.current.classList.add('hidden');
    }

    return (
        <section className="accordion">
            <div className="question" onClick={e => toogleAnswer(e)}>
                <p> {question} </p>
            </div>
            <div className="answer hidden" ref={answerRef}>
                <p> {answer} </p>
            </div>
        </section>
    )
}