import React, { useEffect, useState } from 'react'
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from 'react-bootstrap'

import '../../styles/engagements.css'
import { PieChart } from '@mui/x-charts/PieChart'
import { BarChart, LineChart } from '@mui/x-charts'
import { XAxis } from 'recharts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faHeart,
  faEye,
  faArrowDown91,
  faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons'

const Engagements_analytics = () => {
  const [isHidden, setIsHidden] = React.useState(false)

  const analyticsData = [
    {
      data: '105',
      desc: 'Total Access',
      color: '#c27685',
      icon: faBookOpen,
      additional: '5 access',
    },
    {
      data: '87',
      desc: 'Total Likes',
      color: '#416574',
      icon: faHeart,
      additional: '8 likes',
    },
    {
      data: '213',
      desc: 'Total Visit',
      color: '#e69138',
      icon: faEye,
      additional: '9 visit',
    },
  ]

  const pieChartData = [
    { id: 0, value: 10, label: 'Lesson' },
    { id: 1, value: 15, label: 'Modules' },
    { id: 2, value: 13, label: 'Syllabus' },
    { id: 3, value: 8, label: 'Assignments' },
    { id: 4, value: 12, label: 'Activity' },
    { id: 5, value: 2, label: 'Quizzes' },
  ]

  const xAxisData = ['Syllabus', 'Assign', 'Activity', 'Quizzes']
  const seriesData = [{ data: [9, 5, 9, 15] }]
  const colors = ['#9966ff']

  const [filter, setFilter] = useState('weekly') // Default filter

  // Data for different timeframes
  const data = {
    daily: {
      xAxis: [
        '2024-10-25',
        '2024-10-26',
        '2024-10-27',
        '2024-10-28',
        '2024-10-29',
        '2024-10-30',
        '2024-10-31',
      ],
      series: [
        [2, 5.5, 2, 8.5, 1.5, 5, 7], // Reads
        [0, 5.5, 0, 3, 0, 2, 1], // Visits
        [7, 8, 5, 4, 3, 0, 2], // Likes
      ],
    },
    weekly: {
      xAxis: [1, 2, 3, 4],
      series: [
        [10, 20, 30, 25], // Reads
        [15, 25, 0, 20], // Visits
        [8, 5, 6, 7], // Likes
      ],
    },
    monthly: {
      xAxis: [1, 2, 3, 4, 5, 6, 7, 8],
      series: [
        [50, 70, 90, 100, 110, 80, 70, 60], // Reads
        [20, 30, 40, 35, 45, 50, 55, 60], // Visits
        [15, 10, 12, 14, 13, 16, 15, 17], // Likes
      ],
    },
    yearly: {
      xAxis: [1, 2, 3],
      series: [
        [500, 700, 800], // Reads
        [200, 300, 400], // Visits
        [150, 100, 120], // Likes
      ],
    },
  }

  // Get current data based on selected filter
  const currentData = data[filter]

  return (
    <Col className="Sidebar ">
      <div style={{ paddingTop: '2%' }}>
        <h5>Material Analytics</h5>
      </div>
      <Row className=" g-5 ">
        {analyticsData.map((item, index) => (
          <Col key={index} className=" mb-5" xs={12} sm={6} md={3} lg={4}>
            <div
              className="card custom-card "
              style={{
                height: '110px',
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <CardBody className="d-flex" style={{ paddingTop: '0%' }}>
                <Row className=" align-items-center  ">
                  <Col className="text-end">
                    <div
                      style={{
                        backgroundColor: item.color,
                      }}
                      className="iconStyle"
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        size="1x"
                        color="white"
                      />
                    </div>
                  </Col>
                  <Col className="text-start">
                    <CardTitle
                      tag="h6"
                      style={{
                        fontWeight: 'bolder',
                        fontSize: '30px',
                      }}
                    >
                      {item.data}
                    </CardTitle>
                    <CardSubtitle
                      style={{
                        fontSize: '12px',
                        fontStyle: 'italic',
                        color: item.color,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.desc}
                    </CardSubtitle>
                  </Col>
                  <Col className="text-end ">
                    <div style={{ width: '132px' }}>
                      <FontAwesomeIcon icon={faArrowTrendUp} color="gray" />
                      <p
                        style={{
                          whiteSpace: 'nowrap',
                          fontStyle: 'italic',
                          color: 'grey',
                          fontSize: '10px',
                        }}
                      >
                        +{item.additional}
                      </p>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </div>
          </Col>
        ))}
      </Row>

      <Row className=" justify-content-center  ">
        <Col className="mb-5" xs={12} sm={6} md={3} lg={5}>
          <div>
            <h5>Material type metrics</h5>
          </div>
          <div className="card custom-card" style={{ padding: '10px' }}>
            <PieChart
              series={[
                {
                  data: pieChartData,
                  innerRadius: '50%',
                  highlightScope: { faded: 'global', highlighted: 'item' },
                },
              ]}
              slotProps={{
                legend: {
                  hidden: isHidden,
                  direction: 'column',
                  position: { vertical: 'center', horizontal: 'right' },
                  padding: 0,
                  labelStyle: {
                    fontSize: 14,
                  },
                  itemMarkWidth: 11,
                  itemMarkHeight: 10,
                },
              }}
              height={270}
            />
          </div>
        </Col>
        <Col className="mb-5" xs={12} sm={6} md={3} lg={7}>
          <div>
            <h5>Total reads per material type</h5>
          </div>
          <div className="card custom-card align-items-center">
            <BarChart
              xAxis={[{ scaleType: 'band', data: xAxisData }]}
              series={seriesData}
              width={400}
              height={250}
              colors={colors}
              barSize={20}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            ></BarChart>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="mb-4">
          <h5 className="text-start">Stats history</h5>
          <div className="card custom-card">
            <Row>
              <Col>
                <Row
                  className="mb-2 ms-3"
                  style={{ border: '1px solid lightgray' }}
                >
                  <Col className="text-start">
                    <div className=" align-items-center ">
                      <span
                        className="legend-style"
                        style={{
                          backgroundColor: '#f05133',
                        }}
                      ></span>
                      <span>Reads</span>
                    </div>
                  </Col>
                  <Col>
                    <div className=" align-items-center mb-1">
                      <span
                        className="legend-style"
                        style={{
                          backgroundColor: '#86459b',
                        }}
                      ></span>
                      <span>Visits</span>
                    </div>
                  </Col>

                  <Col>
                    <div>
                      <span
                        className="legend-style"
                        style={{
                          backgroundColor: '#FFCE56',
                        }}
                      ></span>
                      <span>Likes</span>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="text-end">
                <div className="mb-3 d-flex align-items-center justify-content-end">
                  <label htmlFor="filterDropdown" className="me-2 mb-0">
                    Time frame:
                  </label>
                  <select
                    id="filterDropdown"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="form-select w-auto"
                  >
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
              </Col>
            </Row>

            <LineChart
              xAxis={[{ data: currentData.xAxis }]}
              series={currentData.series.map((seriesData, index) => ({
                data: seriesData,
                color:
                  index === 0 ? '#f05133' : index === 1 ? '#00a0b0' : '#FFCE56',
                valueFormatter: (value) =>
                  value == null ? 'NaN' : value.toString(),
              }))}
              height={200}
              margin={{ top: 10, bottom: 20 }}
            />
          </div>
        </Col>
      </Row>
    </Col>
  )
}

export default Engagements_analytics
