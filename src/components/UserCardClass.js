import React from "react";
import UserCardClassChild from "./UserCardClassChild";

class UserCardClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            user: {
                name: "Dummy-name",
                location: "Dummy-location",
                login: "Dummy-username"
            }
        };
        console.log("Parent constructor");
    }

    async componentDidMount() {
        // this.timer = setInterval(() => {
        //     console.log(`Timer`);
        // }, 1000);
        console.log(`Parent componentDidMount`);

        // API call
        const data = await fetch("https://api.github.com/users/BhaveshUV");
        const json = await data.json();
        this.setState({
            user: json,
        });
    }

    componentDidUpdate() {
        console.log(`Parent componentDidUpdate`);
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
        console.log(`Parent componentWillUnmount`);
    }

    render() {
        console.log(`Parent Rendering`);
        return (
            <div className="flex flex-col items-center my-4 mx-auto w-72 ring ring-white rounded-lg bg-yellow-500 p-4">
                <h2 className="text-xl mb-4">Class-component</h2>
                <img src={this.state.user.avatar_url} alt="" style={{ width: "70%" }}></img>
                <div>UserId: {this.state.user.login}</div>
                <div>Name: {this.state.user.name}</div>
                <div>Location: {this.state.user.location}</div>
                <div>Contact: {this.props.contact}</div>
                <div className="text-black">State-variable: {this.state.count}</div>
                <button className="bg-green-800 p-1 rounded-md" onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>Increment state-variable</button>

                <UserCardClassChild name="First" />
                <UserCardClassChild name="Second" />
            </div>
        )
    }
}

export default UserCardClass;