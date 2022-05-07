import './TaskItem.css';

function TaskItem(props){

    function handleClick(event){
        props.onCheck(props.index);
    }

    return (
        <div className='task-item'>
            <span>{ props.item.name }</span>
           <div className={`checkbox ${props.item.done ? "checked" : ""}`} onClick={handleClick}></div>
        </div>
    )
}

export default TaskItem;