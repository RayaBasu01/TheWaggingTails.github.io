
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

## Demo
![photo_2023-09-05_18-00-44](https://github.com/RayaBasu01/TheWaggingTails.github.io/assets/108759478/e44778c3-4c20-4037-b679-367b233ddaf5)
![photo_2023-09-05_18-01-24](https://github.com/RayaBasu01/TheWaggingTails.github.io/assets/108759478/9414ccf4-8750-4f03-8566-76ac65de3540)
![photo_2023-09-05_18-01-35](https://github.com/RayaBasu01/TheWaggingTails.github.io/assets/108759478/2eb93fdf-e62e-4f17-86c8-f185ef259a9c)
![photo_2023-09-05_18-01-40](https://github.com/RayaBasu01/TheWaggingTails.github.io/assets/108759478/01fefc7e-8294-4df3-a2d7-180de2be680f)
![photo_2023-09-05_18-01-29](https://github.com/RayaBasu01/TheWaggingTails.github.io/assets/108759478/3a6cf3fd-e69c-4b19-9663-42656e513ef2)



## Feedback

If you have any feedback, please reach out to us at raya.basu.01@gmail.com


