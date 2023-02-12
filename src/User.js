import { Component } from "react";

//User component
class User extends Component{
    render(){
    //Destructure the props
    const { name, age} = this.props;
    return (
        <div className="User">
            { /* Use the props to display values */ }
            <div> Name: { name } </div>
            <div> Age: { age } </div>
            <div> Job: Software Engineer </div>
        </div>
    );
  }
}
export default User;