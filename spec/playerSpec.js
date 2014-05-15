describe("Player", function() {
	var player;
	var song;

	beforeEach(function(){
		player = new Player();
		// song = new Song();
	});

	it("should start with a song", function() {
		expect(player.songLoaded("track1", "title")).toEqual("Light My Fire")
	});

	it("should skip to next song", function(){
		player.songLoaded("track1" , "title") ;
		player.skip(nextSong) ;
		expect(player.skip(nextSong)).toEqual() ;
	});

});