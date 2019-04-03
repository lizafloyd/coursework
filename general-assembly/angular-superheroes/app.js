let heroes = [
  {hero: 'Superman', number: '1-800-SON-KRYP', team: 'Justice League', photo_url: 'http://static4.comicvine.com/uploads/square_medium/1/14487/5377147-superman.jpg'},
  {hero: 'Hawkeye', number: '1-800-HAW-KEYE', team: 'Avengers', photo_url: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Hawkeye_2012_2.jpg'},
]
angular
  .module("phonebook", [])
  .controller("pbCtrl", [pbController])

  function pbController() {
    this.heroes = heroes

    this.newHero = ''
    this.addHero = function() {
      let hero = {hero: this.newHero.hero, number: this.newHero.number, photo_url: this.newHero.photo_url, team: this.newHero.team}
      this.heroes.push(hero)
      this.newHero = ''
    }
    this.var = false;
    this.toggleImage = function() {
      this.var = !this.var
    }
  }
