import React from 'react';
import p from '../images/p2.jpg';
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            name: "Suraj",
        description : "If youre here, youre probably pretty well read. Congratulations you! Still, its one thing to read a great book, but quite another to retain it. Especially considering most of us read a number of the classics in our teenage years, when we were only half paying attention anyway. And its one thing to know that Shakespeare wrote something as the sages say: when in doubt, its from Shakespeare, but quite another to remember the play it came from.."
    };
    this.handleName= this.handleName.bind(this);
    this.handleD= this.handleD.bind(this);
    }
    handleName(event){
        this.setState({name: event.target.value});
        event.preventDefault();
    }
    handleD(event){
        this.setState({description: event.target.value});
        event.preventDefault();
    }

    render() {
        return (
            <div class="row g-0">
        <div class=" col-md-4 d-flex justify-content-center">
            <img src={p} class="img-fluid rounded-start " alt="dada" width="300px" height="300px"/>
        </div>
        <div class=" col-md-6 row g-4">
            <div class="card-body">
                <h5 class="d-flex flex-row " type="text" name="Nam" id="name">{this.state.name}</h5>
                <p class="text-start border border-dark border-2 p-2">{this.state.description}</p>
                
                
       
            </div>
        </div>
        <div class="input-group col-md-6 mb-3 ">
            <div class="input-group-prepend">
                <span class="input-group-text">Edit Name</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" value={this.state.name} onChange={this.handleName}></textarea>
        </div>
        
    <div class="input-group col-md-6 ">
            <div class="input-group-prepend">
                <span class="input-group-text">Edit Description</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" value={this.state.description} onChange={this.handleD}></textarea>
        </div>
        

    </div>
        )
    }
}
export default Home;