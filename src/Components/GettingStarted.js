import React, { useState } from 'react';

function Welcome(props) {

    return (
        <div className="App">
            <h1>welcome</h1>
            <button onClick={() => props.setPage(props.page + 1)}>Next</button>

        </div>
    );
}


function Ready(props) {

    return (
        <div>
            <h1>Start Quiz</h1>
            <button onClick={() => props.start(true)}>Start</button>

        </div>
    )
}
function UserInfo(props) {
    return (
        <>
            <label>
                Name:
        <input value={props.username} onChange={(e) => props.setUsername(e.target.value)} />

            </label>
            <label>
                Current Level:
            <select value={props.currentLevel} onChange={(e) => props.setLevel(e.target.value)}>
                    {/* <option value="" defaultChecked disabled hidden>Select Here</option> */}

                    <option value="Beginner">Beginner</option>
                    <option value="Average">Average</option>
                    <option value="Advance">Advance</option>
                </select>
            </label>
            <button onClick={() => props.setPage(props.page + 1)}>Next</button>
            <button onClick={() => props.setPage(props.page - 1)}>Prev</button>
        </>
    );
}

function StartQuiz(props) {
    const [page, setPage] = useState(1)
    const [username, setUsername] = useState("")
    const [currentLevel, setLevel] = useState("Beginner")
    const [startQuiz, setStart] = useState(false)



    const onsubmit = (e) => {
        console.log(e);
        e.preventDefault()
        props.setProfile({ username, currentLevel })

        // send user profile

    }
    return (
        <div className="App">
            <form onSubmit={(e) => onsubmit(e)}>
                {page === 1 ? <Welcome page={page} setPage={setPage} /> : page === 2 ?
                    <UserInfo
                        username={username} setUsername={setUsername}
                        page={page} setPage={setPage}
                        currentLevel={currentLevel} setLevel={setLevel}
                    />
                    : page === 3 ? <Ready start={setStart} /> : ""}
            </form>

        </div>
    );
}


export default StartQuiz;