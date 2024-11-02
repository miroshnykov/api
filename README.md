# Your Project Name

[Существующее описание проекта...]

## GraphQL API

### Technologies Used
- TypeScript
- GraphQL (Apollo Server)
- TypeORM
- MySQL
- Type-GraphQL# Your Project Name

[Существующее описание проекта...]

## GraphQL API

### Technologies Used
- TypeScript
- GraphQL (Apollo Server)
- TypeORM
- MySQL
- Type-GraphQL

### API Setup
1. Install dependencies:

```get user
query {
  users {
    id
    firstName
    lastName
    email
  }
}

mutation {
  createUser(
    firstName: "Иван"
    lastName: "Петров"
    email: "ivan.petrov@example.com"
    password: "пароль123"
  ) {
    id
    firstName
    lastName
    email
  }
}
```

```
CREATE TABLE `user` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`firstName` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`lastName` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`email` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	`password` VARCHAR(255) NOT NULL COLLATE 'utf8mb4_unicode_ci',
	PRIMARY KEY (`id`) USING BTREE,
	UNIQUE INDEX `email` (`email`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
;
