import React, {useState} from 'react'
import CopyCat from './CopyCat'
import Styles from './styles'

const CopyCatContainer = ()=> {
    const 
        [input, setInput] = useState(''),
        [copying, setCopying] = useState(true),
        handleChange = ({target})=> {
        setInput(()=> ({input: target.value}))
        },
        toggleTape = ()=> {
            setCopying(()=> ({copying: !this.state.copying}))
        }
    
    return <CopyCat 
                divStyles={Styles.divStyles} imgStyles={Styles.imgStyles} input={input}
                onChange={handleChange} copying={copying} toggleTape={toggleTape}
            />
}

export default CopyCatContainer
