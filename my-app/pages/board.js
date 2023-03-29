import contracts from '../lib/sample-data/contracts.json';
import candidates from '../lib/sample-data/candidates.json';
import Navbar from '../components/Navbar/navbar';
import ContractTable from '../components/ContractTable/contract-table'
// import { useState, useEffect } from 'react';


function board() {
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
  
    return (
        <div>
        <Navbar></Navbar>
        <h1>Contract Board</h1>
        <ContractTable contracts={contracts} candidates={candidates}></ContractTable>
        </div>
    )
}

export default board;
