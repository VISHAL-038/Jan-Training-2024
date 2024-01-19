
import React, { Component } from 'react';

class Props2 extends Component {
    render() {
        const { person } = this.props;

        return (
            <div>
                <p>Name: {person.name}</p>
                <p>Age: {person.age}</p>
            </div>
        );
    }
}

export default Props2;
