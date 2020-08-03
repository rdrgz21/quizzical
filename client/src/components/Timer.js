import React, {Component} from 'react'

class Timer extends Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    
    render() {
        const {count} = this.state
        
        const startTimer = () => {
                this.myInterval = setInterval(() => {
                    this.setState(prevState => ({
                        count: prevState.count + 1
                    }))
                    console.log(this.state.count)
                }, 1000)
        }

        const  stopTimer = () => {
                clearInterval(this.myInterval)
        }

        return (
            <React.Fragment>
                <p>Demo Timer: {count} </p> 

                <button onClick={startTimer}>To start</button>
                <button onClick={stopTimer}>To stop</button>
            </React.Fragment>
        )
    }

    componentDidMount() { 
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }))
            console.log(this.state.count)
        }, 1000)
    }
    

}

export default Timer;
