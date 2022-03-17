import React from 'react'

function Card (props) {
    const {location} = props
    return (
        <section className="card">
            <img src={location.imageUrl} className="card--img" />
            <div className="card--container">
                <div className="card--location">
                    <div className='card--location-contaier'>
                        <img src="./images/location-point.png" />
                        <p className="card--location-name">{location.location.toUpperCase()}</p>
                    </div>
                    <a href={location.googleMapsUrl} className="card--location-link" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="card--title bold">{location.title}</h1>
                <p className="card--date bold">{location.startDate} - {location.endDate} </p>
                <p className="card--desc">{location.description}</p>
            </div>
        </section>
    )
}

export default Card