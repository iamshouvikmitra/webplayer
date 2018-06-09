$('video').mediaelementplayer({
	pluginPath: 'https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.9/mediaelement-flash-video.swf',
	// All the config related to HLS
	hls: {
		debug: true
	},
	// More configuration parameters...

	success: function(media, node, instance) {
		// Use the conditional to detect if you are using `native_hls` renderer for that given media;
		// otherwise, you don't need it
		if (Hls !== undefined) {
			media.addEventListener(Hls.Events.MEDIA_ATTACHED, function () {
				// All the code when this event is reached...
				console.log('Media attached!');
			});

			// Manifest file was parsed, invoke loading method
			media.addEventListener(Hls.Events.MANIFEST_PARSED, function () {
				// All the code when this event is reached...
				console.log('Manifest parsed!');

			});

			media.addEventListener(Hls.Events.FRAG_PARSING_METADATA, function (event, data) {
				// All the code when this event is reached...
				console.log(data);
			});
		}
	}
});