import React from "react";

// using a class component instead also will need to render first then return
class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
  };

  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      alert("All the fiels are mandatory");
      return;
    }


    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    this.props.history.push("/");
    // console.log(this.state);
  };
  render() {
    return (
      <div className="ui main">
        <h2> Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="filed">
            <label> Name </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>

          <div className="filed">
            <label> Email </label>
            <input
              type="text"
              name="name"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>

          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
