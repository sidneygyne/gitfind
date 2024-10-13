import React from 'react'
import "./styles.css"
import Button from '../Button'

export default function ItemList( {title, description, html_url, homepage, } ) {
  return (
    <div className='item-list'>
        <strong>{title}</strong>
        <p>{description}</p>
        <div>

        <span>
          <a href={html_url} target='blank'>
          <Button text = 'Repositório'></Button>
          </a>
        </span>

        <span>
          <a href={homepage} target='blank'>
            <Button text = 'Ir para página'></Button>
          </a>
        </span>

        </div>
        <hr />
    </div>
  )
}
