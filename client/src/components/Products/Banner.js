import React from 'react'

export default function Banner() {
  return (
    <div style={styler}>
      <h3 style={{ fontSize: "30px" }}><strong>$20 Order Minimum on Bulk Items</strong></h3>
      <p style={{ fontSize: "20px" }}>Orders over $49 ship free!</p>
    </div>
  )
}


const styler = {
  padding: '2.5%',
  margin: '0 7.5% 50px 7.5%',
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  fontFamily: 'Open Sans',
  background: 'linear-gradient(to right, #C5F4EF 15%, #8DAFC4)',
  fontWeight: 'bold'
}
