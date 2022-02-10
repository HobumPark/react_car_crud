import React, { Component } from 'react';
import "../css/Car.css";

class Car extends Component {

    constructor(props) {
        super(props);

        this.state={
            toggle:false,
            name:this.props.name,
            price:this.props.price,
            year:this.props.year
        }
    }

    handleDelete = (e) => {
        alert("Car의 삭제함수");
        var name = [e.target.name];
        this.props.handleDelete(name);
        //app의 handleDelete함수
    }

    handleUpdate = (e) => {
        alert("Car의 변경함수");

        const {toggle,name,price,year}=this.state;
        if(toggle==true)
        {//수정 버튼이 눌렸는데 수정모드인 상태면 전송
            alert("Car에서 변경기능 실행");
            this.props.handleUpdate(name,price,year);
        }
        else if(toggle==false)
        {//수정 버튼이 눌렸는데 수정불가모드인 상태면 아무것도 안함
            
        }

        this.setState({
            toggle:!toggle
        })
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        const {toggle}=this.state;
        if(toggle==true)
        {
            return (
                <div id="carWrap">
    
                    <div id="carLogo">
                        <img src={this.props.car_img}/>
                    </div>
    
                    <div id="rightSide">
                        <div>차종:{this.props.name}</div>
                        <div>가격:<input defaultValue={this.props.price} onChange={this.handleChange} name="price"/></div>
                        <div>년식:<input defaultValue={this.props.year}  onChange={this.handleChange} name="year"/></div>
                        <div>
                            <button onClick={this.handleDelete} name={this.props.name}>삭제</button>
                            <button onClick={this.handleUpdate} name={this.props.name}>수정</button>
                        </div>
                    </div>
                </div>
            );   
        }
        else if(toggle==false)
        {
            return (
                <div id="carWrap">
    
                    <div id="carLogo">
                        <img src={this.props.car_img}/>
                    </div>
    
                    <div id="rightSide">
                        <div>차종:{this.props.name}</div>
                        <div>가격:{this.props.price}</div>
                        <div>년식:{this.props.year}</div>
                        <div>
                            <button onClick={this.handleDelete} name={this.props.name}>삭제</button>
                            <button onClick={this.handleUpdate} name={this.props.name}>수정</button>
                        </div>
                    </div>
                </div>
            );   
        }
    }
}

export default Car;

