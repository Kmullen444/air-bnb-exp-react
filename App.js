import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import locations from './data'

function App () {
    const location = locations.map(location => {
       return ( 
           <Card
            key={location.id}
            location={location}
        />
     )})
    return (
        <div>
            <Header />
            {location}
        </div>
    )
}

export default App