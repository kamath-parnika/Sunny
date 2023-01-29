function callOPENAI(inp) {
  var url = "https://api.openai.com/v1/completions";

  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);

  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Authorization", "Bearer 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");

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
      console.log(xhr.responseText);
    }
  };

  xhr.onload = function() {
  //alert ("Response received"+xhr.responseText);
  }

  var data = JSON.stringify({model:"text-davinci-003",prompt:"You: "+inp+"?\nMarv:",temperature:0.5,max_tokens:60,top_p:0.3,frequency_penalty:0.5,  presence_penalty:0.0});
//alert(data);
 // var data = JSON.stringify(model:"text-davinci-003",prompt:"You: What time is it?\nMarv:\n", temperature:0.5, max_tokens:60,top_p:0.3,frequency_penalty:0.5,presence_penalty:0.0);

  xhr.send(data);

  var outtxt = JSON.parse(xhr.responseText);
  var outtxt2 = JSON.parse(JSON.stringify(outtxt.choices[0]));
  return (outtxt2.text);
  //return (xhr.responseText);
}

