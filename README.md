# Enonic Session Library

Enonic XP Library for storing attributes on a users session.

[![](https://jitpack.io/v/no.item/lib-xp-session.svg)](https://jitpack.io/#no.item/lib-xp-session)

<img src="https://github.com/ItemConsulting/lib-xp-session/raw/main/docs/icon.svg?sanitize=true" width="150">

## Warning

> **Warning**
> This library will **not work in clustered environments** with multiple instances of XP running, since the state of the user is not replicated.

You can instead use cookies to store attributes related to the user.

## Installation  

To install this library you need to add a new dependency to your app's build.gradle file.

### Gradle

```groovy
repositories {
    maven { url 'https://jitpack.io' }
}

dependencies {
    include 'no.item:lib-xp-session:1.0.0'
}
```

## Usage

After updating the gradle file, you can import the `/lib/session` library.

The library includes the following functions:

 * `setAttribute(key, value)`
 * `getAttribute(key)`
 * `removeAttribute(key)`
 * `getAttributeNames()`
 * `getId()`
 * `getCreationTime()`

### Controllers

```javascript
var sessionLib = require('/lib/session');

exports.get = function() {
  sessionLib.setAttribute("myKey", "myValue");

  var myValue = sessionLib.getAttribute("myKey"); // "myValue" is returned
   ...
}
```

## Deploying

### Building

To build he project run the following code

```bash
./gradlew build
```

### Deploy locally

Deploy locally for testing purposes:

```bash
./gradlew publishToMavenLocal
```

## Deploy to Jitpack

Go to the [Jitpack page for lib-xp-session](https://jitpack.io/#no.item/lib-xp-session) to deploy from Github.
