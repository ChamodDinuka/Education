import React,{Component} from 'react'
import './view.css'

class View extends Component{
    render(){
        return(
            <table >
                <tr>
                    <th>Course Name</th>
                    <th>University/Institute</th>
                    <th>Click & Get details</th>
                </tr>
                <tr>
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <td>Eve</td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
            </table>


        );
    }
}
export default View;