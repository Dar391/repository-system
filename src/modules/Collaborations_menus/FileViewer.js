import React, { useEffect, useRef, useState } from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import pdfFile from '../../assets/Prototyping.pdf'
import { usePdf } from '@mikecousins/react-pdf'
import { Button } from 'react-bootstrap'

const FileViewer = () => {
  return (
    <div style={{ flex: 1, minWidth: '400px' }}>
      <iframe src={pdfFile} width="100%" height="500" title="sample" />
    </div>
  )
}

export default FileViewer
