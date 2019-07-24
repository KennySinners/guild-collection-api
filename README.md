Guilds-Collection-API

An API to make your life simpler with getting guilds.

How our API works:

Gets the guild by the provided ID -> Returns the guild ID and the whole guild Object depending on the function you used

Gets guild owner by the provided ID -> Returns the owner's ID and the whole owner's user object

Gets the guild by the provided ID -> Returns a collection depending on the function you used



Functions you can use with our API:

```js
/**
*~ getGuild (by the provided guild ID)
*~ getOwner (by the provided guild ID)
*~ getGuildInfo (by the provided guild ID, returns the full guild Object)
*~ getOwnerInfo (by the provided guild ID, returns the full owner user Object)
*~ getChannelsByType (by the provided guild ID and provided channel type) -- [E.g. -> "text"]
*~ getAllChannelsByObject (by the provided guild ID, returns every channel by their object)
*~ getAllChannelsByName (by the provided guild ID, returns every channel by it's name)
*~ getAllChannelsByID (by the provided guild ID, returns every channel by it's id)
*~ getAllChannelsWithTimeout (by the provided guild ID, returns every channel that has a timeout)
*~ getAllNSFWChannels (by the provided guild ID, returns every channel that's flagged as NSFW)
*/
```
Examples and how to use:


~ getGuild:

```js
const Discord = require("discord.js")
const client = new Discord.Client();
const { Info } = require("guild-collections-api");

console.log(new Info(client).getGuild("603009265346805760")) 

/*
*'603009265346805760' is the guild ID, you can only input guild IDs. 
*Be careful when doing 'new Info()', in the '()' you're suppose to input whatever you declared Discord.Client as
*/
```


~ getChannelsByType

```js
const Discord = require("discord.js")
const bot = new Discord.Client();
const { Info } = require("guild-collections-api");

console.log(new Info(bot).getChannelsByType("603009265346805760", "text"))

/*
* In the 'getChannelsByType' function you have to provide 2 paramaters, the guild ID and the channel type.
* Otherwise it won't work and will throw an error.
*/
```



**Sending a message that contains the collection**

```js
const Discord = require("discord.js");
const client = new Discord.Client();
const { Info } = require("guild-collection-api");

new Info(client).getAllChannelsByName("603009265346805760").forEach(c => {
  JSON.strinigify(c, (err, data) => {
    message.channel.send(c.join("\n")) //Outputs all the collections. Each of which is in a new line
  })
})
```
