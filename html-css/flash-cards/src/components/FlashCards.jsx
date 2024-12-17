import React, { useState } from "react";
import questions from '../assets/data/questions.json';

export default function FlashCards({ question, answer }) {
    const [answerVisibility, setAnswerVisibility] = useState(false);
    const [buttonContent, setButtonContent] = useState("Show Answer");
    const [idQuestion, setIdQuestion] = useState(0);

    const toogleCard = () => {
        setAnswerVisibility(prev => !prev);
        if(answerVisibility)
            setButtonContent("Show Answer");
        else
            setButtonContent("Show Question");
    }

    const nextQuestion = () => {
        if(idQuestion == questions.length-1)
            setIdQuestion(0)
        else
            setIdQuestion(prevId => prevId + 1);

        if(answerVisibility)
            toogleCard();
    }

    const prevQuestion = () => {
        if(idQuestion == 0)
            setIdQuestion(questions.length-1)
        else
            setIdQuestion(prevId => prevId-1);

        if(answerVisibility)
            toogleCard();
    }

    return (
        <section className="flash-card">
            <h1> Flash Cards </h1>
            { !answerVisibility && (
                <div className="question">
                    {questions[idQuestion].question}
                </div>
            )}
            { answerVisibility && (
                <div className="answer">
                    {questions[idQuestion].answer}
                </div>
            )}
            <div className="flash-card-bar">
                <button onClick={prevQuestion}> ← Previous </button>
                <button onClick={toogleCard}> <strong> {buttonContent} </strong> </button>
                <button onClick={nextQuestion}> Next → </button>
            </div>
        </section>
    )
}