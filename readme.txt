--Readme document for Jason Le, lej36@uci.edu, A3 Group 12--

1. How many assignment points do you believe you completed (replace the *'s with your numbers)?

8.5/10
- 1/1 Communicating with the webserver
- 1/1 Populating information about the user
- 1/3 Populating the search component
- 2/3 Artist page
- 1/1.5 Album page
- 0.5/0.5 Track page


2. How long, in hours, did it take you to complete this assignment?
  26 hours.


3. What online resources did you consult when completing this assignment? (list specific URLs)
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
   https://angular.dev/


4. What classmates or other individuals did you consult as part of this assignment? What did you discuss?
I do not ask any other student for this assignment.


5. Did you add a bonus feature to your submission? If so, what is it and how should we see it?
I did not add a bonus feature.


6. Is there anything special we need to know in order to run your code?
I have modified some of the template code to not throw compiler errors on typing and added some helper functions.

I also added these to the tsconfig.json in order for the program to compile without
strict type checking and initialization since the provided code threw many errors
about uninitialized data members.

baseUrl was also depreciated on my version on TypeScript (7.0.2) so I added ignoreDeprecations.
    "moduleResolution": "bundler",
    "strictPropertyInitialization": false,
    "ignoreDeprecations": "6.0",
Otherwise, most of the template code is unmodified.
