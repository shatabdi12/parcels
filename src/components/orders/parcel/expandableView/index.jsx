import React from 'react'
import PropTypes from 'prop-types'
import pose from 'react-pose'
import { DateTime } from 'luxon'
import Address from '../../../address'
import { FormattedMessage } from 'react-intl'
import './index.css'

const ExpandableView = ({ parcel }) => {
  const InformationView = pose.div({
    enter: { x: 0, opacity: 1 },
    exit: { x: 1, opacity: 0 },
  })
  const date = DateTime.fromISO(parcel.last_updated).toFormat('yyyy-MM-dd HH:mm')

  return (
    <div className="Expandable-view">
      <InformationView className="InformationView">
        <strong>
          <FormattedMessage id="order_no"></FormattedMessage>:
        </strong>
        {parcel.id}
      </InformationView>
      <InformationView className="InformationView">
        <strong>ETA: </strong> {date}
      </InformationView>
      <InformationView className="InformationView">
        <Address
          latitude={parcel.location_coordinate_latitude}
          longitude={parcel.location_coordinate_longitude}
        />
      </InformationView>
      <InformationView className="InformationView">
        <strong>Parcel status: </strong>
        {parcel.status}
      </InformationView>
      {parcel.notes && (
        <InformationView className="InformationView notes">
          <strong>Notes: </strong> {parcel.notes}
        </InformationView>
      )}
    </div>
  )
}

ExpandableView.propTypes = {
  parcel: PropTypes.object,
}
export default ExpandableView
