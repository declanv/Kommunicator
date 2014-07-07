var Kommunicatorapp = Kommunicatorapp || { Models: {}, Collections: {}, Views: {} };

Kommunicatorapp.Views.MessageListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "all", this.render)
  },
  render: function(){}
})
