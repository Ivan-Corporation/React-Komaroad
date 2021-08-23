import React, { Component } from 'react';
import request from 'superagent';
import './App.css';
import ajax from 'superagent';


export default class Superagent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { commits: [] };
    }

    render() {
        return (<div>
        {this.state.commits.map((commit, index) => (
            <p key={index}>Здесь выводятся коммиты, но для понятия они скрыты) (не потому-что я тупой!!)</p>
        ))}
        </div>);
    }

    componentWillMount() {
        ajax.get('https://api.github.com/repos/Ivan-Corporation/React-Komaroad/commits')
            .end((error, response) => {
                if (!error && response) {
                    this.setState({ commits: response.body });
                } else {
                    console.log('There was an error fetching from GitHub', error);
                }
            }
        );
    }
}


