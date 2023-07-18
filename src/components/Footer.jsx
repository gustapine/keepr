import React from 'react'

const date = new Date();
const curretTime = date.getFullYear();

const Footer = () => {
  return (
    <div class="footer">Gustavo Dias © {curretTime}</div>
  )
}

export default Footer