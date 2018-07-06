import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props) {
  let optionalSelectedBeer = null;
  if (props.selectedBeer != null) {
    
  }
  console.log(props.beertList);
  return (
    <div>
      {props.beerList.map((beer) =>

        <Beer
          name={beer.name}
          brewer={beer.brewer}
          description={beer.description}
          abv={beer.abv}
          price={beer.price}
          remaining={beer.remaining}
          key={beer.id}
          onBeerSelection={props.onBeertSelection}/>
        )}
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
  onBeerSelection: PropTypes.func.isRequired,
  selectedBeer: PropTypes.object
};

export default BeerList;
