
# THE WAGGING TAILS

This is an E-Commerce website for pets, to buy their necessary stuffs.

## Tech Stack

**Client:** HTML5, SCSS, JavaScript, React.js, Node.js

**API:** Strapi

**Payment Gateway:** Stripe

**Tool:**  VS Code, Postman.


## Features

- Live Search bar.
- Auto recomendation of same type of products.
- Distinct Categories of products.
- dynamic rendering of most popular products.
- Add to Cart.
- seamless payment via **stripe** .


## Installation

Clone the repository:

```bash
  git clone https://github.com/RayaBasu01/TheWaggingTails.github.io

```
Change the directory to api and run the command :

``` 
npm init -y

npm install -g strapi@latest

strapi develop
```
Open your web browser and go to ``http://localhost:1337/admin`` This is where you can access the Strapi admin panel to create content types, define APIs, and manage your data.
## Deployment

 *To deploy this project-*

- Change the directory of the project to client folder and run:
```
 npm install 
 ```
 Add .env file and add the necessary value as per ``.env.example`` from *stripe* and *strapi*
```
 npm run start

```
- In another terminal change the directory to api folder and run:

```
 npm start
```

## Custom Credentials for Payment Gateway

During checkout to use the TEST MODE of Strapi Payment Gateway, you can use this demo Credential.

- Card Number: 5555 5555 5555 4444
- Exp date: 09/29
- CVC: 123

**`NOTE: Dont use actual Debit/Credit Card value.`**

## Feedback

If you have any feedback, please reach out to us at raya.basu.01@gmail.com


