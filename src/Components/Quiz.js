import React, { useState } from 'react';
import Q from '../Questions/Level_1/introQuestion.json'

// https://github.com/MostlyFocusedMike/dynamic-form-article/blob/master/src/Form.js
function Quiz(props) {
    const [questionNr, setQuestionNr] = useState(Q.length)

    const qArr = Q.map(item => item)
    console.log(qArr);


    return (
        <div>
            <h1>Welcome {props.username}</h1>
            <form>
                {qArr.map(q => {

                    return (
                        <label>
                            {q.q}
                            <select >
                           {q.alternative.map(alt =>  {

                               return(
                                <option value={alt}>{alt}</option>
                               )
                           })}
                            </select>
                        </label>
                    )
                })}
            </form>
        </div>
    )

}


export default Quiz;