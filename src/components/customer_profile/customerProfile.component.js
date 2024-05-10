import React, { useState } from "react";
import { UserAuth } from "./../../userContext";
import "./customerProfile.style.css";
import edit_button from "../../assests/edit_button.png";




// const [a,setA] = useState("")
const OtherInfo = ({
	info,
	name,
	editable,
	editableName,
	handleChange,
	handleSubmit,
	changeInfo,
	myfun
}) => {
	return (
		<>
			{editable ? (
				<div className="other-info">
					<input
						name={name}
						type="text"
						value={info}
						className="edit-input"
						onChange={handleChange}
					/>
					<input
						name={editableName}
						className=""
						onClick={() => { handleSubmit(); myfun(); }}
						type="button"
						value="OK"
					/>
				</div>
			) : (
				<div className="other-info">
					<div className="info-title">{info}</div>
					<input
						name={editableName}
						className="edit-button"
						onClick={changeInfo}
						type="image"
						alt="Login"
						src={edit_button}
					></input>
				</div>
			)}
		</>
	);
};

class CustomerProfile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			info1: "Other info",
			info2: "Other info",
			info3: "Other info",
			info4: "Other info",
			editable1: false,
			editable2: false,
			editable3: false,
			editable4: false,
		};
	}

	changeInfo = (event) => {
		this.setState({
			[event.target.name]: true,
		});

		console.log(event.target.name);
	};

	handleChange = (event) => {
		const val = event.target.value;
		this.setState({
			[event.target.name]: val,
		});
	};


	myfun = ()=>{
		console.log("used my fun")
	}

	handleSubmit = (event) => {
		this.setState({
			[event.target.name]: false,
		});
	};



	




	static contextType = UserAuth;
	render() {
		const { info1, info2, info3, info4 } = this.state;
		const { editable1, editable2, editable3, editable4 } = this.state;
		// const { isCustomer, isWorker, user, token } = this.context;
		console.log(this.context);

		
		const af = JSON.parse( localStorage.getItem("userData"));
		// console.log(af.userId)
		let dataa = {id:af.userId}

		const res = async()=>{

									await fetch(`http://localhost:5000/nam`, {
									method: 'POST',
									headers: {
									'Content-Type': 'application/json'
									},
									body : JSON.stringify(dataa)
							})
							.then(response => {
								if (!response.ok) {
								throw new Error('Network response was not ok');
								}
								return response.json();
							})
							.then(data => {
								dataa = data.userName
								return(data.userNam)
								// console.log(data.userName);
							})
							.catch(error => {
								// Handle errors here
								console.error('There was a problem with the fetch operation:', error);
							});
		}
		return (
			<div>
				<div className="customer-profile">
					<h2 className="profile-heading">Your profile</h2>

					<div className="section-one">
						<div className="profile-detail">
							<div className="profile-image">
								{/* <img alt="profile"></img> */}
							</div>

							<div className="update-image">
								<input
									type="file"
									className="update-button"
									title="upload image"
									accept="image/*"
								/>
							</div>

							<div className="profile-info">
								<div className="overlap"></div>

								<OtherInfo
									info={info1}
									name="info1"
									editable={editable1}
									editableName="editable1"
									handleChange={this.handleChange}
									handleSubmit={this.handleSubmit}
									changeInfo={this.changeInfo}
								/>

								<OtherInfo
									info={info2}
									name="info2"
									editable={editable2}
									editableName="editable2"
									handleChange={this.handleChange}
									handleSubmit={this.handleSubmit}
									changeInfo={this.changeInfo}
								/>

								<OtherInfo
									info={info3}
									name="info3"
									editable={editable3}
									editableName="editable3"
									handleChange={this.handleChange}
									handleSubmit={this.handleSubmit}
									changeInfo={this.changeInfo}
								/>

								<OtherInfo
									info={info4}
									name="info4"
									editable={editable4}
									editableName="editable4"
									handleChange={this.handleChange}
									handleSubmit={this.handleSubmit}
									changeInfo={this.changeInfo}
								/>
							</div>
						</div>
						<div className="service-used">
							<h3 className="service-heading">SERVICES USED</h3>
							<div className="service-box">
								<div className="service-logo">Service Logo</div>
								<div className="service-name service-font">Service Name</div>
								<div className="service-status service-font">
									Service Status
									<br />{" "}
									<a href="www" id="service-link">
										Know More
									</a>
								</div>
							</div>
							<div className="service-box">
								<div className="service-logo">Service Logo</div>
								<div className="service-name service-font">Service Name</div>
								<div className="service-status service-font">
									Service Status
									<br />{" "}
									<a href="www" id="service-link">
										Know More
									</a>
								</div>
							</div>
							<div className="service-box">
								<div className="service-logo">Service Logo</div>
								<div className="service-name service-font">Service Name</div>
								<div className="service-status service-font">
									Service Status
									<br />{" "}
									<a href="www" id="service-link">
										Know More
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className="section-two">
						<div className="featured-photo">
							<h3 className="featured-heading heading">Featured Photos:-</h3>
							<div className="grid">
								<div className="grid-box"></div>
								<div className="grid-box"></div>
								<div className="grid-box"></div>
								<div className="grid-box"></div>
								<div className="grid-box"></div>
								<div className="grid-box"></div>
								<div className="grid-box"></div>
								<div className="grid-box"></div>
								<div className="grid-box"></div>
							</div>
						</div>
						<div className="reviews">
							<h3 className="reviews-heading heading">Reviews</h3>
							<div className="reviews-list">
								<div className="reviews-box">
									Review given to you by particular worker who you employed
									(this will not be there for the individual)
								</div>
								<div className="reviews-box">
									Review given to you by particular worker who you employed
									(this will not be there for the individual)
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CustomerProfile;
