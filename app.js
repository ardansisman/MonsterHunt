new Vue({
  el: "#app",
  data: {
    player_health: 100,
    monster_health: 100,
    game_is_on: false,
  },
  methods: {
    start_game: function () {
      this.game_is_on = true;
    },
    attack: function () {
      var point = Math.ceil(Math.random() * 10);
      this.monster_health -= point;
      this.monster_attack();
    },

    special_attack: function () {
      var point = Math.ceil(Math.random() * 25);
      this.monster_health -= point;
      this.monster_attack();
    },
    heal_up: function () {
      var point = Math.ceil(Math.random() * 20);
      this.player_health += point;
      this.monster_attack();
    },
    give_up: function () {
      this.player_health = 0;
    },

    monster_attack: function () {
      var point = Math.ceil(Math.random() * 15);
      this.player_health -= point;
    },
  },
  watch: {
    player_health: function (value) {
      if (value <= 0) {
        this.player_health = 0;
        if (confirm("You lost! Do you want to play again?")) {
          this.player_health = 100;
          this.monster_health = 100;
        }
      } else if (value > 100) {
        this.player_health = 100;
      }
    },
    monster_health: function (value) {
      if (value <= 0) {
        this.monster_health = 0;
        if (confirm("You won! Do you want to play again?")) {
          this.player_health = 100;
          this.monster_health = 100;
        }
      } else if (value > 100) {
        this.monster_health = 100;
      }
    },
  },
});
