import "./SignUpFormStyle.css"

function SignUpForm (){
    return(
        <div className="form-container">
            <h1>Sign Up!</h1>
            <form>
                <input placeholder="Username"/>
                <input placeholder="Email"/>
                <input placeholder="Password"/>
                <input placeholder="ConfirmPassword"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm;