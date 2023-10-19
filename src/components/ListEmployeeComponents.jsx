import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeServices'
import './ListEmployeeComponents.css'

class ListEmployeeComponents extends Component {
     constructor(props){
        super(props)

        this.state={
            employees:[]
        }
     }
     componentDidMount(){
        
        EmployeeService.getEmployees().then((res)=>{
            console.log(res.data);
            this.setState({employees:res.data});
        });
     }
    render() {
    return (
      <div>
        <h2 className="text-center">Employee Details</h2>
        <h2 >
            <thead>
                <tr>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employees=>
                            <tr key={employees.id}>
                                <td>{employees.firstname}</td>
                                <td>{employees.lastname}</td>
                                <td>{employees.emailId}</td>
                            </tr>
                            )
                    }
                </tbody>
            
        </h2>
      </div>
    )
  }
}
export default ListEmployeeComponents
