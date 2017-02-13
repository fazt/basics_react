import ReactDOM from 'react-dom';
import React from 'react';

var SetIntervalMixin = {
  componentWillMount: function () {
    this.intervals = [];
  },
  setInterval: function () {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function () {
    this.intervals.map(clearInterval);
  }
};

var CartTimeoutMixin = {
  componentWillMount: function () {
    this.setInterval(this.decrementCartTimer, 1000);
  },
  decrementCartTimer(){
    if (this.state.cartTimeout == 0) {
      this.props.alertCartTimeout();
      return;
    }
    this.setState({cartTimeout: this.state.cartTimeout - 1});
  },
};

var BookList = React.createClass({
  getInitialState: function () {
    return ({
        books : [
          { id:1, name: 'Zero to One', author: 'Peter Thiel' },
          { id:2,name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
          { id:3,name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
        ]
      , selectedBooks: []
      , error: false
    })
  },
  _handleSelectedBooks: function (event) {
    var selectedBooks = this.state.selectedBooks;
    var index = selectedBooks.indexOf(event.target.value);
    if (event.target.checked) {
      if (index === -1) {
        selectedBooks.push(event.target.value);
      }
    }else {
      selectedBooks.splice(index,1);
    }
    this.setState({selectedBooks: selectedBooks});
  },
  _renderBook: function(book){
    return(
      <div className="checkbox" key={book.id}>
        <label>
          <input
            type="checkbox"
            value={book.name}
            onChange={this._handleSelectedBooks}
          /> {book.name} -- {book.author}
        </label>
      </div>
    )
  },
  _handleSubmit: function (e) {
    e.preventDefault();
    if (this.state.selectedBooks.length === 0) {
      this.setState({error: 'Please choose at least one book to continue'});
    }else{
      this.setState({error:false});
      this.props.updateFormData({
        selectedBooks: this.state.selectedBooks
      });
    }
  },
  _renderError () {
    if (this.state.error) {
      return(
        <div className="alert alert-danger">
          {this.state.error}
        </div>
      )
    }
  },
  render: function () {
    var errorMessage = this._renderError();
    return(
      <div>
        <h3>CHOOSE FROM WIDE VARIETY OF BOOKS AVAILABLE ON OUR STORE</h3>
        { errorMessage }
        <form onSubmit={this._handleSubmit}>
          {this.state.books.map((book) => {
              return this._renderBook(book);
            })
          }
          <input type="submit" className="btn btn-success"/>
        </form>
      </div>
    );
  }
});
var ShippingAdress = React.createClass({
  getInitialState(){
    return ({
        fullName: ''
      , contactNumber: ''
      , shippingAddress: ''
      , error: false
    });
  },
  _renderError(){
    if (this.state.error) {
      return(
        <div className="alert alert-danger">
          {this.state.error}
        </div>
      )
    }
  },
  _validateInput(){
    if (this.state.fullName === '') {
      this.setState({error: 'Please enter a fullName'})
    }
    else if (this.state.contactNumber === '') {
      this.setState({error: 'Please enter a contact number'})
    }
    else if (this.state.shippingAdress === '') {
      this.setState({error: 'Please enter a shipping address'})
    }else{
      this.setState({error: false});
      return true;
    }
  },
  hanldeSubmit(e){
    e.preventDefault();
    var formData = {
        fullName: this.state.fullName
      , contactNumber: this.state.contactNumber
      , shippingAddress: this.state.shippingAddress
    };
    if (this._validateInput()) {
      this.props.updateFormData(formData);
    }
  },
  handleChange(e, attribute){
    var newState = this.state;
    newState[attribute] = e.target.value;
    this.setState(newState);
  },
  render () {
    var errorMessage = this._renderError();
    return(
      <div>
        <h1>ShippingAdress</h1>
        { errorMessage }
        <div>
          <form onSubmit={this.hanldeSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Full Name"
                value={this.state.fullName}
                onChange={(e) => this.handleChange(e, 'fullName')}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Contact Number"
                value={this.state.contactNumber}
                onChange={(e) => this.handleChange(e, 'contactNumber')}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Shipping Address"
                value={this.state.shippingAddress}
                onChange={(e) => this.handleChange(e, 'shippingAddress')}
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                ref="submit"
                className="btn btn-success"
                >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

var DeliveryDetails = React.createClass({
  mixins: [ SetIntervalMixin ],
  getInitialState(){
    return {
      deliveryOption: 'Primary'
    }
  },
  handleChange(e){
    this.setState({deliveryOption: e.target.value})
  },
  _handleSubmit(e){
    e.preventDefault();
    this.props.updateFormData(this.state);
  },
  render: function () {
    return(
      <div>
      <h1>Choose your deliveryOption</h1>
        <form onSubmit={this._handleSubmit}>
          <div className="radio">
            <label>
              <input
                type="radio"
                checked={this.state.deliveryOption ==='Primary'}
                value="Primary"
                onChange={this.handleChange}
              />
              Primary -- Next Day delivery
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                checked={this.state.deliveryOption ==='Normal'}
                value="Normal"
                onChange={this.handleChange}
              />
              Normal -- 3-4 days
            </label>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
});

var Confirmation = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    this.props.updateFormData(this.props.data);
  },
  render() {
    return (
      <div>
        <h1>Are you sure you want to submit the data?</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <strong>Full Name</strong> : { this.props.data.fullName }
          </div><br/>
          <div>
            <strong>Contact Number</strong> : { this.props.data.contactNumber }
          </div><br/>
          <div>
            <strong>Shipping Address</strong> : { this.props.data.shippingAddress }
          </div><br/>
          <div>
            <strong>Selected books</strong> : { this.props.data.selectedBooks.join(", ") }
          </div><br/>
          <button className="btn btn-success">
            Place order
          </button>
        </form>
      </div>
    );
  }
});

var Success = React.createClass({
  render(){
    var numberOfDays = '1 to 2';
    if (this.props.data.deliveryOption === 'Normal') {
      var numberOfDays = '3 to 4';
    }
    return(
      <div>
        <h2>
          Thank you for shopping with us {this.props.data.fullName}.
        </h2>
        <h4>
          You will soon get {this.props.data.selectedBooks.join(", ")}
          at {this.props.data.shippingAddress} in approrximately {numberOfDays}
          days.
        </h4>
      </div>
    );
  }
});


var BookStore = React.createClass({
  getInitialState: function () {
    return ({
        currentStep: 1
      , formValues: {}
      , cartTimeout: 60 * 15
    });
  },
  updateCartTimeout(timeout){
    this.setState({cartTimeout: timeout});
  },
  render: function () {
    switch (this.state.currentStep) {
      case 1:
        return <BookList
                  updateFormData={this.updateFormData}
                />
      case 2:
        return <ShippingAdress
                  updateFormData={this.updateFormData}
                />
      case 3:
        return <DeliveryDetails
                  updateFormData={this.updateFormData}
                />
      case 4:
        return <Confirmation
                  updateFormData={this.updateFormData}
                  data={this.state.formValues}
                />
      case 5:
        return <Success
                  data={this.state.formValues}
                />
      default:
        return <BookList
                  updateFormData={this.updateFormData}
                />
    }
  },
  updateFormData(formData){
    var formValues = Object.assign(
      {}, this.state.formValues, formData
    );
    console.log(formValues);
    var nextStep = this.state.currentStep + 1;
    this.setState({currentStep: nextStep, formValues: formValues});
  }
});


ReactDOM.render(
    <BookStore/>
  , document.getElementById('app')
);
