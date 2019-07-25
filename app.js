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
const {
    Guild,
    Collection
} = require('discord.js');

class Info extends Guild {

    constructor(client, data) {
        super(client, data)
    }


    getGuild(id, asmsg = Boolean) {
        /**
         * @param {String} id
         * @param {Boolean} asmsg
         * @type {Collection}
         */

        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else {

            guildCollection.set(this.guild.id, this.guild);

            if (!asmsg || asmsg === false) {
                return guildCollection.map(gld => gld)
            } else {
                return guildCollection.map(gl => gl.name + " | Member Count: " + gl.memberCount)
            }
        }
    }

    getOwner(id, asmsg = Boolean) {
        /**
         * @param {String} id
         * @param {Boolean} asmsg
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else {

            ownerCollection.set(this.guild.owner.id, this.guild.owner);

            if (!asmsg || asmsg === false) {
                return ownerCollection;
            } else { 
                return ownerCollection.map(x => x.user.username + " | " + x.user.id)
            }
        }
    }

    getChannelsByType(id, type, asmsg = Boolean) {
        /**
         * @param {String} id
         * @param {String} type
         * @param {Boolean} asmsg(true || false)
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

            ChannelsCollectionByType.set(this.guild.id, this.guild.channels.filter(ch => ch.type === type))


            if (!asmsg || asmsg === false) {
                return ChannelsCollectionByType.map(s => s)
            } else {
                return ChannelsCollectionByType.map(c => c.name + " | " + c.id);
            }
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

            AllChannelsByObjCollection.set(this.guild.id, this.guild.channels.map(ch => ch))

            return AllChannelsByObjCollection;

        }
    }

    getAllChannelsByName(id, asmsg) {
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

            AllChannelsByName.set(this.guild.id, this.guild.channels.map(c => c.name))

            if (!asmsg) {
                return AllChannelsByName;
            } else {
                if (AllChannelsByID.array().length > 50) {
                    throw new Error("Cannot display 50 values. Please consider console logging the collection")
                }

                return AllChannelsByName.map(cl => cl.join("\n"));
            }
        }
    }

    getAllChannelsByID(id, asmsg) {
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

            AllChannelsByID.set(this.guild.id, this.guild.channels.map(ch => ch.id))

            if (!asmsg) {
                return AllChannelsByID;
            } else {
                if (AllChannelsByID.array().length > 50) {
                    throw new Error("Cannot display 50 values. Please consider console logging the collection")
                } else {
                    return AllChannelsByID.map(c => c.join("\n"))
                }
            }
        }
    }

    getAllChannelsWithTimeout(id, asmsg) {
        /**
         * @param {String} id
         * @param {Boolean} asmsg
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if (!id) {
            throw new Error("Please provide an ID parameter")
        } else if (!this.client.guilds.get(id)) {
            throw new Error("Client was not able to find the specified guild ID")
        } else if (!this.guild.channels.find(c => c.rateLimitPerUser > 0)) {
            return "Couldn't find any channel with a timeout."
        } else {

            AllChannelsWithTimeout.set(this.guild.id, this.guild.channels.filter(c => (c.type === "text" || c.type === "news") && c.rateLimitPerUser > 0).map(ch => ch.name))

            if (!asmsg) {
                return AllChannelsWithTimeout;
            } else {
                if (AllChannelsByID.array().length > 50) {
                    throw new Error("Cannot display 50 values. Please consider console logging the collection")
                }

                return AllChannelsWithTimeout.map(cl => cl.join("\n"))
            }
        }
    }

    getAllNSFWChannels(id, asmsg) {
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

            AllNSFWChannels.set(this.guild.id, this.guild.channels.filter(ch => ch.nsfw))

            if (!asmsg) {

                return AllNSFWChannels;

            } else if (asmsg === true) {
                if (AllChannelsByID.array().length > 50) {
                    throw new Error("Cannot display 50 values. Please consider console logging the collection")
                }

                return AllNSFWChannels.map(col => col.map(ch => ch.name))

            }
        }
    }
}

module.exports = {
    Info
}