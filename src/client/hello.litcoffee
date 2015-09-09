    Template.hello.onCreated ->
      console.log 'created'
      $('button').addClass 'created'
      return

    Template.hello.onRendered ->
      @find('button').setAttribute 'class', 'awesome'
      $('button').addClass 'jQuery or no jQuery?'
      return

    Template.hello.helpers counter: ->
      Session.get 'counter'

    Template.hello.events 'click button': ->
      # increment the counter when button is clicked
      Session.set 'counter', Session.get('counter') + 1
      return