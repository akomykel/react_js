import React, { Component } from 'react';
import CompaniesComponent from './Components/CompaniesComponent'
import ClientReportsByMonthComponent from './Components/ClientReportsByMonthComponent'

class App extends Component {

    render() {
        const host = "http://localhost:3000/";
        const companies = "companies";
        const client_monthly_reports = "reportsByMonth";
        const requestMapping = window.location.href;

        function renderComponent(requestMapping) {
            switch (requestMapping) {
                case host + companies:
                    return <CompaniesComponent/>
                case host + client_monthly_reports:
                    return <ClientReportsByMonthComponent/>
                default:
                    return "No component rendered";
            }
        }

        return(
            <div>{renderComponent(requestMapping)}</div>
        )
    }
}

export default App;
