### API Documentation

##### What our new API includes/doesn't include:

- [x] Adding an option for booleans to be implemented so the API returns are simplified
- [x] Noob-friendly examples
- [x] Getting each member in a specific guild


### All our functions sorted by what they return

##### Functions that return objects

Object returns | Boolean |
---------------|---------|
getGuild | <ul><li>[x] Boolean (Don't use if object wanted as a return)</li></ul> |
getOwner | <ul><li>[x] Boolean (Don't use if object wanted as a return)</li></ul> |
getChannelsByType | <ul><li>[x] Boolean (Don't use if object wanted as a return) </li></ul>|
getAllChannelsByObject | <ul><li>[ ] Boolean</li></ul> |
getAllNSFWChannels | <ul><li>[x] Boolean (Don't use if object wanted as a return)</li></ul> |


##### Functions that return Names/IDs

Name / ID returns | Boolean |
------------------|---------|
getGuild | <ul><li>[x] Boolean (Use if name/id wanted as a return)</li></ul> |
getOwner | <ul><li>[x] Boolean (Use if name/id wanted as a return)</li></ul> |
getChannelsByType | <ul><li>[x] Boolean (Use if name/id wanted as a return)</li></ul> |
getAllChannelsByName | <ul><li>[ ] Boolean</li></ul> |
getAllChannelsByID | <ul><li>[ ] Boolean</li></ul> | 
getAllChannelsWithTimeout | <ul><li>[x] Boolean (Use if name/id wanted as a return)</li></ul> |
getAllNSFWChannels | <ul><li>[x] Boolean (Use if name/id wanted as a return)</li></ul> |




#### How to use API functions (normal ver.)
<br>

> getGuild()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getGuild("603009265346805760")) //Returns the guild object without the boolean parameter supplied
```
<br>

> getOwner()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getOwner("603009265346805760")) //Returns the user object of the owner without the boolean parameter supplied
```
<br>

> getChannelsByType()

<code class="language-javascript">
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getChannelsByType("603009265346805760")) //Returns an object of each channel without the boolean parameter supplied
</code>
<br>

> getAllChannelsByObject()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllChannelsByObject("603009265346805760")) //Returns an object of each channel in the guild. Boolean isn't a viable parameter here
```
<br>

> getAllChannelsByName()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllChannelsByName("603009265346805760")) //Returns all channels in the guild by their name. Boolean isn't a viable parameter here
```
<br>

> getAllChannelsByID

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllChannelsByID("603009265346805760")) //Returns all channels in the guild by their ID. Boolean isn't a viable parameter here
```
<br>

> getAllChannelsWithTimeout()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllChannelsWithTimeout("603009265346805760")) //Returns all channels that have a timeout, returns the object of each channel with no boolean parameter supplied
```
<br>

> getAllNSFWChannels()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllNSFWChannels("603009265346805760")) //Returns all nsfw channels returns the object of each channel with no boolean parameter supplied
```
<br>

> getAllMembersByUserObject()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllMembersByUserObject("603009265346805760"))
 //Returns a user object for each member in the guild
```
<br>

> getAllMembersByDisplayName()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllMembersByDisplayName("603009265346805760")) //Returns a map of all members in the guild by their display name
```
<br>

> getAllMembersByID()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllMembersByID("603009265346805760")) //Returns a map of all members in the guild by their ID and display name depending on if there was a boolean parameter supplied
```
<br>

> getAllMemberRoles()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllMemberRoles("603009265346805760", "575108662457139201")) //Returns a map of all the member's roles by the role names + role ids depending on if there was a boolean parameter supplied
```
<br>

> getAllGuildRolesByObject()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllGuildRolesByObject("603009265346805760")) //Returns a map of every role in the guild by it's Role Object
```
<br>

> getAllGuildRolesByName()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllGuildRolesByName("603009265346805760")) //Returns a map of all the roles in the guild by their name
```
<br>

> getAllGuildRolesByID()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllGuildRolesByID("603009265346805760")) //Returns a map of all the roles in the guild by their ID
```
<br>

> getAllGuildRolesByHexColor()

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

console.log(new Info(client).getAllGuildRolesByHexColor("603009265346805760")) //Returns a map of all the roles in the guild by their name + hex color
```