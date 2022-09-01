export const ShowTodos = (props) => {
    return (
        <div className="todos container">
        {props.todos.map((todo) => {
          return (
            <p style={{marginTop:"10px"}} key={todo.id} className="todobar">
              <input className="mx-3"
                type="checkbox"
                onChange={(e) => {
                  props.completed(todo.id, !todo.status);
                }}
              />
              {todo.status === true ? (
                <span style={{ textDecoration: "line-through" }}>
                  {todo.task}
                </span>
              ) : (
                <span>{todo.task}</span>
              )}
              <button className="btn btn-danger mx-3"
                onClick={() => {
                  props.deleteTask(todo.id);
                }}
              >
                Delete
              </button>
              <button className="btn btn-warning mx-3"
                onClick={() => {
                  props.editTask(todo.id);
                }}
              >
                Edit
              </button>
            </p>
          );
        })}
      </div>
    )
}