import React, { Component } from 'react';
import Car from "./components/Car";
import InputForm from "./components/InputForm";
import sonata_img from "./images/sonata.png";
import avante_img from "./images/avante.png";
import benz_img from "./images/benz.png";

class App extends Component{

  constructor(props)
  {
    super(props);

    this.state=
    {
      carList:[
        {
          id:1111,
          name:'소나타',
          price:2400,
          year:2018,
          car_img:sonata_img
        },
        {
          id:2222,
          name:'아반떼',
          price:2200,
          year:2016,
          car_img:avante_img
        },
        {
          id:3333,
          name:'벤츠',
          price:6500,
          year:2020,
          car_img:benz_img
        }
      ]
    }
  }

  handleCreate=(id,name,price,year)=>{
    alert("app의 추가함수");

    const {carList}=this.state;
    //비구조화 할당:carList를 가져옴
    var eng_name='';
    var car_img = ""
    if(name=="소나타")
    {
      eng_name="sonata";
      car_img=sonata_img
    }
    else if(name=='아반떼')
    {
      eng_name="avante";
      car_img=avante_img
    }
    else if(name=='벤츠')
    {
      eng_name='benz';
      car_img=benz_img
    }

    

    const data = 
    {id:id,name:name,price:price,year:year,car_img:car_img};
    //var data = new Object();
    //data.name=name;
    //data.price=price;
    //data.year=year;

    this.setState({
      carList:carList.concat(data)
    })
  }

  handleDelete=(input)=>{
    alert("app의 삭제함수");

    const {carList}=this.state;
    //비구조화 할당:carList를 가져옴

    this.setState({
      carList:carList.filter(car=>car.name != input)
    })
  }

  handleUpdate = (name,price,year) =>{

    const {carList} = this.state;

    var data=new Object();
    data.name=name;
    var edit_price=parseInt(price);
    data.price=edit_price;
    data.year=year;

    const modifiedArray = carList.map(item => item.name === name? ({...item,...data}):item);
                                                                  //새로운
    this.setState({
      carList:modifiedArray
    })

  }

  render(){

    const {carList}=this.state;
    var result = carList.map( (car,index)=><Car key={car.id} name={car.name} price={car.price}
    year={car.year} car_img={car.car_img} handleDelete={this.handleDelete}
    handleUpdate={this.handleUpdate}></Car>    );

    return(
      <div>
        <InputForm handleCreate={this.handleCreate}></InputForm>
        {result}
      </div>
    );
  }
}

export default App;

