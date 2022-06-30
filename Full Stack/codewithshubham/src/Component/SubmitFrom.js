import React from 'react';
import "./SubmitFrom.css";

const SubmitFrom = () => {
  return (
      <section>
    <div className="container">
    <form
      action="https://formspree.io/f/xdobevlv"
      method="post"
      id="my-form"
      target='_blank'
    >
      <div className="from-grop">
        <label >First Name</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>
      <div className="from-grop">
        <label >Last Name</label>
        <input type="text" id="lName" name="lName" required />
      </div>
      <div className="from-grop">
        <label >Email</label>
        <input type="email" id="emil" name="email" required />
      </div>
      <div className="from-grop">
        <label >Massage</label>
        <textarea
          name="Massage"
          id="Massage"
          cols="30"
          rows="10"
          required
        ></textarea>
      </div>
      <button id="button" type="submit">Submit</button>
    </form>
  </div>
  </section>
  )
}

export default SubmitFrom;