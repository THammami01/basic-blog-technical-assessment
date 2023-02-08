# Technical Assessment 

## Installation

Run the client, server and database all at once with Docker Compose:

```sh
docker-compose up -d
```

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

