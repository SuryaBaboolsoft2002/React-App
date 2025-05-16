function Welcome(props){

    return(
        <div>
            <h2>Welcome, {props.name}!</h2>
            <p>Your Role - {props.role}</p>
        </div>
    );
}

export default Welcome;