# Registration Form

Basic registration form with both email and password validation. To run, load the index.html file into your browser of choice, and enjoy testing!

## Running tests

To run the tests, load the tests.html file directly into your browser of choice.

## Rationale for technologies

As this is a very basic registration form, it felt like overkill to use any libraries or frameworks, as semantic HTML covers all the functionality we need. For testing purposes I did pull in QUnit and jQuery, ideally I would have liked not to pull in jQuery, but to simulate the key up event on the form it was required. We're pulling both these dependencies directly from a CDN, one for simplicity, and as we want to run the tests in a browser the tests need access to the document interface to simulate user interactions. Some other things to note: 

- To add more granular validation messages for the email input, I had to remove the form validation and apply custom messaging. Browsers do have form validation but I wanted to remove it for this case.