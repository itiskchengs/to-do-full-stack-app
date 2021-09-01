import { useState } from 'react'

const Form = () => {

    const [text, setText] = useState('')

    function onSubmit(event) {
        event.preventDefault();
        console.log(text);
    }

    return(
        <form>
            <input type="text" value={text} onChange={(event) => setText(event.target.value)}></input>
            <button onClick={onSubmit}>Add</button>
        </form>
    )
}

export default Form;