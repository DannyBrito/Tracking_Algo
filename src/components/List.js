import react from 'react'
import RowList from './RowList'

const List = ({problems}) =>{
    const renderProblemRows = () =>{
        return problems.map(problem => <RowList key={problem.id} {...problem} />)
    }
    return (
        <table> 
            <tr>
                <th>Title</th>
                <th>Platform</th>
                <th>Link</th>
                <th>Difficulty (Platform)</th>
            </tr>
            {renderProblemRows()}                   
        </table>            
    )
}

export default List