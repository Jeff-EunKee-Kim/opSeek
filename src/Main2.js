import React, { Component } from 'react';


class Main2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            location: '',
            comps: []
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeLoc = this.handleChangeLoc.bind(this);
    }


    componentDidUpdate(prevProps, prevState ){
            console.log('updated');
            if(prevState.name!= this.state.name || prevState.location != this.state.location) {
                let self = this;
                fetch('http://localhost:4001/getcompanyfilter/' + this.state.name + '/' +  this.state.location, {
                    method: 'GET'
                }).then(function (response) {
                    return response.json();
                }).then(function (data) {
                    self.setState({comps: data});
                }).catch(err => {
                    console.log('catching error', err);
                })
            }

    }

    handleChangeName(event) {
        this.setState({name: event.target.value});

    }

    handleChangeLoc(event) {
        this.setState({location: event.target.value});

    }

    renderComp = ({cid, name, hq_location, link}) => <div key={cid}>{name} {hq_location} {link}</div>

    render() {
        const {comps} = this.state;
        return (
            <div className="Main2">
                <form>
                    <p className="uandp">Company:</p>
                    <input type="text" value= {this.state.name} onChange = {this.handleChangeName} className="input-bar"/>
                    <p className="uandp">Location:</p>
                    <input type="text" name={this.state.location} onChange = {this.handleChangeLoc} className="input-bar"/>


                </form>

                <p>Companies</p>
                {comps.map(this.renderComp)}
            </div>
        )
    }


}

export default Main2;
