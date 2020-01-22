import React, { Component } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
// import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import canvg from 'canvg';
import ReactDOMServer from 'react-dom/server';
import {render} from 'react-dom';

class pdfContainer extends Component {
    resume;

    constructor() {
        super();
        // this.iconsToConvert = [
        //     {
        //         icon: faGithub,
        //         alt: 'github icon'
        //     },
        //     {
        //         icon: faMedium,
        //         alt: 'medium icon'
        //     }
        // ]
        this.canvLoaded = false;
    }

    exportPDF = () => {
        this.resume.save();
    }

    // convertSvgToImage = (arr) => {
    //     let canv = this.refs.canvas;
    //     if (!this.canvLoaded) {
    //         this.canvLoaded = true;
    //         canv.getContext("2d");
    //         arr.forEach((d, i) => {
    //             let htmlString = ReactDOMServer.renderToStaticMarkup(
    //                 <FontAwesomeIcon icon={d.icon} size={"3x"} style={{ color: '#005696', height: '500px', width: '500px' }} />
    //             );
    //             canvg(canv, htmlString);
    //             d.icon = canv.toDataURL("image/png");
    //         });
    //         this.setState({});
    //     }
    // }

    // componentDidMount() {
    //     this.convertSvgToImage(this.iconsToConvert);
    // }

    render() {
        return (
            <div style={{ height: '100vh', width: '100vw', paddingTop: 20, backgroundColor: 'gray' }}>
                 <h1>HELLO</h1>
                
            </div>
        );
    }
} 

export default pdfContainer;



