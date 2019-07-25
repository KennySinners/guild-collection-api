### API Documentation

##### What our new API includes/doesn't include:

- [x] Adding an option for booleans to be implemented so the API returns are simplified
- [x] Noob-friendly examples
- [ ] Getting each member in a specific guild


### All our functions sorted by what they return

##### Functions that return objects

Object returns |
---------------|
getGuild [✔] Boolean (Don't use if object wanted as a return) |
getOwner [✔] Boolean (Don't use if object wanted as a return) |
getChannelsByType [✔] Boolean (Don't use if object wanted as a return) |
getAllChannelsByObject [X] Boolean |
getAllNSFWChannels [✔] Boolean (Don't use if object wanted as a return) |


##### Functions that return Names/IDs

Name / ID returns |
------------------|
getGuild [✔] Boolean (Use if name/id wanted as a return) |
getOwner [✔] Boolean (Use if name/id wanted as a return) |
getChannelsByType [✔] Boolean (Use if name/id wanted as a return) |
getAllChannelsByName [X] Boolean |
getAllChannelsByID [X] Boolean | 
getAllChannelsWithTimeout [✔] Boolean (Use if name/id wanted as a return) |
getAllNSFWChannels [✔] Boolean (Use if name/id wanted as a return) |




#### How to use API functions (normal ver.)


###### getGuild()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getGuild("603009265346805760")) //Returns the guild object without the boolean parameter supplied
```


###### getOwner()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getOwner("603009265346805760")) //Returns the user object of the owner without the boolean parameter supplied
```


###### getChannelsByType()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getChannelsByType("603009265346805760")) //Returns an object of each channel without the boolean parameter supplied
```


###### getAllChannelsByObject()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllChannelsByObject("603009265346805760")) //Returns an object of each channel in the guild. Boolean isn't a viable parameter here
```


###### getAllChannelsByName()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllChannelsByName("603009265346805760")) //Returns all channels in the guild by their name. Boolean isn't a viable parameter here
```


###### getAllChannelsByID

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllChannelsByID("603009265346805760")) //Returns all channels in the guild by their ID. Boolean isn't a viable parameter here
```

###### getAllChannelsWithTimeout()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllChannelsWithTimeout("603009265346805760")) //Returns all channels that have a timeout, returns the object of each channel with no boolean parameter supplied
```


###### getAllNSFWChannels()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllNSFWChannels("603009265346805760")) //Returns all nsfw channels returns the object of each channel with no boolean parameter supplied
```