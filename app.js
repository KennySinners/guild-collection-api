const {
    guildCollection,
    ownerCollection,
    ChannelsCollectionByType,
    AllChannelsByObjCollection,
    AllChannelsByName,
    AllChannelsByID,
    AllChannelsWithTimeout,
    AllNSFWChannels,
    AllMembers,
    AllMembersByDisplayName,
    AllMembersByID,
    AllMemberRoles,
    AllGuildRoles,
    AllGuildRolesByName,
    AllGuildRolesByID,
    AllGuildRolesByHexColor
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
                return guildCollection.map(gl => gl.map(x => x.id + " | Member Count: " + x.memberCount))
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

    getAllChannelsByName(id, asmsg = Boolean) {
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

    getAllChannelsByID(id, asmsg = Boolean) {
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

    getAllChannelsWithTimeout(id, asmsg = Boolean) {
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

                return AllChannelsWithTimeout.map(cl => cl.join("\n"));
            }
        }
    }

    getAllNSFWChannels(id, asmsg = Boolean) {
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

    getAllMembersByUserObject(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if(!id) {
            throw new Error("Please provide a parameter of type string: Guild ID not supplied.")
        } else if(!this.client.guilds.get(id)) {
            throw new Error("The client was unable to find the provided guild id. Please make sure that the client is in the provided guild")
        }

        AllMembers.set(this.guild.id, this.guild.members.map(x => x.user))

        return AllMembers;
    }

    getAllMembersByDisplayName(id, asmsg = Boolean) {
        /**
         * @param {String} id
         * @param {Boolean} asmsg
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if(!id) {
            throw new Error("Please provide a parameter of type string: Guild ID not supplied.")
        } else if(!this.client.guilds.get(id)) {
            throw new Error("The client was unable to find the provided guild id. Please make sure that the client is in the provided guild")
        }

        AllMembersByDisplayName.set(this.guild.id, this.guild.members.map(x => x.displayName))

        if (!asmsg || asmsg === false) {
            return AllMembersByDisplayName.array();
        } else {
            return AllMembersByDisplayName.array().map(y => y.join("\n"));
        }
    }

    getAllMembersByID(id, asmsg = Boolean) {
        /**
         * @param {String} id
         * @param {Boolean} asmsg
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if(!id) {
            throw new Error("Please provide a parameter of type string: Guild ID not supplied.")
        } else if(!this.client.guilds.get(id)) {
            throw new Error("The client was unable to find the provided guild id. Please make sure that the client is in the provided guild")
        }

        AllMembersByID.set(this.guild.id, this.guild.members.map(x => x.id + " | Display Name: " + x.displayName))

        if (!asmsg || asmsg === false) {
            return AllMembersByID.array();
        } else {
            return AllMembersByID.array().map(x => x.join("\n"));
        }
    }

    getAllMemberRoles(id, memberID, asmsg = Boolean) {
        /**
         * @param {String} id
         * @param {String} memberID
         * @param {Boolean} asmsg
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if(!id) {
            throw new Error("Please provide a parameter of type string: Guild ID not supplied")
        } else if(!memberID) {
            throw new Error("Please provide a parameter of type string: Member ID not supplied")
        } else if(!this.client.guilds.get(id)) {
            throw new Error("The client was unable to find the supplied guild id. Please check if the client is in the supplied guild")
        } else if(!this.client.users.get(id)) {
            throw new Error("The client was unable to find the supplied member id. Please  check if the client and the member share a server.")
        }

        AllMemberRoles.set(this.guild.id, this.guild.members.get(memberID).roles)

        if (!asmsg || asmsg === false) {
            return AllMemberRoles.get(this.guild.id).filter(x => x.name !== "@everyone").map(z => z)
        } else {
            return AllMemberRoles.get(this.guild.id).filter(x => x.name !== "@everyone").map(z => "Name" + z.name + " | ID: " + z.id)
        }
    }

    getAllGuildRolesByObject(id) {
        /**
         * @param {String} id
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if(!id) {
            throw new Error("Please provide a parameter of type string: Guild ID not supplied.")
        } else if(!this.client.guilds.get(id)) {
            throw new Error("The client was unable to find the provided guild id. Please make sure that the client is in the provided guild")
        }

        AllGuildRoles.set(this.guild.id, this.guild.roles.map(x => x));

        return AllGuildRoles;
    }

    getAllGuildRolesByName(id) {
        /**
         * @param {String} id 
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if(!id) {
            throw new Error("Please provide a parameter of type string: Guild ID not supplied.")
        } else if(!this.client.guilds.get(id)) {
            throw new Error("The client was unable to find the provided guild id. Please make sure that the client is in the provided guild")
        }

        AllGuildRolesByName.set(this.guild.id, this.guild.roles.map(x => x));

        return AllGuildRolesByName.get(this.guild.id).filter(x => x.name !== "@everyone").map(z => z.name)
    }

    getAllGuildRolesByID(id) {
        /**
         * @param {String} id 
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if(!id) {
            throw new Error("Please provide a parameter of type string: Guild ID not supplied.")
        } else if(!this.client.guilds.get(id)) {
            throw new Error("The client was unable to find the provided guild id. Please make sure that the client is in the provided guild")
        }

        AllGuildRolesByID.set(this.guild.id, this.guild.roles);

        return AllGuildRolesByID.get(this.guild.id).filter(x => x.name !== "@everyone").map(z => "Name: " + z.name + " | ID: " + z.id)
    }

    getAllGuildRolesByHexColor(id) {
        /**
         * @param {String} id 
         * @type {Collection}
         */
        this.guild = this.client.guilds.get(id);

        if(!id) {
            throw new Error("Please provide a parameter of type string: Guild ID not supplied.")
        } else if(!this.client.guilds.get(id)) {
            throw new Error("The client was unable to find the provided guild id. Please make sure that the client is in the provided guild")
        }

        AllGuildRolesByHexColor.set(this.guild.id, this.guild.roles);

        return AllGuildRolesByHexColor.get(this.guild.id).filter(x => x.name !== "@everyone").map(z => "Name: " + z.name + " | Hex Color: " + z.hexColor);
    }
}

module.exports = {
    Info
}