import React, { Component } from 'react'
import DSKinh from './data.json'
import MatKinh from './MatKinh'



export default class BaiTapMatKinh extends Component {
    state = {
        sanPhamChiTiet: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./img/v1.png",
            desc: "1_Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        }
    }

    chonKinh = (sanPhamChiTiet) => {
        this.setState({
            sanPhamChiTiet,
        })
    }

    renderSanPhamMatKinh = () => {
        return DSKinh.map((sp, i) => {
            return <div className="col" key={i}>
                <MatKinh
                    sp={sp}
                    chonKinh1={this.chonKinh}
                />
            </div>
        })
    }

    render() {
        return (
            <div style={{
                backgroundImage: 'url(./img/background.jpg)',
                width: '100%', height: '100%',
                position: 'fixed', backgroundSize: 'cover', top: 0, left: 0
            }}>
                <div className="bg-dark py-3 text-white">
                    <h3>TRY GLASSES APP ONLINE</h3>
                </div>


                <div className="bg-success"
                    style={{
                        width: '20%', height: '50%', margin: "auto",
                        background: 'url(./img/model.jpg)',
                        backgroundSize: "cover", position: "relative",
                    }}>
                    <img src={this.state.sanPhamChiTiet.url} style={{ width: '60%', height: '16%', position: "absolute", top: "24%", left: "1%", position: "relative" }} />
                    <p className="text-white bg-warning" style={{ position: "absolute", bottom: "-5%" }}>{this.state.sanPhamChiTiet.desc}</p>
                </div>

                <div className="bg-dark mt-5 row py-5 " style={{ width: "80%", margin: "auto" }}>
                    {this.renderSanPhamMatKinh()}
                </div>

            </div>
        )
    }
}

