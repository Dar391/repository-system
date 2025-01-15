import React, { useEffect, useState } from 'react'
import {
  Autocomplete,
  Chip,
  CircularProgress,
  createFilterOptions,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TableBody,
  TableHead,
  TextField,
} from '@mui/material'
import {
  Badge,
  Button,
  ButtonGroup,
  Col,
  Dropdown,
  DropdownButton,
  DropdownItem,
  FormControl,
  Modal,
  Row,
  Table,
} from 'react-bootstrap'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

const ModalAddMaterials = ({ show, handleClose }) => {
  const [selectedFile, setFileData] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(false)
  const [filteredOptions, setFilteredOptions] = useState([])
  const [error, setError] = useState(null)
  const [authorName, setAuthorName] = useState('')
  const [institution, setInstitution] = useState('')
  const [authorsList, setAuthorsList] = useState([])
  const [loading, setLoading] = useState(false)
  const [type, setType] = React.useState('')
  const [audienceType, setAudienceType] = React.useState('')

  const searchAuthor = [
    {
      name: 'Prof. John Doe',
    },
    {
      name: 'Ms. Jane Smith',
    },
    {
      name: 'Mr. Michael Johnson',
    },
    {
      name: 'Doc. Emily Davis',
    },
    {
      name: 'Prof. Chris Brown',
    },
  ]

  const materialType = [
    { name: 'Lesson' },
    { name: 'Syllabus' },
    { name: 'Activity' },
    { name: 'Module' },
    { name: 'Quiz' },
  ]
  const targetAudience = [
    { audience: 'College - 1st year level' },
    { audience: 'College - 2nd year level' },
    { audience: 'College - 3rd year level' },
    { audience: 'College - 4th year level' },
  ]
  const filter = createFilterOptions()
  const discipline = [
    { Authordisc: 'Frontend Development' },
    { Authordisc: 'Software Engineering' },
    { Authordisc: 'Computer Science' },
    { Authordisc: 'Information Technology' },
    { Authordisc: 'Education' },
  ]

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0]

    if (!file) {
      alert('Please select a file to upload.')
      return
    }

    console.log('Uploaded file: ', file)

    const formData = new FormData()
    formData.append('file', file)

    const fileExtension = file.name.split('.').pop().toLowerCase()
    let conversionEndpoint = ''

    switch (fileExtension) {
      case 'docx':
        conversionEndpoint = 'docx/to/pdf'
        break
      case 'pptx':
        conversionEndpoint = 'pptx/to/pdf'
        break
      case 'xlsx':
        conversionEndpoint = 'xlsx/to/pdf'
        break
      default:
        alert(
          'Unsupported file type. Please upload a DOCX, PPTX, or Excel file.'
        )
        return
    }

    setUploadProgress(true)

    try {
      const API_KEY = 'token_FlgXAcqj'
      const response = await axios.post(
        `https://v2.convertapi.com/convert/${conversionEndpoint}?Secret=${API_KEY}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      console.log('Result after reaching API:', response.data.Files)

      if (
        response.data &&
        response.data.Files &&
        response.data.Files.length > 0
      ) {
        const fileData = response.data.Files[0].FileData // Base64 encoded PDF data
        const fileName = response.data.Files[0].FileName // File name of the PDF
        const fileExt = response.data.Files[0].FileExt // File extension (should be 'pdf')

        const blob = new Blob(
          [Uint8Array.from(atob(fileData), (c) => c.charCodeAt(0))],
          { type: 'application/pdf' }
        )
        const pdfUrl = URL.createObjectURL(blob)

        setFileData(pdfUrl)
        console.log('Converted file:', pdfUrl)
      } else {
        alert('Conversion failed.')
      }
    } catch (error) {
      console.error('Error converting file:', error)
      alert('An error occurred during the conversion.')
      setError('There was an error converting the file. Please try again.')
    } finally {
      setUploadProgress(false)
    }
  }

  useEffect(() => {
    // Optional cleanup or abort handling
    return () => {
      // If necessary, you can abort the FileReader or reset file states
      setFileData(null)
    }
  }, [])

  useEffect(() => {
    if (authorName) {
      setLoading(true)
      const timeoutId = setTimeout(() => {
        // Filter the closest match
        const closestMatch = searchAuthor.filter((option) =>
          option.name.toLowerCase().includes(authorName.toLowerCase())
        )
        setFilteredOptions(closestMatch.length ? closestMatch : [])
        setLoading(false)
      }, 1000) // Simulate a delay for loading
      return () => clearTimeout(timeoutId) // Cleanup timeout
    } else {
      setFilteredOptions([])
    }
  }, [authorName])

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (name === 'authorName') {
      setLoading(true)
      setAuthorName(value)
    }
    if (name === 'institution') setInstitution(value)
  }

  const handleAddAuthor = () => {
    if (!authorName.trim() || !institution.trim()) {
      alert('Author name and institution cannot be empty.')
      return
    }

    const isDuplicate = authorsList.some(
      (author) =>
        author.authorName.toLowerCase() === authorName.toLowerCase() &&
        author.institution.toLowerCase() === institution.toLowerCase()
    )

    if (isDuplicate) {
      alert('Author already exists in the list.')
      return
    }

    if (authorName && institution) {
      const authorType =
        authorsList.length === 0 ? 'Main Author' : 'Contributor'
      const newAuthor = { authorName, institution, type: authorType } // Create a new author object
      setAuthorsList([...authorsList, newAuthor]) // Add new author to the authors list
      // Reset input fields
      setAuthorName('')
      setInstitution('')
    }
  }

  const [editingIndex, setEditingIndex] = useState(null)
  const [editedAuthorName, setEditedAuthorName] = useState('')
  const [editedInstitution, setEditedInstitution] = useState('')

  const handleEditClick = (index) => {
    setEditingIndex(index)
    setEditedAuthorName(authorsList[index].authorName)
    setEditedInstitution(authorsList[index].institution)
  }

  const handleSaveClick = (index) => {
    const updatedAuthorsList = [...authorsList]
    updatedAuthorsList[index] = {
      ...updatedAuthorsList[index],
      authorName: editedAuthorName,
      institution: editedInstitution,
    }
    setAuthorsList(updatedAuthorsList)
    setEditingIndex(null)
  }

  const handleDeleteAuthor = (index) => {
    const updatedAuthorsList = authorsList.filter((_, i) => i !== index)
    setAuthorsList(updatedAuthorsList)
  }

  const handleSave = async () => {
    try {
      const payload = {
        authors: authorsList,
        materialTitle: document.getElementById('filled-required').value,
        description: document.getElementById('material-description').value,
      }

      const response = await axios.post('/save-material', payload)
      alert('Form saved successfully!')
      console.log(response.data)
    } catch (error) {
      alert('Failed to save the form.')
      console.error(error)
    }
  }

  const handleDraft = () => {
    // Logic for saving as a draft (could be saving as a draft in the database, etc.)
    alert('Form saved as draft.')
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="xl"
      aria-labelledby="example-custom-modal-styling-title"
      style={{ height: '100%' }}
    >
      <Modal.Header closeButton>
        <Modal.Title> Material Details </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Row>
          <Col style={{ borderRight: '1px solid rgb(230,225,225' }}>
            <div style={{ fontSize: '14px' }}>
              <div>
                <p>Upload material</p>
                <Row
                  className="mb-2"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Col>
                    <TextField
                      type="file"
                      onChange={handleFileChange}
                      className="mb-3"
                      variant="outlined"
                      sx={{
                        '& .MuiInputBase-input': {
                          fontSize: '11px',
                        },
                        '& .MuiInputLabel-root': {
                          fontSize: '12px',
                        },
                        width: '250px',
                      }}
                    />
                  </Col>

                  <Col style={{ padding: 0, fontSize: '11px' }}>
                    {' '}
                    <p>Word count: 2125</p>
                  </Col>

                  <Col style={{ padding: 0, fontSize: '11px' }}>
                    <p>Page count: 5</p>
                  </Col>
                </Row>
              </div>

              <div>
                <TextField
                  required
                  id="filled-required"
                  label="Material title"
                  placeholder="e.g. Introduction to Computing"
                  variant="filled"
                  fullWidth
                  size="small"
                  className="mb-3"
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '11px',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '12px',
                    },
                  }}
                />

                <TextField
                  required
                  id="filled-required"
                  label="Material description"
                  variant="filled"
                  multiline
                  rows={2}
                  fullWidth
                  size="small"
                  className="mb-3"
                  sx={{
                    '& .MuiInputBase-input': {
                      fontSize: '11px',
                    },
                    '& .MuiInputLabel-root': {
                      fontSize: '12px',
                    },
                  }}
                />
                <div
                  style={{
                    backgroundColor: 'rgba(226, 222, 222, 0.5)',
                    borderRadius: '8px',
                  }}
                >
                  <div className="p-2">
                    <Row
                      className="mb-2"
                      style={{
                        alignItems: 'center',
                      }}
                    >
                      <Col>
                        <Autocomplete
                          options={filteredOptions}
                          getOptionLabel={(option) =>
                            typeof option === 'string'
                              ? option
                              : option?.name || ''
                          }
                          freeSolo
                          value={authorName}
                          onInputChange={(event, newValue) => {
                            setAuthorName(newValue || '')
                          }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Author name"
                              placeholder="Prof. John F. Doe"
                              variant="outlined"
                              size="small"
                              fullWidth
                              sx={{
                                '& .MuiInputBase-input': {
                                  fontSize: '11px',
                                },
                                '& .MuiInputLabel-root': {
                                  fontSize: '12px',
                                },
                                width: '200px',
                              }}
                              slotProps={{
                                input: {
                                  ...params.InputProps,
                                  endAdornment: (
                                    <React.Fragment>
                                      {loading ? (
                                        <InputAdornment position="end">
                                          <CircularProgress
                                            size={10}
                                            color="success"
                                          />
                                        </InputAdornment>
                                      ) : null}
                                      {params.InputProps?.endAdornment}
                                    </React.Fragment>
                                  ),
                                },
                              }}
                            />
                          )}
                        />
                      </Col>

                      <Col style={{ padding: 0 }}>
                        <TextField
                          id="outlined-size-small"
                          label="Institution"
                          name="institution"
                          placeholder="University of the South"
                          variant="outlined"
                          size="small"
                          fullWidth
                          value={institution}
                          onChange={handleInputChange}
                          sx={{
                            '& .MuiInputBase-input': {
                              fontSize: '11px',
                            },
                            '& .MuiInputLabel-root': {
                              fontSize: '12px',
                            },
                            width: '200px',
                          }}
                        />
                      </Col>
                      <Col>
                        <Button
                          onClick={handleAddAuthor}
                          size="sm" // Adjusts the button size
                        >
                          Add author
                        </Button>
                      </Col>
                    </Row>

                    <div style={{ fontSize: '10px', color: 'gray' }}>
                      <i>*First added author is considered as main author.</i>
                    </div>

                    <div
                      style={{
                        maxHeight: '150px',
                        overflowY: 'scroll',
                      }}
                    >
                      <Table>
                        <TableHead>
                          <tr style={{ textAlign: 'center', fontSize: '10px' }}>
                            <th scope="col">Name</th>
                            <th scope="col">Institution</th>
                            <th scope="col">Type</th>
                            <th scope="col">Action</th>
                          </tr>
                        </TableHead>
                        <TableBody>
                          {authorsList.map((author, index) => (
                            <tr
                              className="fw-formal"
                              key={index}
                              style={{ fontSize: '11px' }}
                            >
                              <td>
                                {editingIndex === index ? (
                                  <TextField
                                    value={editedAuthorName}
                                    size="small"
                                    onChange={(e) =>
                                      setEditedAuthorName(e.target.value)
                                    }
                                    sx={{
                                      '& .MuiInputBase-input': {
                                        fontSize: '11px',
                                      },
                                    }}
                                  />
                                ) : (
                                  author.authorName
                                )}
                              </td>

                              <td>
                                {editingIndex === index ? (
                                  <TextField
                                    size="small"
                                    value={editedInstitution}
                                    onChange={(e) =>
                                      setEditedInstitution(e.target.value)
                                    }
                                    sx={{
                                      '& .MuiInputBase-input': {
                                        fontSize: '11px',
                                      },
                                    }}
                                  />
                                ) : (
                                  author.institution
                                )}
                              </td>

                              <td>{author.type}</td>

                              <td className="align-middle">
                                <h6 className="mb-0 d-flex justify-content-center">
                                  {editingIndex === index ? (
                                    <Badge
                                      className="mx-2"
                                      bg="success"
                                      style={{ cursor: 'pointer' }}
                                      onClick={() => handleSaveClick(index)}
                                    >
                                      <FontAwesomeIcon icon={faCheck} />
                                    </Badge>
                                  ) : (
                                    <Badge
                                      className="mx-2"
                                      bg="success"
                                      style={{ cursor: 'pointer' }}
                                      onClick={() => handleEditClick(index)}
                                    >
                                      <FontAwesomeIcon icon={faPen} />
                                    </Badge>
                                  )}

                                  <Badge
                                    className="mx-2"
                                    bg="danger"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleDeleteAuthor(index)}
                                  >
                                    <FontAwesomeIcon icon={faTrash} />
                                  </Badge>
                                </h6>
                              </td>
                            </tr>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
                <div className="p-2">
                  <Row
                    className="mb-2"
                    style={{
                      alignItems: 'center',
                      gap: '20px',
                    }}
                  >
                    <Col style={{ paddingTop: '10px' }}>
                      <Autocomplete
                        fullWidth
                        value={type}
                        options={materialType}
                        size="small"
                        onChange={(event, newValue) => {
                          if (typeof newValue === 'string') {
                            setType({
                              name: newValue,
                            })
                          } else if (newValue && newValue.inputValue) {
                            setType({
                              name: newValue.inputValue,
                            })
                          } else {
                            setType(newValue)
                          }
                        }}
                        filterOptions={(options, params) => {
                          const filtered = filter(options, params)

                          const { inputValue } = params
                          const isExisting = options.some(
                            (option) => inputValue === option.name
                          )
                          if (inputValue !== '' && !isExisting) {
                            filtered.push({
                              inputValue,
                              name: `Add "${inputValue}"`,
                            })
                          }

                          return filtered
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        id="free-solo-with-text-demo"
                        getOptionLabel={(option) => {
                          if (typeof option === 'string') {
                            return option
                          }
                          if (option.inputValue) {
                            return option.inputValue
                          }
                          return option.name
                        }}
                        renderOption={(props, option) => {
                          const { key, ...optionProps } = props
                          return (
                            <li key={key} {...optionProps}>
                              {option.name}
                            </li>
                          )
                        }}
                        freeSolo
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Material type"
                            sx={{
                              '& .MuiInputBase-input': {
                                fontSize: '11px',
                              },
                              '& .MuiInputLabel-root': {
                                fontSize: '12px',
                              },
                            }}
                          />
                        )}
                      />
                    </Col>

                    <Col>
                      <Autocomplete
                        fullWidth
                        options={targetAudience}
                        value={audienceType}
                        size="small"
                        onChange={(event, newValue) => {
                          if (typeof newValue === 'string') {
                            setAudienceType({
                              audience: newValue,
                            })
                          } else if (newValue && newValue.inputValue) {
                            setAudienceType({
                              audience: newValue.inputValue,
                            })
                          } else {
                            setAudienceType(newValue)
                          }
                        }}
                        filterOptions={(options, params) => {
                          const filtered = filter(options, params)

                          const { inputValue } = params
                          const isExisting = options.some(
                            (option) => inputValue === option.audience
                          )
                          if (inputValue !== '' && !isExisting) {
                            filtered.push({
                              inputValue,
                              audience: `Add "${inputValue}"`,
                            })
                          }

                          return filtered
                        }}
                        selectOnFocus
                        clearOnBlur
                        handleHomeEndKeys
                        id="free-solo-with-text-demo"
                        getOptionLabel={(option) => {
                          if (typeof option === 'string') {
                            return option
                          }
                          if (option.inputValue) {
                            return option.inputValue
                          }
                          return option.audience
                        }}
                        renderOption={(props, option) => {
                          const { key, ...optionProps } = props
                          return (
                            <li key={key} {...optionProps}>
                              {option.audience}
                            </li>
                          )
                        }}
                        freeSolo
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Target audience"
                            sx={{
                              '& .MuiInputBase-input': {
                                fontSize: '11px',
                              },
                              '& .MuiInputLabel-root': {
                                fontSize: '12px',
                              },
                            }}
                          />
                        )}
                      />
                    </Col>

                    <Autocomplete
                      multiple
                      id="tags-standard"
                      options={discipline.map((option) => option.Authordisc)}
                      size="small"
                      freeSolo
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => {
                          const { key, ...tagProps } = getTagProps({ index })
                          return (
                            <Chip
                              variant="outlined"
                              label={option}
                              key={key}
                              {...tagProps}
                            />
                          )
                        })
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          label="Disciplines"
                          placeholder="Enter or select discipline"
                          multiline
                          className="mb-4"
                          sx={{
                            '& .MuiInputBase-input': {
                              fontSize: '11px',
                            },
                            '& .MuiInputLabel-root': {
                              fontSize: '12px',
                            },
                          }}
                        />
                      )}
                    />
                  </Row>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <div className=" text-center">
              {uploadProgress && (
                <div>
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p>Converting file, please wait...</p>
                </div>
              )}
            </div>

            {error && (
              <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
            )}
            {selectedFile && !uploadProgress && (
              <div>
                <iframe
                  src={`${selectedFile}#toolbar=0&navpanes=0&scrollbar=0`}
                  width="100%"
                  height="500"
                  title="materials"
                />
              </div>
            )}
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col style={{ textAlign: 'right' }}>
            <Button variant="secondary" onClick={handleDraft} className="mx-2">
              Draft
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalAddMaterials
