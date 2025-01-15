import React from 'react'

const FileRenderer = ({ material }) => {
  return (
    <div>
      <iframe src={material} width="100%" height="500" title="materials" />
      <p>sample</p>
    </div>
  )
}

export default FileRenderer
