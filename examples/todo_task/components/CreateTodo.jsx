import React,{Component} from 'react';

export default class CreateTodo extends Component {
  constructor(){
    super();
    this.state = {
      error:null
    }
  }

  renderError(){
    if (!this.state.error) {
      return null;
    }
    return <div style={{color: 'red'}}>{this.state.error}</div>
  }
  render() {
    return(
      <form onSubmit={this.handleCreate.bind(this)}>
        <input
          type="text"
          placeholder="What I need to Do?"
          ref="createInput"
        />
        <button>Create</button>
        {this.renderError()}
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({error: validateInput});
      return;
    }

    this.setState({error: null});
    this.props.createTask(task);
    this.refs.createInput.value = '';
    this.refs.createInput.focus();
  }

  validateInput(task){
    if(!task){
      return 'Please enter a Task';
    } else if(_.find(this.props.todos, todo => todo.task === task)){
      return 'Task already Exits';
    }else {
      return null;
    }
  }
}
