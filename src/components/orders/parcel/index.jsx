import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import ExpandableView from './expandableView'
import './index.css'

const ExpandableBlock = posed.div({
  enter: {
    height: 'auto',
    delayChildren: 100,
    staggerChildren: 50,
    transition: { duration: 150 },
  },
  exit: {
    height: 0,
    delay: 150,
    staggerChildren: 50,
    transition: { duration: 150 },
  },
})
const Parcel = ({ isViewExpanded, onRowClick, parcel }) => {
  return (
    <div className="parcel">
      <div className="parcel-label" onClick={() => onRowClick(parcel.parcel_id)}>
        <strong>Parcel ID: </strong>
        {parcel.parcel_id}
      </div>

      <ExpandableBlock
        pose={isViewExpanded ? 'enter' : 'exit'}
        withParent={false}
        className={`${isViewExpanded ? 'Expanded' : ''}`}
      >
        <ExpandableView parcel={parcel} />
      </ExpandableBlock>
    </div>
  )
}
Parcel.propTypes = {
  isViewExpanded: PropTypes.bool,
  onRowClick: PropTypes.func,
  parcel: PropTypes.object,
}
export default Parcel
