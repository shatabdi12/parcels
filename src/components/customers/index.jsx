import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PATH_BASE } from '../../constants'
import './index.css'

const Customers = () => {
  const [sender, setSender] = useState(null)

  useEffect(() => {
    fetch(PATH_BASE)
      .then(x => x.json())
      .then(y => {
        const uniqueItems = [...new Set(y.orders.map(x => x.sender))]
        setSender(uniqueItems)
      })
  }, [])

  return (
    <main>
      <h2 className="customer-label">Customers</h2>
      <div className="customer-container">
        {sender &&
          sender.map((customer, i) => (
            <div key={i} className="customer">
              <Link to={`/customer/${customer}`}>
                <span>{customer}</span>
              </Link>
            </div>
          ))}
      </div>
    </main>
  )
}
export default Customers
