import React from "react";
import PropTypes from "prop-types";




class User extends React.Component {
  render() {
    const { name, avatar, email, isLoading } = this.props;
const userDetails = (
      <div className='App-header'>
        <img
          
          src={avatar}
          alt={name}
          style={{ width: "100px", height: "100px" }}
        />
        <h4 >{name}</h4>
        <span >{email}</span>
      </div>
    );
    const loadingMessage = <span className='App-header' >Loading...</span>;
    return (
      <div 
      className='App-header'
     
        >
        {isLoading ? loadingMessage : userDetails}
        </div>
        );
    }
}
User.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  email: PropTypes.string,
  isLoading: PropTypes.bool
};
export default User;