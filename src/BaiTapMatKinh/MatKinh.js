import React, { Component } from 'react'

export default class MatKinh extends Component {
    chonKinh = () => {
        this.props.chonKinh1(this.props.sp)
    }
    render() {
        return (
            <button className="bg-info" onClick={this.chonKinh}>
                <img src={this.props.sp.url} style={{ width: '50%', height: '50%' }} />
            </button>
        )
    }
}
