import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import { Container } from 'react-bootstrap';
import DashboardTable from './dashboardpages/dashboardTable';
import DashboardCard from './dashboardpages/dashboardCards';

const Dashboard = () => {
  return (
    <div className='container'>
    
      <Container> 
        <DashboardCard />
      </Container>
      <Container>
      <CardGroup>
      <Card className="text-center">
        <Card.Header>Newly Added</Card.Header>
        <Card.Body>
          <Card.Title style={{ borderBottom: '2px solid black' }}>Latest Added from Tools</Card.Title>
          <DashboardTable />
        </Card.Body>
      
      </Card>
      </CardGroup>
      </Container>
    </div>

    
    

  );
}

export default Dashboard;