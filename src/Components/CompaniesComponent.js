import React, {Component} from 'react';

export default class CompaniesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/companies')
            .then(res => res.json())
            .then(json => {
                this.setState({items: json});
                console.log(this.state.items);
            })
            .catch(error => console.log('Failed: ', error))
    }

    render() {
        return (
            <div className="App">
                <ul>
                    {this.state.items.map((item) => <li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        );
    }
}