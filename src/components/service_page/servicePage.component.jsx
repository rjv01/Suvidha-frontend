//Class
import React, { useState } from 'react';
import {
  // Button,
  Label,
  Input,
  Modal,
  ModalBody,
  Card,
  CardImg,
  CardText,
  CardBody,
} from 'reactstrap';
import styles from './servicePage.module.css';

import Frame from '../../assests/Frame.png';
import profile_star from '../../assests/profile_star.png';
import axios from 'axios';


const Stars = ({ n }) => {
  let stars = [];
  for (let i = 1; i <= n; ++i) {
    stars.push(<img src={profile_star} key={i} alt='rating'></img>);
  }

  return <div className='Stars'>{stars}</div>;
};

const WorkProfile = ({ name, experience, type, bookings, charge, rating,location }) => {
  const [state, setState] = useState({
    isModalOpen: false,
    isModalOpen1: false,
    profileImg: 'assests/profile.PNG',
  });

  const { isModalOpen, isModalOpen1, profileImg } = state;

  const toggleModal = () => {
    setState({
      ...state,
      isModalOpen: !isModalOpen,
    });
  };

  const toggleModal1 = () => {
    setState({
      ...state,
      isModalOpen1: !isModalOpen1,
    });
  };

  var uid = JSON.parse(localStorage.getItem("userData"));
  uid = uid.userId


  return (
    <div>
      <div className={styles.work_profile}>
        <div className={styles.profile_intro}>
          <div className={styles.profile_img}>
            <img id={styles.profile_image} src={Frame} alt='profile-img' />
          </div>
          <div className={styles.profile_rating}>
            {rating && <Stars n={rating} /> }
           
          </div>
        </div>
        <div className={styles.profile_details}>
          <div className={styles.profile_info}>
            <div className={styles.profile_data}>Name: {name}</div>
            <div className={styles.profile_data}>
              Experience: {experience} Years
            </div>
            <div className={styles.profile_data}>Type: {type}</div>
            <div className={styles.profile_data}>
              Bookings Completed: {bookings}
            </div>
            <div className={styles.profile_data}>
              Estimate Charge: {charge}/hr
            </div>
            <div className={styles.profile_data}>
              Location: {location}
            </div>
          </div>
          <div className={styles.profile_book}>
            <button className={styles.profile_btn} id={styles.btn1}>
              More Details
            </button>

            <button
              className={styles.profile_btn}
              id={styles.btn2}
              onClick={toggleModal}
            >
              Book Service
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalBody>
          <div>
            <Card>
              <CardImg top width='100%' src={profileImg} alt='Profile Image' />
              <CardBody>
                <CardText>
                  <p>Name: {name}</p>
                  <p>Type of worker: {type}</p>
                  <p>Charges: {charge}/hr</p>
                  <p>Experience: {experience} Years</p>
                  <p>No of. Booking Completed: {bookings}</p>
                  <p>Location: {location}</p>
                </CardText>
                <center>
                  <button
                    onClick={() => {
                      toggleModal();
                      toggleModal1();
                    }}
                  >
                    Book Service
                  </button>
                </center>
              </CardBody>
            </Card>
          </div>
        </ModalBody>
      </Modal>
      <Modal isOpen={isModalOpen1} toggle={toggleModal1}>
        <ModalBody>
          <div>
            <Card>
              <CardText>
                <center>
                  Preview the confirmation detail of booking done like the work
                  and when the work is needed
                  <br />
                  <br />
                  So only view of the confirmation preview is to be shown
                </center>
              </CardText>
              <br />
              <center>
                <Label check>
                  <Input type='checkbox' name='agree' />{' '}
                  <strong>Accept T&C</strong>
                </Label>
                <br />
                <br />
              </center>
              <center>
                <form action='../../../../book_services' method='post'>
                  <div style={{ display: `none` }}>
                    <input type='text' value={name} name='name' />
                    <input type='text' value={type} name='type' />
                    <input type='text' value={location} name='location' />
                    <input type='text' value={charge} name='charge' />
                    <input type='text' value={experience} name='experience' />
                    <input type='text' value={bookings} name='bookings' />
                    <input type='text' value={'+916423846823'} name='contact' />
                    <input type='text' value={uid} name='id' />
                  </div>
                  <button type='submit'>Confirm Booking</button>
                </form>
              </center>
            </Card>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

class ServicePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      workers: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getWorker = this.getWorker.bind(this);
  }

  // handleChange = (event) => {
  //   const value = event.target.value;
  //   this.setState({
  //     query: value,
  //   });
  // };

  //updated
  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };
  

  // handleSubmit = (event) => {
  //   const query = this.state.query;
  //   alert(`You search for "${query}"`);
  //   this.setState({
  //     query: '',
  //   });
  //   event.preventDefault();
  // };

  //updated
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   const { query } = this.state;
    
  //   console.log(this.state);
  //   const filteredWorkers = this.state.workers.filter(worker => {
  //     return (
  //       worker.name.toLowerCase().includes(query.toLowerCase()) ||
  //       worker.location.toLowerCase().includes(query.toLowerCase()) ||
  //       worker.type_of_work.toLowerCase().includes(query.toLowerCase()) 
        
  //     );
  //   });
  //   this.setState({
  //     workers: filteredWorkers,
  //     query: '',
  //   });
  //   if (filteredWorkers.length === 0) {
  //     alert("No result found");
  //   }
  // };

  handleSubmit = async(event) => {
  event.preventDefault();
  const res = await axios.get('/workers');
  const { query } = this.state;
  const span = res.data;
  console.log(span);
  const filteredWorkers = span.filter(worker => {
    return (
      worker.name.toLowerCase().includes(query.toLowerCase()) ||
      worker.location.toLowerCase().includes(query.toLowerCase()) ||
      worker.type_of_work.toLowerCase().includes(query.toLowerCase())              
    );
  });
  this.setState({
    workers: filteredWorkers,
    query: '',
  });
  if (filteredWorkers.length === 0) {
    alert("No result found");
  }
};

  
  
  

  getWorker = async () => {
    try {
      const res = await axios.get('/workers');
      // console.log("response from the server : ");
      // console.log(res.data);
      this.setState({ workers: res.data });
      // console.log(res.data);
      console.log(this.state.workers);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  componentDidMount() {
    this.getWorker();
  }


  render() {
    // this.getWorker();
    return (
      <div id={styles.service_page}>
        {/* <nav className={styles.nav_bar} /> */}
        <h2 className={styles.heading}>Our Best Services</h2>
        <div className={styles.search_div}>
          <input
            className={styles.search_bar}
            name='query'
            onChange={this.handleChange}
            value={this.state.query}
            placeholder='Enter the query field'
          />
          <button
            className={styles.search_btn}
            onClick={this.handleSubmit}
            type='submit'
          >
            Search
          </button>
        </div>
        {/* This have to be removed */}
        <div className={styles.profle_div}>
          <div className={styles.profile_sort}>
            <select name='type' id={styles.sort}>
              <option value=''>Sort By</option>
              <option value='name'>Name</option>
              {/* <option value='experience'>Experience</option> */}
              <option value='type'>Type</option>
              <option value='type'>Location</option>
              {/* <option value='charge'>Charge</option> */}
            </select>
          </div>

          {/* Add as many WorkProfile component by passing props */}
          {this.state.workers.map((worker) => (
            <WorkProfile key={worker._id}
              name={worker.name}
              experience={worker.experience}
              type={worker.type_of_work}
              bookings=''
              charge={worker.cost_of_work}
              rating={worker.feedback ? worker.feedback.rating : null}

              ////////////##########################//////////////
              location={`${worker.address}`}
            />
          ))}
          <WorkProfile
            name='Test'
            experience='2'
            type='Barber'
            bookings='23'
            charge='100'
            rating='5'
            location='Bhopal'
          />
          <WorkProfile
            name='Test'
            experience='2'
            type='Barber'
            bookings='23'
            charge='100'
            rating='5'
            location='Bhopal'
          />
          <WorkProfile
            name='Test'
            experience='2'
            type='Barber'
            bookings='23'
            charge='100'
            rating='5'
            location='Bhopal'
          />
          <WorkProfile
            name='Test'
            experience='2'
            type='Barber'
            bookings='23'
            charge='100'
            rating='5'
            location='Bhopal'
          />
          <WorkProfile
            name='Test'
            experience='2'
            type='Barber'
            bookings='23'
            charge='100'
            rating='5'
            location='Bhopal'
          />
          <WorkProfile
            name='Test'
            experience='2'
            type='Barber'
            bookings='23'
            charge='100'
            rating='5'
            location='Bhopal'
          />
          <WorkProfile
            name='Test'
            experience='2'
            type='Barber'
            bookings='23'
            charge='100'
            rating='5'
            location='Bhopal'
          />
          <WorkProfile
            name='Test'
            experience='2'
            type='Barber'
            bookings='23'
            charge='100'
            rating='5'
            location='Bhopal'
          />
          <WorkProfile
            name='Test'
            experience='2'
            type='Barber'
            bookings='23'
            charge='100'
            rating='5'
            location='Bhopal'
          />
        </div>
      </div>
    );
  }
}

export default ServicePage;
