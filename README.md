# friendfinder2

Friend Finder is a social application that utilizes the express npm package to store user information and match them with a friend who most closely matches interests.

To get started run an npm install, then click the "Go to Survey" button and fill out the questions.  When you click "Submit" you will be connected with your best match!

At the home page the user is prompted to complete a survey or to check out the list of possible friend matches

![2017-08-15 8](https://user-images.githubusercontent.com/25482392/29338312-9bc01848-81e2-11e7-9b62-2381147d5e52.png)

The possible matches are rendered in JSON format

![2017-08-15 9](https://user-images.githubusercontent.com/25482392/29338316-9e1a5a18-81e2-11e7-9603-1ccc5905e70a.png)

The survey uses bootstrap forms, and javascript works behind the scenes comparing the user's score to possible friend matches

![2017-08-15 10](https://user-images.githubusercontent.com/25482392/29338318-9f0d3558-81e2-11e7-9d00-13bed0757e1a.png)

Finally the best match is rendered in a bootstrap modal.  I matched with Mick Jagger!

![2017-08-15 11](https://user-images.githubusercontent.com/25482392/29338321-a00331f6-81e2-11e7-8d03-269856eed39c.png)


One improvement I plan on making is to add a more efficient validation for the name and photo links on the survey page

For a live demo click the link below:

https://nameless-plateau-20267.herokuapp.com/
