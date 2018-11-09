import React, {Component} from 'react';

export default class ClientReportsByMonthComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/reportsByMonth')
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
                {this.state.items.map((item) => <div key={item.id}>{item.dateEntered}</div>)}
            </div>
        );
    }
}