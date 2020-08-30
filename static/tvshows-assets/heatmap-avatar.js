var showName = "Avatar";
var chartHeight = 500;
var episodeRatings = 
[
    [0, 0, 8.6], [0, 1, 8.1], [0, 2, 8.3], [0, 3, 8.5], [0, 4, 8.2], [0, 5, 8.2], [0, 6, 8.0], [0, 7, 8.2], [0, 8, 8.9], [0, 9, 8.0], [0, 10, 7.8], [0, 11, 7.0], [0, 12, 9.1], [0, 13, 9.1], [0, 14, 7.9], [0, 15, 7.9], [0, 16, 8.5], [0, 17, 8.0], [0, 18, 8.6], [0, 19, 9.4], [0, 20, 9.7], [1, 0, 8.7], [1, 1, 8.2], [1, 2, 8.4], [1, 3, 7.7], [1, 4, 7.5], [1, 5, 9.2], [1, 6, 9.5], [1, 7, 9.0], [1, 8, 8.6], [1, 9, 8.8], [1, 10, 8.8], [1, 11, 8.4], [1, 12, 9.0], [1, 13, 8.7], [1, 14, 9.3], [1, 15, 8.8], [1, 16, 9.1], [1, 17, 8.6], [1, 18, 9.1], [1, 19, 9.6], [2, 0, 8.7], [2, 1, 8.4], [2, 2, 8.0], [2, 3, 8.8], [2, 4, 8.5], [2, 5, 9.5], [2, 6, 8.2], [2, 7, 9.1], [2, 8, 7.8], [2, 9, 9.1], [2, 10, 9.4], [2, 11, 8.9], [2, 12, 9.2], [2, 13, 8.7], [2, 14, 9.2], [2, 15, 8.9], [2, 16, 8.6], [2, 17, 9.1], [2, 18, 9.5], [2, 19, 9.8], [2, 20, 9.8], 
];

var episodeNames = 
['Avatar: The Last Airbender', 'The Boy in the Iceberg', 'The Avatar Returns', 'The Southern Air Temple', 'The Warriors of Kyoshi', 'The King of Omashu', 'Imprisoned', 'The Spirit World: Winter Solstice, Part 1', 'Avatar Roku: Winter Solstice, Part 2', 'The Waterbending Scroll', 'Jet', 'The Great Divide', 'The Storm', 'The Blue Spirit', 'The Fortuneteller', 'Bato of the Water Tribe', 'The Deserter', 'The Northern Air Temple', 'The Waterbending Master', 'The Siege of the North, Part 1', 'The Siege of the North, Part 2', 'The Avatar State', 'The Cave of Two Lovers', 'Return to Omashu', 'The Swamp', 'Avatar Day', 'The Blind Bandit', 'Zuko Alone', 'The Chase', 'Bitter Work', 'The Library', 'The Desert', "The Serpent's Pass", 'The Drill', 'City of Walls and Secrets', 'The Tales of Ba Sing Se', "Appa's Lost Days", 'Lake Laogai', 'The Earth King', 'The Guru', 'The Crossroads of Destiny', 'The Awakening', 'The Headband', 'The Painted Lady', "Sokka's Master", 'The Beach', 'The Avatar and the Fire Lord', 'The Runaway', 'The Puppetmaster', 'Nightmares and Daydreams', 'The Day of Black Sun, Part 1: The Invasion', 'The Day of Black Sun, Part 2: The Eclipse', 'The Western Air Temple', 'The Firebending Masters', 'The Boiling Rock: Part 1', 'The Boiling Rock, Part 2', 'The Southern Raiders', 'The Ember Island Players', "Sozin's Comet, Part 1: The Phoenix King", "Sozin's Comet, Part 2: The Old Masters", "Sozin's Comet, Part 3: Into the Inferno", "Sozin's Comet, Part 4: Avatar Aang"]
;

var episodeDesc = 
['Sokka and his sister Kya - later renamed Katara, must travel the world to find masters for Aang, who is the Avatar. However, they must evade a critical foe, Prince Zuko of the Fire Nation, who wants to capture Aang.', 'The legend of the Avatar is told. Katara and Sokka find a strange boy within an iceberg.', "Aang and Katara inadvertently set off a trap the brings the warmongering Fire Nation to the Southern Water Tribe's peaceful village at the South Pole.", 'After his departure from the Southern Air Temple 100 years ago, an excited Aang finally returns home but is disillusioned by what he finds there.', 'The gang arrives at Kyoshi Island and are captured by some Kyoshi warriors. When Aang reveals that he is the avatar, news quickly spreads out and suddenly reaches to Prince Zuko who then goes to Kyoshi Island to capture him.', "Aang's abilities as an airbender are challenged by a king.", 'In a nearby Earth Village, the gang meets a teenage earthbender named Haru. This village lives in fear of the Fire Nation, for soldiers there capture any earthbenders they can find.', 'Aang and friends visit a village being terrorized by an angry spirit. Iroh is captured by Earth Kingdom soldiers.', 'To contact the spirit of the previous Avatar, Aang must reach a temple in the Fire Nation before the sun sets on the following day. There he will learn what he must do to restore balance to the world. Zuko must defy his banishment to follow Aang.', 'Katara, desperate to improve her abilities and teach Aang, steals an expensive waterbending scroll from pirates, causing them to pursue the group.', 'Aang, Katara, and Sokka have their friendship tested by a charismatic Rebel Leader who is fighting against the Fire Nation.', 'Aang is tested as the Avatar when he must help two feuding clans cross a dangerous canyon peacefully.', "Aang relives the events after finding out that he is the Avatar 100 years ago and tells them to Katara, while Iroh tells the story of Zuko's scar and banishment to the crew.", 'When Aang is captured by the Fire Nation, his only hope is a mysterious masked figure.', 'The gang visits a village where a fortuneteller lives who is said to never be wrong. Aang tries to show Katara how he feels about her.', "Sokka and Katara meet a friend of their father who offers to take them to join the Water Tribe's navy. Aang fears his friends will choose seeing their father again over staying with him.", 'When he meets an outcast from the Fire Nation, Aang is impatient to skip ahead in his training.', 'Aang is upset when he finds an old Air Temple has been desecrated by an old inventor and his son.', 'The heroes finally arrive at the North Pole. But for Katara, the trip may have been in vain, as Master Pakku refuses to teach girls waterbending.', "While Katara herself becomes a great waterbending master, Commander Zhao plans a siege on the Northern Water Tribe. Meanwhile, Sokka's on a mission to stop this siege while Aang tries to buy them some time.", 'As the Fire Nation continues its assault on the Northern Water Tribe, Sokka, Katara and Yue set out on a search for Aang, being guided by his spirit.', "Aang and friends arrive in the Earth Kingdom to begin his earthbending training, but a local general convinces Aang that all he needs to do is learn to control his Avatar state. Azula, Zuko's sister, arrives to escort her brother and uncle back to the Fire Nation.", 'On their way to Omashu, Team Avatar is forced to travel underground to avoid Fire Nation attacks. Iroh and Zuko adjust to life as fugitives.', "Finding the city of Aang's old friend, King Bumi, captured by the Fire Nation, the heroes hatch a plan to rescue Aang's earthbending teacher. Azula gathers two old friends to help her hunt the Avatar.", 'Aang hears a swamp calling to him. In the swamp, Aang and the gang find out that this is not any natural swamp.', 'Sokka and Katara have to solve a centuries-old crime when Aang is imprisoned for a murder allegedly committed by one of his past incarnations.', 'While looking for an Earthbending teacher, Aang, and his friends discover a young blind girl with secrets of her own.', 'As Zuko tries to make it by in exile without his uncle, he remembers how his father became Firelord and what happened to his mother.', "Every time they land, Azula and her warriors find Aang, Katara, Sokka, and Toph. Toph refuses to help set up camp, claiming she carries her own weight and no one else's. After a fight between Aang, Katara and Toph, Toph storms off angrily. Aang lays a decoy trail for Azula and Sokka, Katara, Appa, and Momo, flee the other direction. Aang waits for Azula and is fighting her when Zuko and Iroh arrive. Soon, Katara, and Sokka come to the fight, too. Just as all hope of winning is lost, Toph arrives and, together, the six attack Azula. Knowing she is beat, Azula shoots ...", 'Aang begins to learn earthbending from Toph; Uncle Iroh resumes teaching Zuko firebending to better prepare him for facing Azula, and reveals a new technique he learned from watching waterbenders.', 'When he learns that there is a lost Library with all the knowledge in the world, Sokka convinces the others to seek it out in hopes of finding a weakness of the Fire Nation.', 'Lost in the desert without Appa, Team Avatar must find a way out. Iroh and Zuko make contact with a secret organization.', "After getting tickets for the ferry headed to Ba Sing Se, the gang meets an old friend. They skip the ferry ride to help some refugees, one of which is going to have a baby, get to Ba Sing Se. They must lead the refugees through the Serpent's Pass, a dangerous mountain-side path surrounded by water.", 'After arriving at the great wall of Ba Sing Se, Aang and the gang discover that the Fire Nation has constructed a great drilling machine to penetrate the wall. The drill is also followed by an army of Fire Nation troops. Also, Zuko and Iroh are having trouble hiding the fact that they are both Firebenders.', 'After getting a house to stay in, Aang and company are given a tour of Ba Sing Se. As they try to get in to tell the Earth King the news, they find that nothing is quite what is seems. Jet is in the city, too, and he is positive that Iroh and Zuko are Firebenders.', 'A series of short stories covering some of the time spent by Katara, Toph, Iroh, Sokka, Aang, Zuko and Momo as they live in Ba Sing Se.', 'In this special episode, we go back in time to the moment Appa was stolen, will find out where he has gone and who he has met along the way and more importantly where he is now!', 'The Avatar gang encounters Jet in Ba Sing Se and he helps them to discover the location of Appa. But they will end up discovering something else, a secret of the city.', 'The kids battle Long Feng and the Dai Li when they attempt to show the Earth King the vast conspiracy taking place in his city. Zuko becomes seriously ill and has feverish dreams as he faces a spiritual crisis.', 'Aang receives guidance from Guru Pathik at the Eastern Air Temple; Sokka is reunited with his long-lost father; Princess Azula has something diabolical in store for her enemies; Uncle and Zuko run their own tea shop.', "The heroes work together to stop Azula's destructive plans; Zuko finds companionship in an unlikely source and learns the time has come to make an imperative choice about his future.", 'Weeks after the fall of the Earth Kingdom, Aang and his friends must infiltrate the Fire Nation. Katara meets her father for the first time in years. Zuko returns home, but is uneasy with his newfound reputation.', "Posing as a regular kid, Aang goes to a Fire Nation school and sees what's missing from their lives. Zuko visits his uncle in prison.", 'When Aang and his friends come across a fishing village being poisoned by a nearby factory, a local legend comes to life to help the townspeople.', "After deciding he's the least valuable member of the team, Sokka seeks an apprenticeship with a sword-master. The rest of the gang tries to adjust to being without him. The imprisoned Iroh may not be as beaten as he seems.", 'On a forced vacation, Zuko, Azula, Ty Lee and Mai try to blend in with normal teenagers and learn about themselves and one another. Aang and company are attacked by an ominous assassin.', "Both Aang and Zuko must learn the history of how the war began. Zuko learns a secret about his great-grandfather's past.", 'When Toph discovers a quick way to make cash, Katara disapproves, and the rift between them has disastrous consequences.', 'Creepy things are afoot when the gang meets a mysterious old innkeeper with a secret.', 'As the invasion approaches, Aang has recurring nightmares about being unprepared to face the Firelord. Zuko feels the perks and pressures of being the prince again.', "Zuko makes a decision about his future. Aang reunites with many of his old friends in a full-scale invasion of the Fire Nation capitol to coincide with an eclipse which will remove the Fire Nation's powers.", 'The invasion seems to be succeeding until Aang learns that their arrival was anticipated. Zuko confronts his father.', 'The gang hides out in the Western Air Temple. Zuko tries to convince the gang of his change in heart, but they are very hesitant. Combustion Man/Sparky-Sparky Boom Man attacks again.', "Zuko has joined up with Aang's group and is now ready to teach Aang fire bending. Unfortunately, Zuko has found out that he has lost his ability and must now relearn it. Zuko and Aang travel to find the original source of fire bending so that they both can learn from The Firebending Masters.", "Sokka and Zuko head to the Fire Nation's most heavily guarded prison -- the Boiling Rock -- in hopes to find and break-out the captured invasion force.", 'The escape is planned and the heroes attempt to break from the prison that very day. But problems come when Azula, Mai and Ty Lee arrive at the prison.', 'Trying to prove that she can trust him, Zuko helps Katara track down the man who killed her mother.', 'The gang, now hiding at Ember Island, watch a play about themselves and their adventures.', "Sozin's Comet is only three days away. Zuko tells the others what the Fire Lord plans on the day of the comet and the gang realizes that they must stop him before then. But Aang doubts that he can do what is expected of him.", 'Aang awakes on a mysterious island and confronts his past lives for advice on how to stop the Fire Lord without killing him. The rest of the group searches for Aang.', "Zuko battles his sister with Katara's help for the right to be named Fire Lord. Elsewhere, Aang meets Ozai just as the comet arrives.", "Aang's moment of truth arrives. Can he defeat Ozai, the Phoenix King? Will he be forced to take a human life? All the characters face their greatest challenges."]
;