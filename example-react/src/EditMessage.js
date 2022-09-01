function EditMessage(index)
{

    const [inputValue1, setInputValue1]=useState("");


    function Edit(index)
    {
        setTasks(tasks.map((t,i)=>{
            if(i===index) return inputValue;
            else return t;
        }))
    }


    const newList1 = (event) => {
        console.log(event.target)
        setInputValue1(event.target.value)
     
    }

    
    
    
    return(
        <div>
            <span><input type="text" value={inputValue1} onChange={newList1}/></span>
            <span><button onClick={Edit(index)}>Edit Task</button></span>
        </div>
    );
}