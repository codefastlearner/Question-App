function printHighscores() {
    // either get scores from localstorage or set to empty array
    let highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
  
    // sort highscores by score property in descending order
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    for (var i = 0; i < highscores.length; i += 1) {
      // create li tag for each high score
      var liTag = document.createElement('li');
      liTag.textContent = highscores[i].initials + ' - ' + highscores[i].score;
  
      // display on page
      let olList = document.getElementById('highscores');
      olList.appendChild(liTag);
      
    }
  }
  
  function clearHighscores() {
    window.localStorage.removeItem('highscores');
    window.location.reload();
  }
  
  document.querySelector('#clear').onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();