var pushern = new Pusher('f7c54d873cabf5731219');
var channel = pusher.subscribe('chat_channel');

$(document).ready(function() {
  channel.bind('my-event', function(data) {
    alert('An event was triggered with message: ' + data.message);
  });
});
