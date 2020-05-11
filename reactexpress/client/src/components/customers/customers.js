import React, { Component } from 'react';
import './customers.css';


class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount() {
        fetch('/api/customers')
        .then(res => res.json())
        .then(customers => this.setState({customers}, () => console.log('customer fetched', customers)
        ));
    }

    render() {
        return (
            <div>
                <h2>Worlds Best Football Player</h2>
                <ul>
                    {
                        this.state.customers.map(customer =>
    <li key = {customer.id}>{ customer.firstName } { customer.lastname }</li>
                            
                        )}
                </ul>
            </div>
        );
    }
}

export default Customers;