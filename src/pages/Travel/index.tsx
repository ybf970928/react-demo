import React from 'react'
import { RouteComponentProps } from 'react-router'

interface IRouterParams {
    randomId: string
}
const Travel: React.FC<RouteComponentProps<IRouterParams>> = (props) => {
    console.log(props.match.params.randomId)
    return (
        <div>
            Travel page
        </div>
    )
}
export default Travel