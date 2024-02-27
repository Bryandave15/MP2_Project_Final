import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const DashboardCard = () => {
  const [counts, setCounts] = useState({
    meeting: 0,
    structural: 0,
    todo: 0,
    schedule: 0,
    archi: 0,
    mefps: 0,
    asbuilt: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          meetingData,
          structuralData,
          todoData,
          scheduleData,
          archiData,
          mefpsData,
          asbuiltData
        ] = await Promise.all([
          fetch('http://localhost:5000/get-meeting-data').then(response => response.json()),
          fetch('http://localhost:5000/get-structural-data').then(response => response.json()),
          fetch('http://localhost:5000/get-todo-data').then(response => response.json()),
          fetch('http://localhost:5000/get-schedule-data').then(response => response.json()),
          fetch('http://localhost:5000/get-archi-data').then(response => response.json()),
          fetch('http://localhost:5000/get-mefps-data').then(response => response.json()),
          fetch('http://localhost:5000/get-asbuilt-data').then(response => response.json()),
        ]);

        const newCounts = {
          meeting: meetingData.length,
          structural: structuralData.length,
          todo: todoData.length,
          schedule: scheduleData.length,
          archi: archiData.length,
          mefps: mefpsData.length,
          asbuilt: asbuiltData.length,
        };

        setCounts(newCounts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <CardGroup className='bg-light mb-2 text-center'>
        <Card className='bg-secondary me-1'>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Meetings</Card.Title>
            <Card.Text>
              Total number of meetings: {counts.meeting}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Last updated: {/* Display your desired static message here */}</small>
          </Card.Footer>
        </Card>
        <Card className='bg-secondary me-1'>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Drawings</Card.Title>
            <Card.Text>
              Total number of drawings: {counts.structural + counts.archi + counts.mefps + counts.asbuilt}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Last updated: {/* Display your desired static message here */}</small>
          </Card.Footer>
        </Card>

        <Card className='bg-secondary me-1'>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Inspection</Card.Title>
            <hr/>
            <Card.Text>
              Total number of inspections: {counts.todo}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Last updated: {/* Display your desired static message here */}</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <CardGroup className='bg-light mb-2 text-center'>
        <Card className='bg-secondary me-1'>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Schedule</Card.Title>
            <Card.Text>
              Total number of schedules: {counts.schedule}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Last updated: {/* Display your desired static message here */}</small>
          </Card.Footer>
        </Card>
        <Card className='bg-secondary me-1'>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Drawings</Card.Title>
            <Card.Text>
              Total number of drawings: {counts.structural + counts.archi + counts.mefps + counts.asbuilt}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Last updated: {/* Display your desired static message here */}</small>
          </Card.Footer>
        </Card>

        <Card className='bg-secondary me-1'>
          <Card.Img variant="top" src="" />
          <Card.Body>
            <Card.Title>Inspection</Card.Title>
            <hr/>
            <Card.Text>
              Total number of inspections: {counts.todo}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"> Last updated: {/* Display your desired static message here */}</small>
          </Card.Footer>
        </Card>
        {/* Add other cards similarly */}
      </CardGroup>
    </Container>
  );
}

export default DashboardCard;
