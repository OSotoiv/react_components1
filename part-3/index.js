const App = () => {
    return (
        <div>
            <Person username="Del" age={18} hobbies={['Running', 'Gardening', 'Reading']} />
            <Person username="Tavian" age={17} hobbies={['Guitar', 'Gardening', 'Coding']} />
            <Person username="Mons" age={35} hobbies={['School', 'Chess', 'Video Games']} />
            <Person username="Chi" age={8} hobbies={['Art', 'Animals', 'Movies']} />
            <Person username="JP" age={12} hobbies={['Stock Market', 'Basketball', 'Manga']} />
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))