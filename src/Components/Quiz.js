import React, { useState } from 'react';
import Q from '../Questions/Level_1/introQuestion.json'

// https://github.com/MostlyFocusedMike/dynamic-form-article/blob/master/src/Form.js
function Quiz(props) {
    const [questionNr, setQuestionNr] = useState(Q.length)
    const [curretnQ, setCurrentQ] = useState(0)
    const [answers, setAnswer] = useState([])
    const [error, setError] = useState(false)

    const qArr = Q.map(item => item)

    const onNext = (e) => {
        const findAnsweer = answers.filter(item => item.id === e.qId)[0]
        if (findAnsweer === undefined) {
            setError(true)
            return
        }
        setError(false)
        setCurrentQ(curretnQ + 1)
    }

    const onChange = (e) => {
        console.log(e);
        const oldState = answers
        setAnswer([...oldState, e])
    }
    const onSubmit = (e) => {
        e.preventDefault()
    }


    return (
        <div>
            <h1>Welcome {props.username}</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                {error ? <h3>You forgot to answer a question</h3> : ""}
                {
                    curretnQ === questionNr ?
                        <>
                            {
                                answers.map(item => {
                                    const q = qArr.filter(qItem => qItem.id === item.id)[0]
                                    return (
                                        <div>
                                            <p>{q.q}</p>
                                            <p>Your answer : {item.answer}</p>
                                            <p>Right answer : {item.right}</p>
                                        </div>
                                    )
                                })
                            }
                        </>
                        :
                        <>
                            <label>
                                {qArr[curretnQ].q}
                                <select onChange={(e) => onChange({ id: qArr[curretnQ].id, answer: e.target.value, right: qArr[curretnQ].answer, score: e.target.value === qArr[curretnQ].answer ? 1 : 0 })}  >
                                    <option>Select option</option>
                                    {qArr[curretnQ].alternative.map(alt => {
                                        return (
                                            <>
                                                <option defaultValue={alt} value={alt}>{alt}</option>
                                            </>
                                        )
                                    })}
                                </select>
                            </label>
                            <button onClick={() => onNext({ qId: qArr[curretnQ].id })}>{curretnQ === questionNr - 1 ? "Submit" : "Next"}</button>
                        </>

                }
                {/* {qArr.map(q => {
                    return (
                        <label>
                            {q.q}
                            <select >
                                {q.alternative.map(alt => {
                                    return (
                                        <option value={alt}>{alt}</option>
                                    )
                                })}
                            </select>
                        </label>
                    )
                })} */}
            </form>
        </div>
    )
}
export default Quiz;


