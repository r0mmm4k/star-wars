import React, { Component } from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi";
import Spinner from '../spinner/spinner';

export default class PersonDetails extends Component {

	swapiService = new SwapiService();

	state = {
		person: null,
		loading: false
	};

	componentDidMount() {
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId !== prevProps.personId) {
			this.updatePerson();
		}
	}

	updatePerson() {
		const {personId} = this.props;
		if (!personId) {
			return;
		}

		this.setState({loading: true});

		this.swapiService
			.getPerson(personId)
			.then((person) => {
				this.setState({person, loading: false});
			});
	}

	render() {

		const {person, loading} = this.state;
		 if (loading || !person) {
			return <Spinner/>
		}

		const {id, name, gender, birthYear, eyeColor} = person;

		return (
			<div className='person-details card'>
				<img className='person-image'
						 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
						 alt='character'/>

				<div className='card-body'>
					<h4>{name}</h4>
					<ul className='list-group list-group-flush'>
						<li className='list-group-item'>
							<span className='term'>Gender</span>
							<span>{gender}</span>
						</li>
						<li className='list-group-item'>
							<span className='term'>Birth Year</span>
							<span>{birthYear}</span>
						</li>
						<li className='list-group-item'>
							<span className='term'>Eye Color</span>
							<span>{eyeColor}</span>
						</li>
					</ul>
				</div>
			</div>
		)
	}
}