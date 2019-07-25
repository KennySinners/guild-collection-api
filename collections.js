const { Collection } = require("discord.js");
const guildCollection = new Collection();
const ownerCollection = new Collection();
const detailedGuildCollection = new Collection();
const detailedOwnerCollection = new Collection();
const ChannelsCollectionByType = new Collection();
const AllChannelsByObjCollection = new Collection();
const AllChannelsByName = new Collection();
const AllChannelsByID = new Collection();
const AllChannelsWithTimeout = new Collection();
const AllNSFWChannels = new Collection();

module.exports = {
    guildCollection,
    ownerCollection,
    detailedGuildCollection,
    detailedOwnerCollection,
    ChannelsCollectionByType,
    AllChannelsByObjCollection,
    AllChannelsByName,
    AllChannelsByID,
    AllChannelsWithTimeout,
    AllNSFWChannels
}