const createKeccakHash = require("keccak");
const punycode = require("punycode/");

// Search for expiring names : https://dune.com/makoto/ens-released-to-be-released-names
// Unicode characters: https://unicode.org/Public/emoji/15.0/emoji-sequences.txt
// ENS register url (Uncode names): https://app.ens.domains/name/%F0%9F%A6%9F%F0%9F%A6%9F%F0%9F%A6%9F.eth/register
// ENS Search url : https://app.ens.domains/name/104.eth/details

// Check expiry: https://etherscan.io/address/0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85#readContract:nameExpires(keccak(name))

// Check domain validity: https://ethereum.stackexchange.com/questions/80454/how-can-i-find-all-registered-ens-domains-and-subdomains

const checkUrl = (name) => {
  console.log(
    "0x" +
      createKeccakHash("keccak256")
        .update(punycode.ucs2.encode(name))
        .digest("hex")
  );

  console.log(punycode.ucs2.encode(name));
};

checkUrl([0x1f99f, 0x1f99f, 0x1f99f]);
checkUrl([0x1f90e, 0x1f90e, 0x1f90e]);
checkUrl([0x1fabc, 0x1fabc, 0x1fabc]);
checkUrl([0x1f977, 0x1f977, 0x1f977]);

console.log(String.fromCodePoint(0x1f44b));
