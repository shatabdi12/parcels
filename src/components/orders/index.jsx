import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { PATH_BASE } from '../../constants'
import Parcel from './parcel'
import posed, { PoseGroup } from 'react-pose'
import './index.css'

const Orders = ({ match }) => {
  const sender = match.params.sender
  const [data, setData] = useState(null)
  const PosedContainer = posed.div({
    enter: { y: 0, opacity: 1, delay: 200 },
    exit: { y: -50, opacity: 0, transition: { duration: 200 } },
  })
  const [expandedParcels, setExpandedParcels] = useState([])
  const handleRowClick = parcelNumber => {
    if (expandedParcels.includes(parcelNumber))
      setExpandedParcels(expandedParcels.filter(n => n !== parcelNumber))
    else setExpandedParcels([...expandedParcels, parcelNumber])
  }

  useEffect(() => {
    fetch(PATH_BASE)
      .then(x => x.json())
      .then(y => {
        const totalOrders = y.orders.filter(item => {
          return item.sender === sender
        })
        setData(totalOrders)
      })
  }, [sender])
  return (
    <div>
      <h2 className="customer-label">{`${sender} Orders`}</h2>
      <PoseGroup>
        {data &&
          data.map(parcel => (
            <PosedContainer key={parcel.parcel_id}>
              <Parcel
                isViewExpanded={expandedParcels.includes(parcel.parcel_id)}
                onRowClick={handleRowClick}
                parcel={parcel}
              ></Parcel>
            </PosedContainer>
          ))}
      </PoseGroup>
    </div>
  )
}

Orders.propTypes = {
  match: PropTypes.object,
}
export default Orders
