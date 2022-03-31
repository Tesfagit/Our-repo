let unclicked = true;
// This function toogles between 0 and 1 when you click buttons
function buttons() {
  if(unclicked)
  {
    unclicked = false;
    return 1;
  }
  else{
    unclicked = true;
    return 0;
  }
}

function para(){
  return "Hey Fre, the top Nav is sticky when you scroll up."+
  " And like, share,and dislike buttons increment,"+
   " when you click; take a look at it. Seeit on both phone and pc. Thank you! ";
}