import React from 'react'

export const AddForm = (props) => {
  return (
    <>
    <input type="text"
        value={props.todoText}
        onChange={(e) => {
          props.settodoText(e.target.value);
        }}
      />
      <button className='mx-3 btn btn-success' onClick={props.add}>Create</button>
    </>
  )
}

export default AddForm