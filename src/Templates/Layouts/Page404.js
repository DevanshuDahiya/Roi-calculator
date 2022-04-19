import React from 'react'

function Page404() {
  return (
    <div className='container section'>
      <div className='row'>
        <div className='col-md-12' style={{ alignItems: 'center', justifyContent: 'center', display: 'flex',flexDirection:'column' }}>
          <h2>Error 404</h2>
          <br></br>
          <a href='#/' className='themeButton' style={{ width: '100%', marginTop: 20 }}>Go back home</a>
        </div>
      </div>
    </div>
  )
}

export default Page404