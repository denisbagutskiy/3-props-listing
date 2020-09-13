import React from 'react'
import PropTypes from 'prop-types'
import ListingItem from './ListingItem'

function Listing({ items }) {
    return (
        items &&
        items.length > 0 &&
        <div className="item-list">
          {items.map((item) => 
            <ListingItem key={item.listing_id} item={item}></ListingItem>
          )}  
        </div>
    )
}

Listing.propTypes = {
    items: PropTypes.array
}

Listing.defaultProps = {
    items: []
}

export default Listing

