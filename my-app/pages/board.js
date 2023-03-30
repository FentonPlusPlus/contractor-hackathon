import contracts from '../lib/sample-data/contracts.json';
// import candidates from '../lib/sample-data/candidates.json';
import { getCandidates } from '../lib/anything.js';
import Navbar from '../components/Navbar/navbar';
import ContractTable from '../components/ContractTable/contract-table'


export async function getServerSideProps() {
    const candidates = await getCandidates();
    return {
        props: {
          candidates,
        }
    }
}

function board(props) {
    // const [contracts, setContracts] = useState(jobs);
    // console.log(contracts);
    // useEffect(() => {
    //     async function getContracts() {
    //         console.log('fetching contracts');
    //         const response = await fetch('../lib/sample-data/contracts.json', {
    //           headers: {
    //             Accept: 'application/json',
    //           },
    //         });
    //         const data = await response.json();
    //         setContracts(data);
    //         console.log(data);
    //       }
    //       getContracts();
    // }, []);
    const newCandidates = props.candidates;
    return (
        <div>
        <Navbar></Navbar>
        <h1 style={{marginLeft: '5rem'}}>Contract Board</h1>
        <ContractTable contracts={contracts} candidates={newCandidates}></ContractTable>
        </div>
    )
}

export default board;