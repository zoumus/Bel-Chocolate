[BelChocolate](https://bel-chocolate.herokuapp.com/#/) is a single-page fullstack replica of topogato, CA based chocolate company.I chose this website particularly for it's clean, modern, and easily navigatable layout. BelChoclate allows users browse products and categories to find what suits them and lets who have an account leave reviews on products with delete and edit review functionality.

With PostgresSQL as a database and Rails as a backend, BelChocolate is able to store user credentials, product, reviews, and AWS (S3) photo URLs successfully. ReactJS and ReduxJS were implemented as frontend in order to create a seemless single-page application. For UI and visuals, SCSS was used to facilitate a smooth user experience.

[BelChocolate Live URL](https://bel-chocolate.herokuapp.com/#/)

![](https://github.com/zoumus/Bel-Chocolate/blob/main/frontend/src/assets/gifImages/ezgif.com-gif-maker%20(4).gif)

---

## Features

1. Sign in/ Register

BelChocolate has a fully functional user auth system, with error handling. A user's sign in status will affect what feature they have access to. If the user is not signed in and tries to use a feature that requires log in, the sign in/ register page will appear and prompt them to sign in/ register. Users have the option to use a demo account to navigate the site.

![](https://github.com/zoumus/Bel-Chocolate/blob/main/app/assets/images/Screen%20Shot%202022-09-17%20at%2012.30.51%20PM.png)

2. Reviews

On a listing's show page, the user will have the option to leave a review along with a star rating. There is error handling - a review will not be submitted and a message will pop up if the user does not fill in all fields. After posting a review, the user can edit or delete said review by clicking the corresponding buttons. Only reviews made by the current user can be edited and deleted.

![](https://github.com/zoumus/Bel-Chocolate/blob/main/app/assets/images/Screen%20Shot%202022-09-17%20at%2012.33.59%20PM.png)

![](https://github.com/zoumus/Bel-Chocolate/blob/main/app/assets/images/Screen%20Shot%202022-09-17%20at%2012.34.17%20PM.png)

3. Cart

Users can add specified quantities of Products to cart and have access to update or delete a specified item.

![](https://github.com/zoumus/Bel-Chocolate/blob/main/app/assets/images/Screen%20Shot%202022-09-17%20at%2012.31.32%20PM.png)

4. Search

Here users can type in any letter/word, and a list of product including said letter/word in the name will immediately render/modify as the input changes. Each search item listed is a link that will navigate users to the specific product's show page.

![](https://github.com/zoumus/Bel-Chocolate/blob/main/app/assets/images/Screen%20Shot%202022-09-17%20at%2012.28.30%20PM.png)

# Technologies

* AWS S3
* React.js
* Redux.js
* Javascript/AJAX/JBuilder
* CSS / SCSS
* HTML
* Ruby on Rails
* PostgresSQL
* Heroku

