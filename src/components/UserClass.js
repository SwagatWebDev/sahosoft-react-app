import React from "react";
class UserClass extends React.Component{

    constructor(props) {
        super(props);
        console.log("Child Constructor Called");
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default"
            },
        }
    }

     async componentDidMount() {
        console.log("Child componentDidMount called");
        const data = await fetch("https://api.github.com/users/SwagatWebDev");
        const response = await data.json();
        console.log(response);
        debugger;
        this.setState({
            userInfo: response
        })
        //  this.timer  = setInterval(() => {
        //      console.log("setInterval function called");
        //  }, 1000);
    }

    componentDidUpdate(prevProps, prevState) {
        /**
         * if(this.state.count1 !== prevState.count1){
            // Logic to update and rerender
        }
        if(this.state.count2 !== prevState.count2){
            // Logic to update and rerender
        }
         */
        console.log("Component Did updated");
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log("Component will unmount");
    }

    render(){
        console.log("Child Render Called");
        const {name, location} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contacts: @SwagatWebDev</h4>
            </div>
        )
    }
}

export default UserClass;
