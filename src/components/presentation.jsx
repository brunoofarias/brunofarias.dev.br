import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

class Presentation extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ textAlign: 'center', }}>
                    <img src="/images/me.jpg" alt="me" style={{ width: 250, height: 250, borderRadius: 150 }}/>
                    <h4>Olá, sou o Bruno Farias</h4>
                </div>
                <div>
                    Sou
                    <ReactTypingEffect
                        text={[" desenvolvedor com 3 anos de experiência", " apaixonado por tecnologia e astronomia"]}
                        typingDelay={100}
                        eraseDelay={500}
                        speed={70}
                    />
                </div>
                <div style={{ marginTop: 75 }}>
                    <span uk-icon="icon: chevron-down; ratio: 1"></span>
                </div>
            </div>
        )
    }
}

export default Presentation
