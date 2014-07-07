var Kommunicatorapp = Kommunicatorapp || { Models: {}, Collections: {}, Views: {} };

Kommunicatorapp.initialize = function(){
  var collection = Kommunicatorapp.Collections.MessageCollection();

  collection.fetch({success: function(){
    console.log(collection.models[0])
  }});

  var listView = new Kommunicatorapp.Views.MessageListView({
    collection: collection,
    el: $(".message_list")
  });

  $("#new_message_form").on('submit', function(e){
    e.preventDefault();
    var messageName = $('input').val();
    $('input').val('');
    collection.screate({title: messageName});
  })

}

$(function(){

  Kommunicatorapp.initialize();

});
