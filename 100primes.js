#!/usr/bin/env node
var fs = require('fs');
var outfile = "100primes.txt";
var out = "";
var num_primes = 1000000;

function isPrime (candidate, list_primes) {
  var index = 0;
  var longi = list_primes.length;

  while (index < longi) {
    if (Math.floor(candidate / list_primes[index]) == candidate / list_primes[index]) return false;
    index++;
  } 
  return true;
}

var candid = 1;
var primes = new Array();
var len = 0;
var start = Date.now();
var intermediate = start;
var intermediate2 = new Date();

do {
  candid++;
  if (isPrime(candid, primes)) {
    primes.push(candid);
    out = out + candid;
    if (len < num_primes - 1) out = out + ", ";
    len++;
    if (Math.floor(len / 10000) == len / 10000) {
      intermediate2 = Date.now()
      console.log("Elapsed time "+ len + " primes: " + String((intermediate2 - intermediate)/1000) + " sec. (Total: " + String((intermediate2 - start)/1000) + " sec.)");
      intermediate = intermediate2;
    }
  }
} while (len < num_primes)

var calculi = Date.now();
console.log("Total elapsed time calculi: " + String((calculi - start)/1000) + " seconds\n");

fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + len + " primes to: " + outfile);
 
var end = Date.now();
console.log("Elapsed time writting file: " + String((end - calculi)/1000) + " seconds\n");
