import { ACTIONS } from "./App"

export default function OperationButton({dispatch, operation}){
    return (
    <button onClick={()=>operation({type: ACTIONS.CHOOSE_OPERATION, payload:{operation}})}>{operation}</button>
    )
}