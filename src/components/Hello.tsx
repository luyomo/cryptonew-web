import React from 'react'

interface HelloWorldProps {
    name: string
}

export class HelloWorld extends React.Component<HelloWorldProps> {

    public render() {
        return (
            <div>
                <h1>Basic Application</h1>
                <h3>Hello  {this.props.name}</h3>
                <hr/>
            </div>
        )
    }
}
