fill-in-quiz
============

The most creatively named timed fill-in-the-blank javascript quiz on
the web. It makes up for its humble name by being functional and easy
to use.


Want to try it out?
-------------------

Make a web page  that includes `fill-in-quiz.js`,
with an empty div with an id. Any old id will do.
Get a Javascript array like:
```javascript
var quiz_answers = ['answer1', 'answers2', 'answer3' ];
```
or, pipe one in with [Tabletop](https://github.com/jsoma/tabletop).
Then, decide how long you want to give folks to take your quiz in
seconds. Finally, let the quiz know, with something like this:
```javascript
Quiz.init('my-quiz-div', quiz_answers, 60);
```

Optionally, include the super-tiny `fill-in-quiz.css` to make the
quiz not look terrible. Or, roll your own.