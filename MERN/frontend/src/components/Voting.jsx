import React from 'react'
import "./voting.css"

const Voting = () => {
  return (
    <div>
       <div class="container">
      <div class="box">
        <h2>Party Invitation</h2>
        <form>
          <label for="partyName">Party Name:</label>
          <input type="text" id="partyName" name="partyName" required />
          <br />
          <button type="submit" class="submit-btn">Add</button>
          <button type="button" class="remove-btn">Remove</button>
        </form>
      </div>

      <div class="box">
        <h2>Your Information</h2>
        <form>
          <label for="yourName">Your Name:</label>
          <input type="text" id="yourName" name="yourName" required />
          <br />
          <label for="email">Email ID:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <button type="submit" class="submit-btn">Add</button>
          <button type="button" class="remove-btn">Remove</button>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Voting