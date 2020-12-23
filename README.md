# d-n

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url]

> n-sided dice, the functional way

## Installation

```bash
npm install @nightlycommit/d-n
```

## Usage

```typescript
import {createDice} from "d-n";

const d2 = createDice(2);

d2(); // return an integer greater or equal to 1 and lower or equal to 2
```

## API

Read the [documentation](https://nightlycommit.github.io/d-n) for more information.

## Contributing

* Fork the main repository
* Code
* Implement tests using [tape](https://github.com/substack/tape)
* Issue a pull request keeping in mind that all pull requests must reference an issue in the issue queue

## License

Apache-2.0 © [Eric MORAND]()

[npm-image]: https://badge.fury.io/js/@nightlycommit/d-n.svg
[npm-url]: https://npmjs.org/package/@nightlycommit/d-n
[travis-image]: https://travis-ci.com/NightlyCommit/d-n.svg?branch=master
[travis-url]: https://travis-ci.com/NightlyCommit/d-n
[coveralls-image]: https://coveralls.io/repos/github/NightlyCommit/d-n/badge.svg
[coveralls-url]: https://coveralls.io/github/NightlyCommit/d-n