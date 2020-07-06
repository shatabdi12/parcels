import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Geocode from 'react-geocode'
import { GEO_API } from '../../constants'

const Address = ({ latitude, longitude }) => {
  const [address, setAddress] = useState('')

  Geocode.fromLatLng(latitude, longitude, GEO_API).then(
    response => {
      setAddress(response.results[0].formatted_address)
    },
    error => {
      console.error(error)
    }
  )
  return (
    <div>
      <strong>Pick up Location: </strong> {address}
    </div>
  )
}
Address.propTypes = {
  latitude: PropTypes.string,
  longitude: PropTypes.string,
}
export default Address
