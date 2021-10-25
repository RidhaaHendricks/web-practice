import { useState } from "react";
import { Link, useHistory } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const abortCont = new AbortController();

        // fetch("http://localhost:8000/info-creds/", { signal: abortCont.signal }, {
        //     method: 'GET',
        //     headers: { "Content-Type": "application/json" }
        //     // body: JSON.stringify(creds)
        // })
        //     .then(res => {
        //         if (!res.ok) { // error coming back from server
        //             throw Error('could not fetch the data for that resource');
        //         }
        //         return res.json();
        //     })
        //     .then(creds => {
        //         if (username === creds[0].username && password === creds[0].password) {
        //             history.push("/home");
        //             setPending(false);
        //         } else if (username === creds[1].username && password === creds[1].password) {
        //             history.push("/home");
        //             setPending(false);
        //         } else if (username === creds[2].username && password === creds[2].password) {
        //             history.push("/home");
        //             setPending(false);
        //         } else if (username === creds[3].username && password === creds[3].password) {
        //             history.push("/home");
        //             setPending(false);
        //         } else {
        //             setPending(true);
        //             setError(true);
        //             console.log("Login does not exist!!");
        //         }

        //         setTimeout(() => {
        //             setPending(false);
        //             setError(false);
        //         }, 1500)
        //     }) // ******** JSON DATA ********

        fetch("http://localhost:4000/api/Users?name=" + username + "&password=" + password, { signal: abortCont.signal }, {
            method: "GET"
            // headers: { "Content-Type": "application/json", "Accept": "application/json" }
        }).then(res => {
            if (!res.ok) {
                // error coming back from server
                throw Error('could not fetch the data for that resource');
            }
            return res.json();
        }).then(json => {
            console.log(json);
            history.push("/home");
            setPending(false);
        })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted')
                    setPending(true);
                    setError(true); 
                }
            });

        // return the abort
        return () => abortCont.abort();
    }

    return (
        <div className="login-details">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" autoFocus required value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password: </label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link to="/signup">
                    <p>Sign-up</p>
                    <br />
                </Link>
                {!pending && <button>Login</button>}
                {pending && <button disabled>Logging in....</button>}
                {error && <div>Inccorrect Credentials...</div>}
            </form>
        </div>
    );
}

export default Login;