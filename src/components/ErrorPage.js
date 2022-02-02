import React from 'react'
import {NavLink} from 'react-router-dom'
const ErrorPage = () => {
    return (
       <>
  <section class="error_section">
      <p class="error_section_subtitle">Opps Page is not available !</p>
      <h1 class="error_title">
        <p>404</p>
        404
      </h1>
      <NavLink to="/">Back to home</NavLink>
    </section>

       </>
    )
}

export default ErrorPage
