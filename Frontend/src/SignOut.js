import { useHistory } from 'react-router-dom';

const SignOut = () => {

    const MoveTo = () => {
        const history = useHistory();

        history.push("/");
    }


    return (
        <div className="sign-out">
            <div>
                MoveTo();
                <Login />
            </div>

        </div>
    );
}

export default SignOut;