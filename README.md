### Simple Validator

#### Resources

* [Mozilla Javascript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
(probably more information than you want, but at least you have a reference you can refer to for information about specific javascript keywords, types, etc.)

#### Requirements

1. Create an html file and js file and add a script tag to include the js file as before. (Getting familiar? Good!)

2. Prompt the user to enter their phone number with dashes. (You might want to assure them that it won’t be used for SPAM. Your site probably looks pretty sketchy right now, being a blank page with a prompt for their phone number. I know I wouldn’t enter my phone number...)

  Tip: You can report simple boolean evaluations of user input by combining boolean operators.
  e.g. alert(userInput.charAt(0) === 'B' && userInput.length === 7)
  will display true if the user enters 'Boulder' or 'Baghdad'.

3. Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth characters must be dashes.

4. Following the same procedure as #2 and #3 above to prompt and validate the following fields:

  * birth date

    * must follow the format xx/xx/xx

  * postal code

    * must follow the format xxxxx OR xxxxx-xxxx

  * state abbreviation

    * must be two characters

    * must be all caps

  * married

    * must be yes or no

    * may be any capitalization: YES, Yes, yes.
