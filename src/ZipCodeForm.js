import React, {Component} from 'react';

class ZipCodeForm extends Component {

  state = {
    zip: '47150'
  }

  handleChangeValue = (e) => {
    this.setState({
      zip: e.target.value
    });
  }

  handleSubmitZipCode = (e) => {
    e.preventDefault();
    this.props.getWeather(this.state.zip);
    this.setState({zip: ''});
  }

  render() {
    return (
      <>
        <form 
          onSubmit={this.handleSubmitZipCode}
        >
          <input
            type="text" 
            value={this.state.zip}
            onChange={this.handleChangeValue}
            placeholder="Enter your zip code"
          />
          <input 
            type="submit" 
          />
        </form>
        <p>{this.state.zip}</p>
      </>
    )
  }
}

export default ZipCodeForm;