/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed 
of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical 
structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"
The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be 
valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.*/

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    //codewars won't accept "replaceAll" so must iterate through entire string
    for(let i=0; i<dna.length; i++){
      //replace each occurrence
      dna = dna.replace("T", "U") //error was not redeclaring the variable. fixed now
    }
    return dna
  }