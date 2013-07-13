  
var pusher = new Pusher('f7c54d873cabf5731219');
var presenceChannel = pusher.subscribe('presence-channel_1');

$(document).ready(function() {
  // channel.bind('presence-channel_1', function(data_json) {
  //   console.log("inside binding function for adding user");
  //   add_member(data_json.id);
  //   console.log(data_json.message);
  // });


presenceChannel.bind('pusher:subscription_error', function(response) {
  alert('LOGIN, DUMBASS')
});

presenceChannel.bind('pusher:subscription_succeeded', function(response) {
  var me = presenceChannel.members.me;
  var userId = me.id;
  var name = me.info.name;

    presenceChannel.members.each(function(member) {
      $('.members').append('<p><a href="/chat">' + member.info.name + '</a></p>');
    });
    // var userInfo = me.info;

    console.log(name);
  });

// presenceChannel.bind('pusher:member_added', function(member) {
//   // for example:
//   // add_member(member.id, member.info);
//   console.log("Im in here!");
// });

});

//
