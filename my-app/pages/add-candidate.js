import Navbar from '../components/Navbar/navbar';

export default function Candidates(){


  return(
    <div>
    <Navbar />
    <h1> Add Candidates</h1>
    <form>
      <label>
        Name:
        <input type="text" name="Name" />
      </label>
      <label>
        Email:
        <input type='text' name='Email' />
      </label>
      <label>
        Phone:
        <input type='text' name='Phone' />
      </label>
    </form>
    </div>
  )
}