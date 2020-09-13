import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

function ListingItem({ item }) {
    const quantityClass = classnames('item-quantity', 
        item.quantity < 10 ? 'level-low' :
        item.quantity < 20 ? 'level-medium' : 'level-high');
    return (
        item.state === 'active' &&
        <div className="item">
            <div className="item-image">
                <a href={item.url}>
                    <img src={item.MainImage.url_570xN} alt={item.title}></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{item.title.length > 50 ? item.title.substring(50).concat('...') : item.title}</p>
                <p className="item-price">
                    {item.currency_code === 'USD' ? '$' : item.currency_code === 'EUR' ? '€' : item.currency_code.concat(' ')}
                    {item.price}
                </p>
                <p className={quantityClass}>{item.quantity} left</p>
            </div>
        </div>
    )
}

ListingItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string,
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
        MainImage: PropTypes.shape({
            url_570xN: PropTypes.string
        })
    })
}

export default ListingItem

