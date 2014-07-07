var Kommunicatorapp = Kommunicatorapp || { Models: {}, Collections: {}, Views: {} };


Kommunicatorapp.Views.Message = Backbone.Model.extend({
  initialize: function(){
    console.log("You've initialized a view")
    this.listenTo( this.model, "change", this.render);
    },
    tagName: 'li',
    template: _.template( $("#message_template").html() )
    render: function(){
      this.$el.empty();
      this.$el.html( (this.template.model.attributes ) );
      return this
    }


})
