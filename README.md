product-core
============

Product Data Model for Node.js/MongoDB written in Mongoose with Stream based API and performance tests

# jCatalog API

This guide will walk you through initialize the app in the development envivonment

## Initialize

### Install dependecies

```bash
npm install
```

### Initial Data

```bash
grunt prepare-db
```

## Run

```bash
grunt
```

### Performance Test

Create the `config.json` file in the root folder with the following content:

```json
{
  "mongo_url": "mongodb://127.0.0.1/jCatalog-development"
}
```

And run:

```bash
grunt performance-test
```
