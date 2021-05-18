class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;
  constructor(
    index: number,
    hash: string,
    previouseHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previouseHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(
  0,
  "1123sadf12q3123fsd",
  "fjdsklasdfo1235234jkfoi123i",
  "data:asdfasdf123897",
  187
);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

/**
 * [
  Block {
    index: 0,
    hash: '1123sadf12q3123fsd',
    previousHash: 'fjdsklasdfo1235234jkfoi123i',
    data: 'data:asdfasdf123897',
    timestamp: 187
  }
]
 */

// blockchain.push("stuff") //Argument of type 'string' is not assignable to parameter of type 'Block'.

export {}; // export 선언안하면 버그가 생긴다.
