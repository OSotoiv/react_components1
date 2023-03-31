const App = () => {
    return (
        <div>
            <Tweet username='User1' tweet='keep typing!' />
            <Tweet username='User2' tweet='User 4 here with a tweet!' />
            <Tweet username='User3' tweet='Like and subscribe!' />
            <Tweet username='User4' tweet='Tweet Tweet Tweet!' />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))