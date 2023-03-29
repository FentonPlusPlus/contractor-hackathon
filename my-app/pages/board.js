import contracts from '../lib/sample-data/contracts.json';
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
        <h1>My Job Board</h1>
        <ContractTable contracts={contracts}></ContractTable>
        </div>
    )
}

export default board;
