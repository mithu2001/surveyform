import React from 'react'

function Question(props) {
  return (
    <div className='container card p-3 mt-3 details-container'>
    <form onSubmit={props.submit}>
        
        <div className='form-group'>
            <label htmlFor="name">3.What are you currently doing ? </label>
            
            <br />
           <span> 
            <input type="radio" name='q1' id="teaching" value="teaching" autoComplete='off'/>
            <label htmlFor="teaching">Teaching</label>

            <input type="radio" name='q1' id="student" value="student" autoComplete='off'/>
            <label htmlFor="student">Student</label>

            <input type="radio" name='q1' id="programmer" value="programmer" autoComplete='off'/>
            <label htmlFor="programmer">Programmer</label>

            <input type="radio" name='q1' id="other" value="other" />
            <label htmlFor="other">Other</label>

            </span>
            <input type="text" className='form-control' disabled autoComplete='off' placeholder='Type here if not listed'/>
        </div>
        <div className='form-group'>
            <label htmlFor="email">4. Please rate our course</label><br />
            <span>
            <input type="radio" name='q2' id="poor" value="poor" />
            <label htmlFor="poor">Poor</label>

            <input type="radio" name='q2' id="good" value="good" />
            <label htmlFor="good">Good</label>

            <input type="radio" name='q2' id="excellent" value="excellent" />
            <label htmlFor="excellent">Excellent</label>
            </span>
            <br />
            <label htmlFor="textarea">5. Write Your Review</label><br />
            
            <textarea className="form-control" name='q3' id="exampleFormControlTextarea1"  rows="3"></textarea>
        </div>
        <br />
        <button type='submit' className='btn btn-primary mt-2px'>Save</button>
        
    </form>

</div>
  )
}

export default Question