import react from 'react'

const RowList = ({title,platform,link,platform_difficulty}) =>{

    return (
        <tr>
        <td>{title}</td>
        <td>{platform}</td>
        <td>{link}</td>
        <td>{platform_difficulty}</td>
      </tr>
    )
}

export default RowList