const {
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
} = require("./collections");
const { Guild } = require('discord.js');

class Info extends Guild {

    constructor(client, data) {
        super(client, data)
    }


    getGuild(id) {
        /**
         * @param {String} id 
         * @type {Collection}
         */

        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else {

            guildCollection.set(this.guild.id, this.guild.name);
            return guildCollection;
        }
    }

    getOwner(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else {

            ownerCollection.set(this.guild.owner.id, this.guild.owner.user.tag);
            return ownerCollection;
        }
    }

    getGuildInfo(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else {

            detailedGuildCollection.set(this.guild.id, this.guild)
            return detailedGuildCollection;
        }
    }

    getOwnerInfo(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else {

            detailedOwnerCollection.set(this.guild.owner.id, this.guild.owner)
            return detailedOwnerCollection;
        }
    }

    getChannelsByType(id, type) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!type && !id) {
            throw new Error("Please provide the sufficient parameters. Parameters needed: 'guild-id', 'channel-type'")
        } else if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!type) {
            throw new Error("Please provide a 'type' paramater")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild id")
        } else {

            ChannelsCollectionByType.set(this.guild.id, this.guild.channels.filter(ch => ch.type.toLowerCase() === type).map(s => s.name + " | " + s.id))
            return ChannelsCollectionByType;
        }
    }

    getAllChannelsByObject(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else {

            AllChannelsByObjCollection.set(this.guild.id, this.guild.channels.forEach(ch => ch))
            return AllChannelsByObjCollection;
        }
    }

    getAllChannelsByName(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else {

            AllChannelsByName.set(this.guild.id, this.channels.forEach(ch => ch.name))
            return AllChannelsByName;
        }
    }

    getAllChannelsByID(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else {

            AllChannelsByID.set(this.guild.id, this.guild.channels.forEach(ch => ch.id))
            return AllChannelsByID;
        }
    }

    getAllChannelsWithTimeout(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else if (!this.guild.channels.find(c => c.rateLimitPerUser > 0)) {
            return "Couldn't find any guild with a timeout."
        } else {

            AllChannelsWithTimeout.set(this.guild.id, this.guild.channels.forEach(c => c.type === "text" || c.type === "news" && c.rateLimitPerUser > 0))
            return AllChannelsWithTimeout;
        }
    }

    getAllNSFWChannels(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else if (!this.guild.channels.find(ch => ch.nsfw)) {
            return "Couldn't find any NSFW channels."
        } else {

            AllNSFWChannels.set(this.guild.id, this.guild.channels.filter(ch => ch.nsfw === true).map(s => s))
            return AllNSFWChannels;
        }
    }
}

module.exports = {
    Info
}