import React from "react";
import "./Form.css";

class Form extends React.Component {
  state = {
    text: "",
    day: "",
  };

  onChangeHandle = (event) => {
    if (event.target.name === "task") {
      this.setState({
        text: event.target.value,
      });
    } else if (event.target.name === "date") {
      this.setState({
        day: event.target.value,
      });
    }
  };

  formhandleChange = (event) => {
    event.preventDefault();
    event.target.reset();
    this.setState({ text: "", day: "" });
    const { text, day } = this.state;
    this.props.AddTask({ text, day });
  };

  render() {
    const { text, day } = this.state;
    return (
      <div className="Form">
        <form onSubmit={this.formhandleChange}>
          <label>Task Name</label>
          <input
            name="task"
            type="text"
            placeholder="Type your task name"
            value={text}
            onChange={this.onChangeHandle}
          />
          <label>Task Date</label>
          <input
            name="date"
            type="text"
            placeholder="05 Jan"
            value={day}
            onChange={this.onChangeHandle}
          />
          <button type="submit" value="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
