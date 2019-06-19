# ether-lotto

This is an Ethereum based lottery written in Solidity.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. ~~See deployment for notes on how to deploy the project on a live system.~~

### Prerequisites

You must have npm installed.

This project uses Consensys' [Truffle Framework](http://truffleframework.com) in order to test it. _If you don't have it installed already, it will be installed by npm._

### Installing

Clone this repository to your computer and go to its folder.

```bash
git clone https://github.com/nGoline/ether-loto.git
cd ether-loto
```

Install project dependencies

```bash
npm i
```

### Running

We're using gulp to load and minify the needed files.

```bash
npm start
```

## Running the tests

No tests yet.

## Deployment

In this phase the project must not be deployed neither on the Mainnet nor on Testnets. It is intended to be tested until we have the main contract up and running.

To get a ready to deploy package just run:

```bash
npm run deploy
```

And publish all the files on ```.\web\build\**\*```.

## Built With

* [Solidity](https://github.com/ethereum/solidity)
* [Web3](https://github.com/ethereum/web3.js)
* [Truffle](https://truffleframework.com)
* [Gulp](https://gulpjs.com)
* [jQuery](https://jquery.com/)
* [Bootstrap](https://getbootstrap.com/)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/ngoline/ether-lotto/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ngoline/ether-lotto/tags).

## Authors

* **Níckolas Goline** - *Initial work* - [nGoline](https://github.com/ngoline)

See also the list of [contributors](https://github.com/ngoline/ether-lotto/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

* This project comes to light after a discussion about the generation of random numbers in a distributed virtual machine with [jthomazinho](https://github.com/jthomazinho) and [solangegueiros](https://github.com/solangegueiros);