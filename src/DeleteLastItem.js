import React from 'react';
import PropTypes from 'prop-types';

const DeleteLastItem = (props) => {
  
  	const handleDeleteLastItem = event => {
      	props.handleDeleteLastItem();
  	};
  
	return (
    	<button onClick={handleDeleteLastItem} disabled={props.noItemsFound()}>
          Delete Last Item
        </button>
    );
};

DeleteLastItem.propTypes = {
	noItemsFound: PropTypes.func.isRequired,
  	handleDeleteLastItem: PropTypes.func.isRequired,
}

export default DeleteLastItem;