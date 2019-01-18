# React add
## A work in progress!

Motivation:
As React ecosystem does not have a CLI for creating components (like Angular), creating and configuring manual components might take more time than expected. This package aims for simplicty and uses familiar terms to configure a component and get started quickly.


### Windows users
_**Warning:** Currently this package is using unix subcommands to remove styles that already exists. This should not cause any errors but it will not delete the style files of a component when another once is choosed. This will be fixed in the future, but for now I recomment using git bash. _

### Features

  - Class component 
  - Function component
  - Redux addition to class components
  - LESS, SCSS, CSS choose for either of class or function components

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

And then can be used like this

For class components:
```sh
$ react-add rcc
```

For function components:
```sh
$ react-add rfc
```

# Changelog

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




