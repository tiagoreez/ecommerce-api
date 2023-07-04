
# E-commerce API REST 

## Example of a REST API for an E-commerce using Nodejs

In this project I've created an example of an API REST for an E-commerce using mainly Express sequelize and validation libraries such as passport, joi and bcrypt, with sequelize we manipulate the relational database that in my case is PostgreSQL



## How to install

Please git [clone](https://github.com/tiagoreez/ecommerce-api) the repository.

```bash
  git clone git@github.com:tiagoreez/ecommerce-api.git
```

Now that you have the repository execute.

```bash
  npm install
```

This will install all the dependencies that the project need.

## How to set up 

- Now you can use the file named .env.example to set your environment variables 
- After you set your .env file please run the following command

```bash
  docker compose up -d postgres pgadmin
```

this will execute de docker compose images.

After executing our data base we will run our migrations to create de database tables


```bash
  npm run migration:run
```

and with this done we just simply execute

```bash
  npm run dev
```

And now you can use the api

