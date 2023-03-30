import { query } from "../db/index.js";

export async function getContracts() {
    const res = await query("SELECT * FROM contracts;");
    return res.rows;
}

export async function getCandidates() {
    const res = await query("SELECT * FROM candidates;");
    return res.rows;
}


