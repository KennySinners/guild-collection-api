const guildCollection = new Map();
const ownerCollection = new Map();
const detailedGuildCollection = new Map();
const detailedOwnerCollection = new Map();
const ChannelsCollectionByType = new Map();
const AllChannelsByObjCollection = new Map();
const AllChannelsByName = new Map();
const AllChannelsByID = new Map();
const AllChannelsWithTimeout = new Map();
const AllNSFWChannels = new Map();

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