import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import pdfView from './../views/pdfView';
import { render } from 'react-dom';



const pdfContainer = () => (
    <PDFViewer>
      <pdfView/>
    </PDFViewer>
  );

// ReactPDF.render(<MyDocument />, `${__dirname}/example.pdf`);
ReactDOM.render(<pdfContainer />, document.getElementById('root'));