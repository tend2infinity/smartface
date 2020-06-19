So.. this is a face recognition (react) app which can identify a face from any photograph.


## IMPORTANT FUNCTIONALITIES

Thanks to React for providing a better environment to work . 

### Login Page

This is the landing page for my app . Just enter your credentials and enjoy!! well , if you are new , then first click on register and register yourself .

### Register Page

Quite similar to Login page , just enter your credentials to get registered .

### The Image Endpoint

After logging in successfully you will be directed to the image endpoint page . 

### The Logo

You may find it interesting while you hover over the logo of my app . Do try it!!

### The Search Box

So basically to detect a face in any image you need to have a link to that image . An easy way of testing this is , just google "face" from where you will find a lot of faces in the image section , right click upon any image and then click on "copy image address" and  then paste it on that search box , wait for a while and then boom! your face will get detected .

### Image Count Increment and Rank

Everytime you click the detect button your image count will increase and you rank will also get updated in realtime .

## SECURITY FEATURE

All the passwords which you enter in the register or login page are encrypted into a "hash" . Actually the "bcrypt-nodejs" package is used so that your passwords remain hidden in the form of a "hash" which is just a piece of gibberish so that if someone ever tries to get into the database to see the password of a particular user , only thing he could see is just a piece of gibberish which is quite impossibe to decode!!

## BACKEND

The backend for this app is also hosted on heroku find more about it on my github repository [Smartface-backend](https://github.com/tend2infinity/smartface-backend)

## DATABASE

I have used heroku postgres for the database of this app which stores the user information including "name" , "password" , "email" and other details like joining time stamp .

## DEPLOYMENT

I have deployed the app on HEROKU [the link is provided here](https://smartface2001.herokuapp.com)


