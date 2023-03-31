const Tweet = ({ username, tweet }) => {
    const currentDate = new Date();
    const options = { month: 'numeric', day: 'numeric', year: '2-digit', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDateTime = currentDate.toLocaleString('en-US', options);

    return (
        <div>
            <h3>{tweet}</h3>
            <p><b>@{username}</b></p>
            <span><i> {formattedDateTime} </i></span>
            <hr></hr>
        </div>
    )
}

