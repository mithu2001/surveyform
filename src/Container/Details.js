import React from 'react'

function Details(props) {
  return (
    <div className='container card p-3 mt-3 details-container'>
    <form onSubmit={props.submit}>
        
        <div className='form-group'>
            <label htmlFor="name">1.Name </label>
            <input type="text" name='name' required className='form-control' placeholder='Please Enter your Name' />
        </div>
        <div className='form-group'>
            <label htmlFor="email">2.Email </label>
            <input type="email" name='email' required className='form-control' placeholder='Please Enter your Email'/>
        </div>
        <br />
        <button type='submit' className='btn btn-primary mt-2px'>Next</button>
        
    </form>

</div>
  )
}

export default Details