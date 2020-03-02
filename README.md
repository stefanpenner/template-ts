# template-ts
![CI](https://github.com/stefanpenner/template-ts/workflows/CI/badge.svg)

A simple starting point for authoring TypeScript librarys.

* Compilation via TypeScript with what I find to be productive TypeScript defaults
* Testing via Mocha + Chai with source-map support
* Type Tests via dtslint
* CI via GH actions covering Linux, OSX, Windows, node 10 and 12.

## Usage

* create a new GH repo, and choose this as it's template
* checkout said GH repo
* search and replace template-ts with your modules new name
* replace this readme
* ...
* profit

----

## Install

```sh
yarn add project
```

or

```sh
npm install --save project
```

## Usage

```js
const project = require('project');
```
