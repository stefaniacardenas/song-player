function Player() {
	
};

Player.prototype.SONGS = {
		track1: {
			title: 'Light My Fire',
			artist: 'The Doors'
			},

		track2: {
			title: 'Grown so Ugly',
			artist: 'Black Keys'
		},
};

Player.prototype.songLoaded = function(song, details) {
	 var currentSong = this.SONGS[song][details]
	 return currentSong ;
};

Player.prototype.skip= function() {
	return this.currentSong += 1 ;
}