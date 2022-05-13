//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.



function removeExclamationMarks(s) {
    if (s.includes("!")){
      return s.replace(/!/g, "") // replaceAll wouldn't work. googled to find "regular expression"
    };
    
  }