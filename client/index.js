const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const name = "Beth Stracke";
  const index = niceList.findIndex(n => n === name);
  const mTree = new MerkleTree(niceList);
  const proof = mTree.getProof(index);



  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    proof: JSON.stringify(proof),
    name: name
  });

  console.log({ gift });
}

main();