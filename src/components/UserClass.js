import React from "react";
class UserClass extends React.Component{

    constructor(props) {
        super(props);
        console.log("Child Constructor Called");
        this.state = {
            count: 0,
            name: "",
            SearchText: []
        }
    }

    componentDidMount() {
        console.log("Child componentDidMount called");
    }

    render(){
        const {count} = this.state;
        console.log("Child Render Called");
        return (
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}>
                    Increase Count
                </button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Bangalore</h3>
                <h4>Contacts: @SwagatWebDev</h4>
            </div>
        )
    }
}

export default UserClass;
