import { useHistory } from "react-router-dom";
import { useState } from "react";

const Signup = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [pending, setPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const creds = { username, password };
        setPending(true);

        fetch("http://localhost:8000/info-creds/", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(creds)
        }).then(() => {
            history.push('/');
            setPending(false);
            console.log('New User Added');
        })

    }

    return (
        <div className="sign-up">
            <h2>Sign-up</h2>
            <form onSubmit={handleSubmit}>
                <label>Username: </label>
                <input type="text" autoFocus required value={username} onChange={(e) => setUsername(e.target.value)} />
                <label>Password: </label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                {!pending && <button>Sign-Up</button>}
                {pending && <button disabled>Adding....</button>}

            </form>
        </div>
    );
}

export default Signup;