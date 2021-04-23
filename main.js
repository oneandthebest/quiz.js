function check() {
  // document.write("result first step")

  var result = 0;
  var question1 = document.quiz.q1.value;
  var question2 = document.quiz.q2.value;
  var question3 = document.quiz.q3.value;
  var question4 = document.quiz.q4.value;
  var question5 = document.quiz.q5.value;
  var score = document.getElementById('score');
  var quiz = document.getElementById('quiz');
  var txt = "სცადე ხელახლა"

  if (question1 == 'correct') {
    result++;
  }
  if (question2 == 'correct') {
    result++;
  }
  if (question3 == 'correct') {
    result++;
  }
  if (question4 == 'correct') {
    result++;
  }
  if (question5 == 'correct') {
    result++;
  }
  // document.write(result++) second;
  quiz.style.display = 'none';
  // score.textContent = `${result}` third;




  if (result <= 3) {
    // score.textContent = `შენ აიღე ${result} ქულა. ${txt} `;


  // document.write("<p>" + txt.link("firstpg.html") + "</p>");
    document.write(`შენ აიღე ${result} ქულა. ` + txt.link("firstpg.html") + "</p>");

  } 
  else if (result==4) {
    // score.textContent = `შენი შედეგია ${result}. ბრავოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოო `;
    document.write(`შენ აიღე ${result} ქულა. ეს კარგი შედეგია. გამოსწორებისათვის ` + txt.link("firstpg.html") + "</p>");
  }
  else {
    // score.textContent = `შენი შედეგია ${result}. ბრავოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოოო `;
    document.write(`შენ აიღე ${result} ქულა. ეს ძალიან კარგი შედეგია. არ გჭირდება, მაგრამ რადგან შენსას არ იშლი ` + txt.link("firstpg.html") + "</p>"  + "<br>" + `<p><a href="battery.html"> თუ იცოდი, ტყუილად აწვალე შენი მოწყობილობა, შეამოწმე ბატარეა აქ!!!</a></p>`);
  }
}
