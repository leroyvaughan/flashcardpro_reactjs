This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## FlashCard Pro

Followed some tutorial on Udemy to get an introduction to Redux and also some Front End React Testing.

--------------------------------------------------------->

## ** My thoughts so far...or 'personal notes' **

### ---> Day One
I'm not sure I like the onchange events in the StackForm.js component, but maybe that's how things are done nowadays???

Also, the Stack component didn't account for page refresh...so when styling the stack page an error would pop up.  I had to fix it with a modification to component state so it would use window.localStorage.


### ---> Day Two & Three

Had to jump through some flaming hoops to get the first test running whilst following the tutorial.  Again, I'm not liking this tutorial much...but it is leading me in the right direction.

Had to add Adapter and { configure } import/statement which was not accounted for in video tutorials. *Shouldn't video tutorial have been updated???  Added them to setupTests file

Had to refactor StackList.js to use iterator index as "key" instead of stack.id, which was being ignored as a key in StackList.test.js.

Why doesn't --setupFiles and --coverage switches/flags work together on a single line?
```
  To run: npm run start
  To test: npm run tests
  To test with coverage: npm run test
```


I didn't clean up my files. Didn't see the use since this isn't a production app, nor will I run it on herokuapp.com.  This is mainly for Jest/Enzyme testing ---So, if you don't like it, I really don't care.  My code is (or may be) messy and it is definitely causing Corona Virus outbreaks...lol.





