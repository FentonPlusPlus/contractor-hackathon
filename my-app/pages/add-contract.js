import Navbar from '../components/Navbar/navbar';


export default function AddContract(){
  return(
    <div>
    <Navbar />
    <h1> Add a Contract</h1>
    <form>
      <label>
        Company:
        <input type="text" name="Company" />
      </label>
      <label>
        Job Title:
        <input type='text' name='Job Title' />
      </label>
      <label>
        Start Date:
        <input type='text' name='Start Date' />
      </label>
      <label>
        End Date:
        <input type='text' name='End Date' />
      </label>
      <label>
        Contact:
        <input type='text' name='Contact' />
      </label>
      <button type='submit'>Submit</button>
    </form>
    </div>
    
  )}
