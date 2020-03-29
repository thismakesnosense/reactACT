import React from 'react';
import api from '../api.js';
class EmployeeTable extends React.Component{
    state = {
        employees: [],
        filteredEmployees: []
    }
    componentDidMount(props){
        api.getEmployees()
        .then(res => {
            this.setState({employees: res.data.results})
            this.setState({filteredEmployees: res.data.results})
            console.log(res.data.results)
            })
        .catch(err => console.log(err));
        console.log(this.props);
        
    }
    searchtab(event){
      console.log(event.target.value);
      if (event.target.value.trim()===''){
          this.setState({
              filteredEmployees: this.state.employees
          })
        return
          
      }
      let filterEmp = this.state.employees.filter(emp => {
          let nameMatch = emp.name.first.toLowerCase().includes(event.target.value.toLowerCase());
        if (nameMatch){
            return true
        }
        else {
            return false
        }
      })
      this.setState({
          filteredEmployees: filterEmp
      })
      
    }

    sortBy(event){
       let sortEmp = event.target.value
       console.log(sortEmp);
    }
    

    render(){
        return(<div>
            <input type="text" onChange={this.searchtab.bind(this)} />
            <select onChange={this.sortBy.bind(this)}>
                <option disabled value="null">Sort By...</option>
                <option value="name">By name</option>
                <option value="location">By location</option>
                </select>
            <table>
                <thead>
                    <tr>
                    <td>employee name</td>
                    <td>email</td>
                    <td>cell number</td>
                    <td>office location</td>
                    </tr>
                </thead>
                <tbody>
                {this.state.filteredEmployees.map(emp => {
            return(   
                <tr key={emp.id.value}>
                    <td>
                    {emp.name.first} {emp.name.last}
                    </td>
                    <td>
                        {emp.email}
                    </td>
                    <td>
                        {emp.cell}
                    </td>
                    <td>
                        {emp.location.city}
                    </td>
                </tr>
            )
                       
            })}  
                </tbody>
                
                
            </table>
        </div>); 
    }
  
};

export default EmployeeTable;