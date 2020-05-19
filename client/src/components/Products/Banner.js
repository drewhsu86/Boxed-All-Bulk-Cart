import React from 'react'

export default function Banner() {
  return (
    <div style={styler}>
      <h3 style={{ fontSize: '1.3rem' }}><strong>$20 Oder Minimum on Bulk Items</strong></h3>
      <p>Orders over $49 ship free!</p>
    </div>
  )
}


const styler = {
  padding: '2.5%',
  margin: '1.5% 7.5%',
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  fontFamily: 'Open Sans',
  background: 'linear-gradient(to right, #C5F4EF 15%, #8DAFC4)',
  fontSize: "0.8rem",
  fontWeight: 'bold'
}
