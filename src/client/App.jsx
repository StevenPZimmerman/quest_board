import React from "react"

const App = () => {
    const [message, setMessage] = React.useState("");

    React.useEffect(() => {
        if (message) {
            fetch("/api/test")
            .then((res) => res.join())
            .then(({msg}) => setMessage(msg));
        }
    })
    return (
        <main>
            <div>
                <h1>hello world</h1>
            </div>
        </main>
    )
}

export default App