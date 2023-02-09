# Technical Assessment 

## Installation

Run the client, server and database all at once with Docker Compose:

```sh
docker-compose up -d
```

The front-end should run on port `3000`, the back-end on port `8000`, and the database on port `27017`.<br />
Make sure that these ports aren't reserved on your machine or you will face an error.

## Cleanup

Remove all created images and containers:

```sh
docker-compose down --rmi all
```

## Back-end Endpoints

```
GET     /posts/
GET     /posts/{id}
POST    /posts/
PUT     /posts/{id}
PATCH   /posts/{id}/upvote
PATCH   /posts/{id}/downvote
DELETE  /posts/{id}
```

## Front-end Screenshots

![01](https://user-images.githubusercontent.com/50141415/217535844-704d0b58-f258-4172-83ec-d00b819ae908.png)

![02](https://user-images.githubusercontent.com/50141415/217536046-6169f97e-c82c-4dd5-b34a-8391f893dc8a.png)

![03](https://user-images.githubusercontent.com/50141415/217536636-a5bf0d3a-7f47-4c72-9012-9581f86258d7.png)

