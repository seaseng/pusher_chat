  
var pusher = new Pusher('f7c54d873cabf5731219');
var presenceChannel = pusher.subscribe('presence-channel_1');

$(document).ready(function() {
  // channel.bind('presence-channel_1', function(data_json) {
  //   console.log("inside binding function for adding user");
  //   add_member(data_json.id);
  //   console.log(data_json.message);
  // });

  presenceChannel.bind('pusher:subscription_error', function(response) {
    console.log('LOGIN, DUMBASS');
  });

  presenceChannel.bind('pusher:subscription_succeeded', function(response) {
    var me = presenceChannel.members.me;
    var userId = me.id;
    var name = me.info.name;

    presenceChannel.members.each(function(member) {
      $('.members').append('<p><a href="/game" class="member">' + member.info.name + '</a></p>');

    });
    // console.log(name);
  });

  $('.members').on('click', '.member', function(e) {
    e.preventDefault();
    // console.log('got to event');
    var symbol_arr = ['x', 'o'];
    presenceChannel.members.each(function(member) {
      member.info.game_symbol = symbol_arr.pop();
      console.log('Symbol: ' + member.info.game_symbol);
    });
  });
});
