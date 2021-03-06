import React from 'react';
import ItemDetails from '../item-details/item-details';
import Record from '../record/record';
import withSwapiService from '../hoc-helper/with-swapi-service';
import compose from '../hoc-helper/compose';

const PersonDetails = (props) => {
	return (
		<ItemDetails  {...props}>

			<Record field='gender' label='Gender'/>
			<Record field='eyeColor' label='Eye Color'/>

		</ItemDetails>
	);
};

const mapMethodsToProps = (swapiService) => {
	return {
		getData: swapiService.getPerson,
		getImageUrl: swapiService.getPersonImage
	}
};

export default compose(withSwapiService(mapMethodsToProps))(PersonDetails);