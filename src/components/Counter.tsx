import React from 'react'
import ErrorMessage from './Error';

interface CounterState {
    value: number;
    error: boolean;
}

export class Counter extends React.Component<{},CounterState> {
    constructor() {
        super();
        this.state = {
            value: 0,
            error: false,
        };
    }
    render(): JSX.Element {
        const { value } = this.state;
        return (
            <div>
                <h1>Beer Drank: {value}</h1>
                {this.handleDisplayError()}
                <hr/>
                <div className="basic-padding">
                    <label>Increase: </label>
                    <button onClick={() => this.handleIncrease(1)}>+</button>
                </div>
                <br/>
                <div className="basic-padding">
                    <label>Decrease: </label>
                    <button onClick={() => this.handleDecrease()}>-</button>
                </div>
            </div>
        );
    }

    handleIncrease(num: number){
        // Increase Counter Function On Click
        const { value } = this.state;
        this.setState({ 
            value: value + 1,
            error: false,
        });
    };

    handleDecrease(){
        // Decrease Counter Function On Click
        const { value } = this.state;
        if(value === 0){
            // If Counter Is 0, Set False to display a message to user
            this.setState({ error: true })
            return null;
        };
        
        this.setState({ 
            value: value - 1,
            error: false,
        })
    };

    handleDisplayError(){
        // If try do decrease counter below 0, error is displayed to user
        const { error } = this.state;
        if(error){
            return <ErrorMessage />
        };
        
        return null;
    }
};
