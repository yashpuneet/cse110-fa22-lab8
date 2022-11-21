# Lab 8

Group Members:
- Yash Puneet
- Chih-lin Wang

Check Your Understanding Responses:

1. Within a Github action that runs whenever code is pushed. - Github actions allows scripts and tests to be run automatically after a trigger event. Uisng github actions would allow these automated tests to run without any extra intevertion/run commands. Testing should be done during development for ear module/commit which is why running all the tests after development is not correct.
   
2. No

3. No, we would use end to end testing for this since unit tests would not be bale to emulating writing and sending a message on the messaging application. This is more of a UI/User flow type of test which combines multiple parts thus is too big for unit tests.

4. Yes, unit tests would be used here since we are only checking one value (message length), and have a set value to compare this too. The message itself is a string and can be passed in directly to the function since we are not testing the functionality where a user is writing a message.
