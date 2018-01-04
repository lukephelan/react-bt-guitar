import React, { Component } from 'react';
import './VolumeSlider.css';

class VolumeSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            max: 100,
            value: 0,
            range: 100,
            orientation: 'vertical'
        }
        this.slide = this.slide.bind(this)
    }
    componentDidMount() {
        const audioElement = this.refs.volControl;
        audioElement.volume = 0;
    }
    slide = (event) => {
        const audioElement = this.refs.volControl;
        audioElement.volume = event.target.value / 100;
        this.setState({
            value: event.target.value
        });
    }
    render() {
        return (
            <div className='VolumeSlider-panel'>
                <input
                    type='range'
                    list='tickmarks'
                    onChange={this.slide}
                    value={this.state.value}
                    min={this.state.min}
                    max={this.state.max} />
                <datalist id='tickmarks'>
                    <option value='0' />
                    <option value='10' />
                    <option value='20' />
                    <option value='30' />
                    <option value='40' />
                    <option value='50' />
                    <option value='60' />
                    <option value='70' />
                    <option value='80' />
                    <option value='90' />
                    <option value='100' />
                </datalist>
                <audio autoPlay ref='volControl'>
                    <source src='http://emilcarlsson.se/assets/Avicii%20-%20The%20Nights.mp3'/>
                </audio>
            </div >

        );
    }
}

export default VolumeSlider;