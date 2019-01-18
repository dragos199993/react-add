# React add
## A work in progress!

Motivation:
As React ecosystem does not have a CLI for creating components (like Angular), creating and configuring manual components might take more time than expected. This package aims for simplicty and uses familiar terms to configure a component and get started quickly.

### Features

  - Class component 
  - Function component
  - Redux addition to class components
  - LESS, SCSS, CSS choose for either of class or function components
  - Stores components into a json file and can be reused by other person

In next releases:
  - Add react router (import, and withRouter hoc)
  - Save a component preset and use it when needed
  - More customization added

### Installation

'React add' can be use as a global package, using npm

Install the dependencies and devDependencies and start the server.

```sh
$ npm install -g react-add
$ react-add --version (If everything was correct should output the version number)
```


React-add needs to be initialized first
```sh
$ react-add init
```

And then can be used like this

For class components:
```sh
$ react-add rcc
```

For function components:
```sh
$ react-add rfc
```

If you recived a reactadd.json file, you can install it using:
```sh
$ react-add install
```

# Changelog

## [1.1.3] - 2018-19-01
### Added
- `react-add init` functionality that stores the informations into `react-add.json`
- installing available components using `react-add install`
- detecting if the component is already installed

## [1.1.2] - 2018-18-01
### Added
- Warning in readme.md for Windows users

## [1.1.0] - 2018-17-01
### Added
- If the user selected redux or/and scss, React-add will search inside package.json and it will install the dependencies needed
- Changing an existing component style, will remove and replace style file with the choosen one.


License
----

MIT




