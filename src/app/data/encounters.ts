import { Encounter } from "../models/encounter";

const low_encounters: Encounter[] = [{
    "description": "A Minion of Villain A",
    "dm_description": "See Villain A table of encounters"
},
{
    "description": "A Minion of Villain B",
    "dm_description": "See Villain B table of encounters"
},
{
    "description": "A Minion of Villain C",
    "dm_description": "See Villain C table of encounters"
},
{
    "description": "You hear sounds in the hold",
    "dm_description": "A stowaway has snuck on board at your last port."
},
{
    "description": "A ship can be spotted in the distance",
    "dm_description": "Roll a random ship from the Ghosts of Saltmarsh tables."
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "No encounter",
    "dm_description": ""
},
{
    "description": "You see a sea creature approaching",
    "dm_description": "A dolphin approaches. In good weather, it simply follows your boat. In bad weather, it will offer to guide you, and there is a 25% chance he is in a bad mood and will instead guide you in a circle."
},
{
    "description": "You hear sounds in the hold",
    "dm_description": "The sound is the grinding of barnacles against each other. You need to scrape them off and make a Repair action, or they reduce the speed of the ship by 1mph."
},
{
    "description": "A ship can be spotted in the distance",
    "dm_description": "A merchant vessel arrives, offering to sell you food or grog."
},
{
    "description": "A ship can be spotted in the distance",
    "dm_description": "There is a Sailing Ship from one of the nations, flying their colors. It will not attack unless the players are known pirates, or from a hostile nation."
},
{
    "description": "A sea creature approaches",
    "dm_description": "You encounter a whale, who is suffering from eating something unpleasant. If you can speak to him with Speak with Animals, he will allow you to take the uncommon magic item that is bothering him."
}];

const medium_encounters: Encounter[] = [
    {
      "description": "A Lieutenant of Villain A",
      "dm_description": "See Villain A table of encounters"
    },
    {
      "description": "A Lieutenant of Villain B",
      "dm_description": "See Villain B table of encounters"
    },
    {
      "description": "A Lieutenant of Villain C",
      "dm_description": "See Villain C table of encounters"
    },
    {
      "description": "You hear a haunting melody",
      "dm_description": "Harpies led by a Harpy Matriarch attempt to lure the ship into a reef to trap it (requires a Ship skill check to escape). Harpies stay at max range, trying to lure sailors off of the ship in the meantime but will defend themselves if approached."
    },
    {
      "description": "Intense waves, evidence of an oncoming storm",
      "dm_description": "Knocks the ship off course by 1 day, and the next weather roll is made against the Severe Weather table."
    },
    {
      "description": "Two ships can be spotted in the distance",
      "dm_description": "Pirates are attacking a merchant vessel. The merchants have a ballista but are outmatched."
    },
    {
      "description": "You hear sounds in the hold",
      "dm_description": "Rats are eating into the stores, decrement the food supply by 1 size."
    },
    {
      "description": "A ship can be spotted in the distance",
      "dm_description": "Roll a random ship from the Ghosts of Saltmarsh tables."
    },
    {
      "description": "No encounter",
      "dm_description": ""
    },
    {
      "description": "No encounter",
      "dm_description": ""
    },
    {
      "description": "No encounter",
      "dm_description": ""
    },
    {
      "description": "No encounter",
      "dm_description": ""
    },
    {
      "description": "No encounter",
      "dm_description": ""
    },
    {
      "description": "No encounter",
      "dm_description": ""
    },
    {
      "description": "You hear sounds in the hold",
      "dm_description": "Crabs are swarming the ship. It is a skill challenge to remove them, on failure they devour your stores, decrementing the food supplies by 1. On success, add 1 food supply."
    },
    {
      "description": "A sea creature approaches",
      "dm_description": "A Dragon Turtle approaches near your ship. It is not hostile unless attacked, but it has a chance (25%) of running into your ship and doing 3d10 damage to the hull as it breaches."
    },
    {
      "description": "A ship can be spotted in the distance",
      "dm_description": "There is a ship from one of the nearby nations, flying their colors. It will not attack unless the players are known pirates, or from a hostile nation, but it is a Warship if attacked."
    },
    {
      "description": "A Minion of Villain A",
      "dm_description": "See Villain A table of encounters"
    },
    {
      "description": "A Minion of Villain B",
      "dm_description": "See Villain B table of encounters"
    },
    {
      "description": "A Minion of Villain C",
      "dm_description": "See Villain C table of encounters"
    }
];

const high_encounters: Encounter[] = [
    {
      "description": "Encounter with General of Villain A",
      "dm_description": "See Villain A table of encounters"
    },
    {
      "description": "Encounter with General of Villain B",
      "dm_description": "See Villain B table of encounters"
    },
    {
      "description": "Encounter with General of Villain C",
      "dm_description": "See Villain C table of encounters"
    },
    {
      "description": "Rough Shoals are ahead, making the waters choppy and dangerous to pass.",
      "dm_description": "To pass through requires a successful Navigate check, or 1 extra day to navigate around. If failed, the hull of the ship takes 10d10 damage."
    },
    {
      "description": "A blue dragon hunts in this area, and you encounter it eating its prey.",
      "dm_description": "Requires a ship Stealth (Agi + crew quality) check. If it notices you it will fly over to scout your ship, and if you have over 1d8 luxuries on board, it can sense the treasure and will stalk you for 1d8 days, waiting for a moment to attack. It will not attack immediately unless fired on."
    },
    {
      "description": "Two ships can be spotted in the distance",
      "dm_description": "Pirates will attempt to pull alongside and demand payment for use of the waters. If the players can't negotiate or refuse to, the pirates attack."
    },
    {
      "description": "Intense waves, evidence of an oncoming storm",
      "dm_description": "Waterspouts erupt from the water, and water elementals and an Arclight Phoenix appear on board to try and sink the vessel. The party loses 1d4 days worth of travel time due to the storm and each part of their vessel which has hit points loses 6d10 hit points"
    },
    {
      "description": "A ship can be spotted in the distance",
      "dm_description": "A burning shipwreck, adrift on the waves. The ship has been attacked recently, and a use of Detect Magic will reveal the scrying magic that a nearby foe has cast on it. (It could be pirates, pirate hunters, or worse, a Dragon looking to expand their horde), and are using it to lure in other would-be rescuers for their loot."
    },
    {
      "description": "A sea creature approaches",
      "dm_description": "A giant squid or young kraken attacks your ship."
    },
    {
      "description": "Intense waves, evidence of an oncoming storm",
      "dm_description": "Knocks the ship off course by 1 day, and the next weather roll is made against the Supernatural Weather table."
    },
    {
      "description": "A vessel, barely visible through mysterious fog",
      "dm_description": "A Ghost ship populated by spectral sailors under the command of an undead. It will close to range, and demand to speak to your captain. It is looking for the powerful wizard that sunk their vessel, and if the party refuses to accompany them, they attack. If they do accompany, you can have them lead the party to a wizard's tower on an island, and ask that they convince him to come to sea, at which point they will take him."
    },
    {
      "description": "A storm giant rises from the water, demanding tribute",
      "dm_description": "The Storm Giant will board the ship, and demand a feast (1 die of grog and food). If not provided one, he will attack and attempt to cripple the vessel before leaping back into the sea."
    },
    {
      "description": "A Lieutenant of Villain A",
      "dm_description": "See Villain A table of encounters"
    },
    {
      "description": "A Lieutenant of Villain B",
      "dm_description": "See Villain B table of encounters"
    },
    {
      "description": "A Lieutenant of Villain C",
      "dm_description": "See Villain C table of encounters"
    },
    {
      "description": "You see floating supplies upon the water",
      "dm_description": "The players can recover 1 die size worth of Grog and Food, but must figure out how to remove them from the ocean without encountering the Wereshark using them as bait."
    },
    {
      "description": "A ship can be spotted in the distance",
      "dm_description": "You see a merchant ship in distress. The merchants will agree to come on board to escape their sinking ship. Requires a skill challenge for Athletics to remove loot, each success grants 1 supply of your choice before the boat sinks. You must take on 6 extra passengers, and 10 extra crew to do this."
    },
    {
      "description": "You hear a haunting melody",
      "dm_description": "A benevolent Siren has decided to leave her mourning, and instead lure sailors away from a dangerous reef. She asks to be taken on board, to see the world. (Add her as crew, this encounter from now on becomes the Harpy event in the medium danger table)"
    },
    {
      "description": "You see a small boat, and a steady stream of bubbles rising to the surface.",
      "dm_description": "Two halflings are using a Diving Suit to explore a shipwreck for treasure, and offer to allow the party to explore instead, in exchange for half the treasure found. The wreck is overrun with sharks."
    },
    {
      "description": "You encounter a tradewind, taking you swiftly along its path",
      "dm_description": "Roll 1d4, and move that many days closer to the destination."
    }
];

const lucky_encounters: Encounter[] = [
    {
      "description": "You see an island in the distance",
      "dm_description": "The overgrown island has a small hut with some supplies (increase Food by 1 die size if looted), and the corpse of a druid, clearly killed by something. Investigating will lead to a Kuo-Toa shrine to Blibdoolpoolp, and a passage to the Underdark."
    },
    {
      "description": "A ship can be spotted in the distance",
      "dm_description": "A longboat, the entire crew dead, floats on the waves. There is a Rare magic item in the center of the boat, and banshee that guards it."
    },
    {
      "description": "You see an island in the distance",
      "dm_description": "The island is a penal colony of slaves, ruled over by a savage warlord who is unhappy that you tresspassed on his realm."
    },
    {
      "description": "A shadowy form can be seen below the surface",
      "dm_description": "A close look reveals that the form is a Black Dragon, hunting under the water, before it dives into an underwater cave. The smell of acid and rot emminates from the ocean below."
    },
    {
      "description": "Sighting of Villain A",
      "dm_description": "You see the Villain themselves in the distance, or an obvious sign of their presence nearby."
    },
    {
      "description": "Sighting of Villain B",
      "dm_description": "You see the Villain themselves in the distance, or an obvious sign of their presence nearby."
    },
    {
      "description": "Sighting of Villain C",
      "dm_description": "You see the Villain themselves in the distance, or an obvious sign of their presence nearby."
    },
    {
      "description": "Dead minions of Villain C",
      "dm_description": "You can search their damaged vessel/base to determine a clue about a conflict with Villain B."
    },
    {
      "description": "Dead minions of Villain B",
      "dm_description": "You can search their damaged vessel/base to determine a clue about a conflict with Villain A."
    },
    {
      "description": "Dead minions of Villain A",
      "dm_description": "You can search their damaged vessel/base to determine a clue about a conflict with Villain C."
    },
    {
      "description": "A giant cloud floats over your vessel",
      "dm_description": "The cloud is a Storm Giant airship in disguise, and an emisary of the Storm Giants requests an audience with you, to charge you with a task."
    },
    {
      "description": "You see an island in the distance",
      "dm_description": "A shadowy island rises from the deeps, clouded by a deep fog, and even approaching it gives you an uncomfortable chill. It is one of the Domains of Dread, emerging because of a celestial convergence, luring in sailors."
    },
    {
      "description": "You hear sounds in the hold",
      "dm_description": "An illusion of a wizard has appeared into your hold, and claims that one of your crew are his long-lost relative. He wants to take them to live with him, and offers to give you a map to the tower."
    },
    {
      "description": "A sea creature approaches",
      "dm_description": "A killer whale, claiming to be a magically cursed former Pirate King, promises to lead you to his treasure if you free him from the curse."
    },
    {
      "description": "A ship can be spotted in the distance",
      "dm_description": "A thoroughly damp longship full of terrified sailors limps closer, they claim to have just escaped from the Elemental Plane of Water through a portal, which they will show the players if asked."
    },
    {
      "description": "A water elemental rises from the depths",
      "dm_description": "The Water Elemental is sent by a wizard trapped in a cave below the surface, and will grant the players the ability to breathe water to help him."
    },
    {
      "description": "A ship can be spotted in the distance",
      "dm_description": "A swift ship with a desperate merchant and minimal crew, who will give you a box containing a Rare magic item, which he has stolen from one of the villains, if you agree to hide his identity from them. Another longship approaches on the horizon, and it is helmed by a Lieutenant (or higher) of the villain you choose."
    },
    {
      "description": "You see an island in the distance",
      "dm_description": "The island has holes dug across it, and searching it carefully will lead to a cave containing a Metallic Dragon, who has gathered pirate treasure to make a lair."
    },
    {
      "description": "You see a golden shimmer on the waves",
      "dm_description": "Just below the surface, on a reef, is a pile of gold. The reef is sentient, and will give the gold to you if you convince it your cause is a noble one."
    },
    {
      "description": "You see bubbles surfacing from the ocean",
      "dm_description": "The bubbles are from an alchemical reaction occuring on a shipwreck below, filled with a shipment of potions, some of which are salvagable."
    }
];

export const ENCOUNTERS = {
    low: low_encounters,
    medium: medium_encounters,
    high: high_encounters,
    lucky: lucky_encounters
}