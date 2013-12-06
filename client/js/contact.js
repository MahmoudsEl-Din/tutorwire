ContactController = RouteController.extend({
  template: 'contact',

  before: function () {
    Session.set("tutor-puid", this.params.puid)
    Meteor.subscribe("tutor-by-puid", this.params.puid)
  },

  data: function () {
    return Tutors.findByPuid(Session.get("tutor-puid"))
  },

  after: function () {
    var tutor = Tutors.findByPuid(Session.get("tutor-puid"))

    if (tutor) {
      App.clearExitingMarkers([tutor])
      App.showEnteringTutorsOnMap([tutor])

      var lngLat = tutor.location.geometry.coordinates
      App.map.setView([lngLat[1], lngLat[0]], App.map.getZoom())
    }
  }
})

Template.contact.events({
  'click #tutor-contact':function (evt) {
    evt.preventDefault()
    var tutor = Tutors.findByPuid(Session.get("tutor-puid"))
    Meteor.call('contact', tutor.userId, 'Please can has?')
    $(this).addClass('disabled')
  }
})

Template.contact.rendered = function () {

}

// Register ////////////////////////////////////////////////////////////////////////////////////////////////////////////
Template.registerToContact.events({
//    "click #register": function (evt) {
//
//    },
//    "click #register": function (evt) {
//
//    }
})

Template.registerToContact.rendered = function () {
    $('form').validationEngine("attach", {
        onValidationComplete: function (form, valid) {
            console.log('registerToContact', arguments)
            if (!valid) return console.warn("Registration form invalid")

            var opts = {
                email: $('#email').val(),
                password: $('#password').val(),
                profile:{
                    name: $('#name').val()
                    // TODO: grab location if we have it
                }
            }

            console.log('createUser', opts)

            Accounts.createUser(opts, function (er) {
                if (er) return console.log(er)
            })

        }
    })
}