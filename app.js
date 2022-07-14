function WelcomeFunc ({name, children}) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>{children}</p>
    </div>
}

class Welcome extends React.Component {

    render () {
        return <div>
            <h1>Bonjour {this.props.name}</h1>
            <p>{this.props.children}</p>
        </div>
    }

}

class Minuteur extends React.Component {

    constructor (props) {
        super(props)
        this.state = {current_time: props.time}
        this.timer = null
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this),1000)
    }

    componentWillUnmount () {
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState((state, props) => ({current_time: state.current_time - props.step}))
    }

    render () {
        if(this.state.current_time <= 0){
            window.clearInterval(this.timer)
            return <div><h1>Temps écoulé</h1></div>
        }else{
            return <div>
            <h1>{this.state.current_time}</h1>
            </div>
        }
    }
}

Minuteur.defaultProps = {
    time : 10,
    step : 1
}


ReactDOM.render(<Minuteur time={100}/>, document.querySelector('#app'))