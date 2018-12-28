# Coursework 🎤📝

[![Build Status](https://travis-ci.org/JamesIves/discord-wow-armory-bot.svg?branch=master)](https://travis-ci.org/JamesIves/discord-wow-armory-bot) [![Issues](https://img.shields.io/github/issues/JamesIves/discord-wow-armory-bot.svg)](https://github.com/JamesIves/discord-wow-armory-bot/issues)

This is where I'll place a description about the project, general overview of what it does, etc. I always place a link to the Github issues above, and if there's unit tests to the unit testing tool badge to show if the build is passing or not. The first time something is referenced like an external library I place a link to the documentation like [this](https://jamesiv.es). For section titles I always add a relevent emoji using the emoji cheat sheet: https://gist.github.com/rxaviers/7360908

## Installation Steps :minidisc: 

1. This is the first `installation step`.
2. This is the second `installation step`.
3. This is the third `installation step`.
4. If I have a one click install button, I'll place it below. Otherwise I'll remove it.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/JamesIves/discord-wow-armory-bot/master)

---

If there's a one click install button I'll give some additional details about how to run the service independantly.

```
# Install & Run
$ pip install -r requirements.txt
$ python app.py

# Tests
$ python tests.py
```

## Configuration :file_folder: 

This is where I'll place a table about environment variables if they exist, and a description of what they do.

| Key  | Value Information | Required |
| ------------- | ------------- | ------------- |
| `WOW_CLIENT_ID`  | Required to make calls to the Blizzard API, you can sign up for a client id [here](https://dev.battle.net/).  | **Yes** |
| `WOW_CLIENT_SECRET`  | Required to make calls to the Blizzard API, you can sign up for a client secret [here](https://dev.battle.net/).  | **Yes** |
| `WOW_REGION`  | The server region you'd like to query, for example `us`, or `eu`.  | **Yes** |
| `LOCALE`  | The language for your selected WoW region, for example `en_US`, or `en_GB`. Locale depends on region. Please refer to the [Blizzard API documents](https://dev.battle.net/) for more information. At this time this bot will only return data in English.   | **Yes** |
| `DISCORD_BOT_TOKEN`  | The token for your Discord bot user, you can sign up for one [here](https://discordapp.com/developers/docs/intro). | **Yes** |

Some additional details if they are required.


## Commands :computer: 
If there's some commands, I'll list them here in a code block.

```
# Displays a players PVE progression, dungeon kills, keystone achievements, etc.
!armory pve <name> <realm>
!armory pve <armory-link>

# Displays a players PVP progression, arena ratings, honorable kills, etc.
!armory pvp <name> <realm>
!armory pvp <armory-link>

# You can also provide an optional region to each query to display players from other WoW regions outside of the bot default, for example EU, US, etc.
!armory pve <name> <realm> <region>
!armory pvp <armory-link> <region>

# Displays the currnet wow token price.
!armory token
!armory token <region>

# Command list/help
!armory help
```

## FAQ :speech_balloon: 
If an FAQ is needed, I'll place them here in a code block.
```
Q: Why does the bot not recognize my realm?
A: Realm names with multiple words must be seperated by a dash, for example burning legion would be burning-legion.

Q: Why does it show that my alt has completed an achievement?
A: Some achievements are account wide so the API response for your alt will be the same as your main.

Q: Do you plan on supporting Mythic+ scores?
A: Only if the official Blizzard API begins supporting their own metric.

Q: Why don't you show this raid?
A: I aim to support the most recent raids in the current expansion. Because Discord has a character limit I will start trimming the oldest raid in the current expansion if necessary.

Q: What expansion does this bot currently support?
A: Battle for Azeroth.
```


## Methods 📡
If explaining methods I like to place the data in their own table with descriptions etc.

---

#### `set_content`
The `set_content` method can be used to send basic messages to Discord.

| Argument  | Description | Type |
| ------------- | ------------- | ------------- |
| `content`  | Content represents a standard message on Discord. | `String` |
| `title`  | Displays a title on an message attachment. | `String` |
| `description`  | Displays a description on an message attachment. | `String` |
| `url`  | Creates a link on the title. | String|
| `color`  | Displays a colored strip on the left side of an message attachment. This should be a hexademical value, for example `0xF58CBA`. | `Integer` |
| `timestamp`  | Displays a timestamp beneath the message attachment. Must be a valid timestamp, consider using Python's `datetime` to achieve localtime.  | `String` |

---

#### `set_author`
Using `set_author` you're able to attach an author to an message attachment.

| Argument  | Description | Type |
| ------------- | ------------- | ------------- |
| `name`  | The name of the author. | `String` |
| `url`  | Creates a link on the author name. | `String` |
| `icon_url`  | Displays an author icon, must resolve to a valid image path. | `String` |

---

#### `set_footer`
Using `set_footer` you're able to attach a footer to an message attachment.

| Argument  | Description | Type |
| ------------- | ------------- | ------------- |
| `text`  | The text that should display in the footer. | `String` |
| `icon_url`  | Displays a footer icon, must resolve to a valid image path. | `String` |


---

#### `set_thumbnail`
Using `set_thumbnail` you're able to attach a thumbnail to a message attachment.

| Argument  | Description | Type |
| ------------- | ------------- | ------------- |
| `url`  | Displays a thumbnail image in the message attachment | `String` |

---

##### `set_image`
Using `set_image` you're able to attach an image to a message attachment.

| Argument  | Description | Type |
| ------------- | ------------- | ------------- |
| `url`  | Displays an image in the message attachment | `String` |

---

#### `add_field`
Using `add_field` you're able to attach a field to a message attachment. You can add as many fields as you want.

| Argument  | Description | Type |
| ------------- | ------------- | ------------- |
| `name`  | The name of the field. | `String` |
| `value`  | The value of the field. | `String` |
| `inline`  | Determines if the field should display inline or not, this is primarily used for formatting when you have multiple fields. | `Boolean` |

---

#### `send`
When you're done formatting your message attachment you can use the `send` method to dispatch it to Discord.

---

I always like to place a screenshot of the project, taken using Command + Shift + 4 and then hitting space so you get a drop shadow on the image. Or record a Gif using the [Giphy Caputre](https://giphy.com/apps/giphycapture).

![Screenshot](https://jamesiv.es/assets/projects/thelily/article_desktop.png)