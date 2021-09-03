const Form = (props) => {
    const {todo, handleInput, handleSubmit} = props;
    
    return(
        <form>
        <input
          type="text"
          value={todo.title}
          onChange={ (event) => handleInput(event.target.value)}
        />
        <input
          type="submit"
          value="Click"
          onClick={handleSubmit}
        />
      </form>
    )
}

export default Form;