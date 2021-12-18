import React, {Component, useState, useEffect} from 'react'
import CopyCat from './CopyCat'
import Styles from './styles'
class CopyCatContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = { 
            copying: true
        }

        this.toggleTape = this.toggleTape.bind(this)
    }

    toggleTape() {
        this.setState({copying: !this.state.copying})
    }
    
    render() {
        return <CopyCat divStyles={Styles.divStyles} imgStyles={Styles.imgStyles} copying={this.state.copying} toggleTape={this.toggleTape}/>
    }
}

export default CopyCatContainer
