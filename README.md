# justifyBack

Restful API that takes unjustified text as an intput and return its justified version as an output


# Technologies/Dependecies

nodejs/expressJS/mongodb/mongoose/body-parser/JWT/morgan/Nodemon/mlab


# Review & Tests (using POSTMAN)

## Post request to justify the text (using'/api/justify route) without sending a JSON body  {"email": "foo@bar.com"}

![](tests/img/1.1.PNG)
![](tests/img/1.2.PNG)

## the user should sign up first wit a json format email and gets a token in return
![](tests/img/2.1.PNG)

## make sure to add bearer before the token in the Authorization key
![](tests/img/3.1.PNG)

## Input unjustified text (text/plain format) and get a justified text with 80 caracter each line
![](tests/img/3.2.PNG)

## The user mail is unique
![](tests/img/4.1.PNG)

## when signing up in /api/token the email adress should be in a valid format
![](tests/img/4.2.PNG)

## when the user surpass 80000 word
![](tests/img/5.PNG)




