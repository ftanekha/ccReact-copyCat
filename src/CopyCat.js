import React from 'react'
import PropTypes from 'prop-types'

const images = {
    copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
    quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
}
class CopyCat extends React.Component {
    render() {
        return (
            <div style={this.props.divStyles}>
                <h1>Copy Cat {this.props.name}</h1>
                <input type='text' value={this.props.input} onChange={this.props.onChange}/>
                <img 
                    alt='cat'
                    src={this.props.copying ? images.copycat : images.quietcat}
                    onClick={this.props.toggleTape}
                    style={this.props.imgStyles}
                />
                <p>{this.props.input && this.props.input}</p>
            </div>
        )
    }
}

CopyCat.propTypes = {
    divStyles: PropTypes.object.isRequired,
    imgStyles: PropTypes.object.isRequired,
    input: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    toggleTape: PropTypes.func.isRequired,
    copying: PropTypes.bool.isRequired,
}
CopyCat.defaultProps = {name: 'Kittie'}

export default CopyCat
