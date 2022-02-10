import React, { Component } from 'react';

class InputForm extends Component{

  constructor(props)
  {
    super(props);
    this.state={
      id:4444,
      name:'',
      price:0,
      year:0
    }
  }

  handleChange=(e)=>{
    //alert("InputForm의 변경함수");
    this.setState({
      [e.target.name]:e.target.value
      //age:20
    })
  }

  handleCreate=(e)=>{
    alert("InputForm의 추가함수");
    const {id,name,price,year}=this.state;
    //this.props.handleCreate(this.state.name,this.
    //state.price);
    this.props.handleCreate(id,name,price,year);
    this.setState({
      id:this.state.id+1111
    })
  }

  render(){
  return(
      <div>
        <input type="text" placeholder="차종입력" onChange={this.handleChange} name="name"></input>
        <input type="text" placeholder="가격입력" onChange={this.handleChange} name="price"></input>
        <input type="text" placeholder="년식입력" onChange={this.handleChange} name="year"></input>
        <button onClick={this.handleCreate}>추가</button>
      </div> 
    );
  }
}

export default InputForm;

