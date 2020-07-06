import React from 'react'
import ExpandableView from '.'
import { shallow } from 'enzyme'

describe('ExpandableView', () => {
  it('Should not contain notes', () => {
    const component = shallow(<ExpandableView parcel={{ notes: null }} />)
    expect(component.find('.notes').exists()).toEqual(false)
  })

  it('Should contain notes', () => {
    const component = shallow(<ExpandableView parcel={{ notes: 'abc' }} />)
    expect(component.find('.notes').exists()).toEqual(true)
  })
})
