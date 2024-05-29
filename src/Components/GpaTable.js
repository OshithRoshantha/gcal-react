import React from 'react'
import './GpaTable.css'
import Table from 'react-bootstrap/Table';

export default function GpaTable() {
  return (
    <div className='tableContainer'>
    <Table striped bordered hover variant="dark" size="sm">
      <thead>
        <tr>
          <th>Range of Marks</th>
          <th>Grade</th>
          <th>Grade Point Value (GPV)</th>
          <th>Attainment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>85-100</td>
          <td>A+</td>
          <td>4.00</td>
          <td rowSpan={3}>Superior</td>
        </tr>
        <tr>
          <td>70-84</td>
          <td>A</td>
          <td>4.00</td>
        </tr>
        <tr>
          <td>65-69</td>
          <td>A-</td>
          <td>3.70</td>
        </tr>
        <tr>
          <td>60-64</td>
          <td>B+</td>
          <td>3.30</td>
          <td rowSpan={3}>Meritorious</td>
        </tr>
        <tr>
          <td>55-59</td>
          <td>B</td>
          <td>3.00</td>
        </tr>
        <tr>
          <td>50-54</td>
          <td>B-</td>
          <td>2.70</td>
        </tr>
        <tr>
          <td>45-49</td>
          <td>C+</td>
          <td>2.30</td>
          <td rowSpan={3}>Adequate</td>
        </tr>
        <tr>
          <td>40-44</td>
          <td>C</td>
          <td>2.00</td>
        </tr>
        <tr>
          <td>35-39</td>
          <td>C-</td>
          <td>1.70</td>
        </tr>
        <tr>
          <td>30-34</td>
          <td>D+</td>
          <td>1.30</td>
          <td rowSpan={2}>Minimal</td>
        </tr>
        <tr>
          <td>25-29</td>
          <td>D</td>
          <td>1.00</td>
        </tr>
        <tr>
          <td>00-24</td>
          <td>E/F</td>
          <td>0.00</td>
          <td>Failure</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}
