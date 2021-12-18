import React, {Component, useState, useEffect} from 'react'
import CopyCat from './CopyCat'
import Styles from './styles'
class CopyCatContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            input: '',
            copying: true
        }

        this.handleChange = this.handleChange.bind(this)
        this.toggleTape = this.toggleTape.bind(this)
    }
    handleChange({target}){
        this.setState({input: target.value})
        console.log(target.value)
    }

    toggleTape() {
        this.setState({copying: !this.state.copying})
    }
    
    render() {
        return <CopyCat divStyles={Styles.divStyles} imgStyles={Styles.imgStyles} input={this.state.input} onChange={this.handleChange} copying={this.state.copying} toggleTape={this.toggleTape}/>
    }
}

export default CopyCatContainer
