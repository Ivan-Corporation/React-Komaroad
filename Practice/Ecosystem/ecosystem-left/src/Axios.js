import React from "react";
import API from "./utils/API";
import User from "./Axios/User";

class Axios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      name: null,
      avatar: null,
      email: null
    };
  }
render() {
    const { isLoading, name, avatar, email } = this.state;
return (
      <User isLoading={isLoading} name={name} avatar={avatar} email={email} />
    );
  }


  async componentDidMount() {
    // Load async data.
    let userData = await API.get('/', {
      params: {
        results: 1,
        inc: 'name,email,picture'
      }
    });
    // Парсим результаты.
    userData = userData.data.results[0];
    // Обновляем стейт и ререндерим наш компонент.
    const name = `${userData.name.first} ${userData.name.last}`;
    const avatar = userData.picture.large;
    const email = userData.email;
    this.setState({
      ...this.state, ...{
        isLoading: false,
        name,
        avatar,
        email
      }
    });
  }
}
export default Axios;