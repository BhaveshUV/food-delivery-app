import { Component } from "react";

class UserCardClassChild extends Component {
    constructor(props) {
        super(props);
        console.log(`${props.name} constructor`);
    }

    componentDidMount() {
        console.log(`${this.props.name} componentDidMount`);
    }

    render() {
        console.log(`${this.props.name} rendering`);
        return (
            <div>
                {this.props.name} Child Component
            </div>
        )
    }
}

export default UserCardClassChild;