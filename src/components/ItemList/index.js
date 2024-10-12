import React from 'react'
import "./styles.css"

export default function ItemList( {title, description, html_url, homepage} ) {
  return (
    <div className='item-list'>
        <strong>{title}</strong>
        <p>{description}</p>
        <div>

        <span class=""><a href={html_url} target='blank'><button class="">Repositório</button></a></span>
        <span class=""><a href={homepage} target='blank'><button class="">Ir para página</button></a></span>

        </div>
        <hr />
    </div>
  )
}
