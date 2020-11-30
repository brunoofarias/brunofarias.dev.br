import React, { Component } from 'react'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

class Navbar extends Component {
    constructor(props){
        super(props)
        UIkit.use(Icons)
    }

    render(){
        return(
            <div className="uk-position-relative">
                <nav className="uk-navbar-container" uk-navbar="dropbar: true; dropbar-mode: push">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li style={{ marginLeft: 10 }}>
                                <span uk-toggle="target: #offcanvas-reveal" uk-icon="icon: menu; ratio: 1.5"></span>
                                <strong> Menu</strong>
                            </li>
                        </ul>
                    </div>

                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li><a href="#"><span uk-icon="icon: instagram; ratio: 1"></span></a> </li>
                            <li><a href="#"><span uk-icon="icon: linkedin; ratio: 1"></span></a> </li>
                            <li><a href="#"><span uk-icon="icon: twitter; ratio: 1"></span></a> </li>
                            <li><a href="#"><span uk-icon="icon: github; ratio: 1"></span></a> </li>
                        </ul>
                    </div>

                </nav>

                <div id="offcanvas-reveal" uk-offcanvas="mode: reveal; overlay: true">
                    <div class="uk-offcanvas-bar">

                        <span class="uk-offcanvas-close" type="button" uk-icon="icon: close; ratio: 2"></span>

                        <h3> Bruno Farias</h3>

                        <ul class="uk-nav uk-navbar-dropdown-nav">
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Projetos</a></li>   
                            <li><a href="#">Contato</a></li>
                            
                        </ul>

                        <div style={{ bottom: 0 }}>
                            <ul className="uk-navbar-nav">
                                <li><a href="#"><span uk-icon="icon: instagram; ratio: 1"></span></a> </li>
                                <li><a href="#"><span uk-icon="icon: linkedin; ratio: 1"></span></a> </li>
                                <li><a href="#"><span uk-icon="icon: twitter; ratio: 1"></span></a> </li>
                                <li><a href="#"><span uk-icon="icon: github; ratio: 1"></span></a> </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="uk-navbar-dropbar"></div>
            </div>
        )
    }

}

export default Navbar
