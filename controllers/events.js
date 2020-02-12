const Event = require("../models/event");

module.exports = {
  index,
  new: addEvents,
  create,
  show,
  deleteOne,
  update
};

function index(req, res) {
  Event.find({})
    .populate("author")
    .exec(function(err, events) {
      events = events.reverse();
      res.render("events/index", {
        events,
        user: req.user
      });
    });
}

function addEvents(req, res) {
  res.render("events/new", { user: req.user });
}

function create(req, res) {
  const event = new Event(req.body);
  event.author = req.user._id;
  event.save(function() {
    res.redirect("/events");
  });
}

function show(req, res) {
  Event.findById(req.params.id)
    .populate("author")
    .exec(function(err, event) {
      res.render("events/show", {
        event,
        user: req.user
      });
    });
}

function deleteOne(req, res) {
  Event.findByIdAndDelete(req.params.id, function(err, deletedEvent) {
    res.redirect("/events");
  });
}

function update(req, res) {
  req.body.done === "on";
  Event.updateOne(req.params.id, req.body);
  res.redirect("/events");
}
