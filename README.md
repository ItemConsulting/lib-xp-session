# Enonic Session Library

Enonic XP Library for storing attributes on a users session.

[ ![Download](https://api.bintray.com/packages/itemconsulting/public/no.item.xp.lib-xp-session/images/download.svg?version=1.0.0) ](https://bintray.com/itemconsulting/public/no.item.xp.lib-xp-session/1.0.0/link)

## Installation  

To install this library you need to add a new dependency to your app's build.gradle file.

### Gradle

```groovy
repositories {
    maven {
      url  "http://itemconsulting.bintray.com/public"
    }
}

dependencies {
    include 'no.item.xp:lib-xp-session:1.0.0'
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
  sessionLib.setSessionAttribute("myKey", "myValue");

  var myValue = sessionLib.getSessionAttribute("myKey"); // "myValue" is returned
   ...
}
```