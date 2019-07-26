## API Update Notes
<br><br>
- [x] Includes updates to the API itself (core changes like adding functions, changing functions, etc)
   - [x] Update includes breaking changes (New functions, modified existing functions, added methods)
   - [x] Updated **doesn't** include breaking changes (Changes to documentation, README, LICENSE, etc)
<br><br>
   ____ 
### New Changes to the API
#### Changes include:

- [x] Functions involving GuildMember added
- [x] Extended existing functions 
- [x] Replaced some functions by extending existing functions
- [ ] Client properties/methods
<br><br>
___
> New Functions

- **getAllMembersByUserObject**
<br><br>
Maps all the members in the guild by their User Object
<br><br>
___

- **getAllMembersByDisplayName**
<br><br>
Maps all the members in the guild by their display name depending on if a Boolean parameter was provided
<br><br>
___ 

- **getAllMembersByID**
<br><br>
Maps all the members in the guild by their ID depending on if a Boolean parameter was provided
<br><br>
___
- **getAllMemberRoles**
<br><br>
Maps all the member's roles by name and ID depending on if a Boolean parameter was provided
<br><br>
___
- **getAllGuildRolesByObject**
<br><br>
Maps all the roles in the guild by their Role Object
<br><br>
___
- **getAllGuildRolesByName**
<br><br>
Maps all the roles in the guild by their name
<br><br>
___
- **getAllGuildRolesByID**
<br><br>
Maps all the roles in the guild by their ID
<br><br>
___
- **getAllGuildRolesByHexColor**
<br><br>
Maps all the roles in the guild by their name + hex color
<br><br>
___
<br><br>

## Replaced some functions by extending existing ones

> Replaced 'getOwnerInfo()' by extending 'getOwner()'

- [x] Gets detailed information about the owner (User object, ID, name, etc)

<br>

> Replaced 'getGuildInfo()' by extending 'getGuild()'

- [x] Gets detailed information about the guild (Guild object, name, ID, member count, etc)