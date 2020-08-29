var showName = "Game of Thrones";
var chartHeight = 400;
var episodeRatings = [[0, 0, 9.1], [0, 1, 8.8], [0, 2, 8.7], [0, 3, 8.8], [0, 4, 9.1], [0, 5, 9.2], [0, 6, 9.2], [0, 7, 9.0], [0, 8, 9.6], [0, 9, 9.5], [1, 0, 8.8], [1, 1, 8.5], [1, 2, 8.8], [1, 3, 8.8], [1, 4, 8.8], [1, 5, 9.1], [1, 6, 8.9], [1, 7, 8.8], [1, 8, 9.7], [1, 9, 9.4], [2, 0, 8.8], [2, 1, 8.6], [2, 2, 8.9], [2, 3, 9.6], [2, 4, 9.0], [2, 5, 8.8], [2, 6, 8.7], [2, 7, 9.0], [2, 8, 9.9], [2, 9, 9.2], [3, 0, 9.1], [3, 1, 9.7], [3, 2, 8.9], [3, 3, 8.8], [3, 4, 8.8], [3, 5, 9.7], [3, 6, 9.1], [3, 7, 9.7], [3, 8, 9.6], [3, 9, 9.7], [4, 0, 8.5], [4, 1, 8.5], [4, 2, 8.5], [4, 3, 8.7], [4, 4, 8.6], [4, 5, 8.0], [4, 6, 9.0], [4, 7, 9.9], [4, 8, 9.5], [4, 9, 9.1], [5, 0, 8.5], [5, 1, 9.4], [5, 2, 8.7], [5, 3, 9.1], [5, 4, 9.7], [5, 5, 8.4], [5, 6, 8.6], [5, 7, 8.4], [5, 8, 9.9], [5, 9, 9.9], [6, 0, 8.6], [6, 1, 8.9], [6, 2, 9.2], [6, 3, 9.8], [6, 4, 8.8], [6, 5, 9.0], [6, 6, 9.4], [7, 0, 7.5], [7, 1, 7.8], [7, 2, 7.5], [7, 3, 5.5], [7, 4, 6.0], [7, 5, 4.1]];

var episodeNames = ['Winter Is Coming', 'The Kingsroad', 'Lord Snow', 'Cripples, Bastards, and Broken Things', 'The Wolf and the Lion', 'A Golden Crown', 'You Win or You Die', 'The Pointy End', 'Baelor', 'Fire and Blood', 'The North Remembers', 'The Night Lands', 'What Is Dead May Never Die', 'Garden of Bones', 'The Ghost of Harrenhal', 'The Old Gods and the New', 'A Man Without Honor', 'The Prince of Winterfell', 'Blackwater', 'Valar Morghulis', 'Valar Dohaeris', 'Dark Wings, Dark Words', 'Walk of Punishment', 'And Now His Watch Is Ended', 'Kissed by Fire', 'The Climb', 'The Bear and the Maiden Fair', 'Second Sons', 'The Rains of Castamere', 'Mhysa', 'Two Swords', 'The Lion and the Rose', 'Breaker of Chains', 'Oathkeeper', 'First of His Name', 'The Laws of Gods and Men', 'Mockingbird', 'The Mountain and the Viper', 'The Watchers on the Wall', 'The Children', 'The Wars to Come', 'The House of Black and White', 'High Sparrow', 'Sons of the Harpy', 'Kill the Boy', 'Unbowed, Unbent, Unbroken', 'The Gift', 'Hardhome', 'The Dance of Dragons', "Mother's Mercy", 'The Red Woman', 'Home', 'Oathbreaker', 'Book of the Stranger', 'The Door', 'Blood of My Blood', 'The Broken Man', 'No One', 'Battle of the Bastards', 'The Winds of Winter', 'Dragonstone', 'Stormborn', "The Queen's Justice", 'The Spoils of War', 'Eastwatch', 'Beyond the Wall', 'The Dragon and the Wolf', 'Winterfell', 'A Knight of the Seven Kingdoms', 'The Long Night', 'The Last of the Starks', 'The Bells', 'The Iron Throne']
var episodeDesc = ['Eddard Stark is torn between his family and an old friend when asked to serve at the side of King Robert Baratheon; Viserys plans to wed his sister to a nomadic warlord in exchange for an army.', "While Bran recovers from his fall, Ned takes only his daughters to King's Landing. Jon Snow goes with his uncle Benjen to the Wall. Tyrion joins them.", "Jon begins his training with the Night's Watch; Ned confronts his past and future at King's Landing; Daenerys finds herself at odds with Viserys.", "Eddard investigates Jon Arryn's murder. Jon befriends Samwell Tarly, a coward who has come to join the Night's Watch.", 'Catelyn has captured Tyrion and plans to bring him to her sister, Lysa Arryn, at the Vale, to be tried for his, supposed, crimes against Bran. Robert plans to have Daenerys killed, but Eddard refuses to be a part of it and quits.', 'While recovering from his battle with Jaime, Eddard is forced to run the kingdom while Robert goes hunting. Tyrion demands a trial by combat for his freedom. Viserys is losing his patience with Drogo.', "Robert has been injured while hunting and is dying. Jon and the others finally take their vows to the Night's Watch. A man, sent by Robert, is captured for trying to poison Daenerys. Furious, Drogo vows to attack the Seven Kingdoms.", "The Lannisters press their advantage over the Starks; Robb rallies his father's northern allies and heads south to war; The White Walkers attack the Wall; Tyrion returns to his father with some new friends.", "Robb goes to war against the Lannisters. Jon finds himself struggling on deciding if his place is with Robb or the Night's Watch. Drogo has fallen ill from a fresh battle wound. Daenerys is desperate to save him.", "Robb vows to get revenge on the Lannisters. Jon must officially decide if his place is with Robb or the Night's Watch. Daenerys says her final goodbye to Drogo.", "Tyrion arrives at King's Landing to take his father's place as Hand of the King. Stannis Baratheon plans to take the Iron Throne for his own. Robb tries to decide his next move in the war. The Night's Watch arrive at the house of Craster.", "Arya makes friends with Gendry. Tyrion tries to take control of the Small Council. Theon arrives at his home, Pyke, in order to persuade his father into helping Robb with the war. Jon tries to investigate Craster's secret.", 'Tyrion tries to see who he can trust in the Small Council. Catelyn visits Renly to try and persuade him to join Robb in the war. Theon must decide if his loyalties lie with his own family or with Robb.', "Lord Baelish arrives at Renly's camp just before he faces off against Stannis. Daenerys and her company are welcomed into the city of Qarth. Arya, Gendry, and Hot Pie find themselves imprisoned at Harrenhal.", "Tyrion investigates a secret weapon that King Joffrey plans to use against Stannis. Meanwhile, as a token for saving his life, Jaqen H'ghar offers to kill three people that Arya chooses.", "Theon seizes control of Winterfell. Jon captures a wildling, named Ygritte. The people of King's Landing begin to turn against King Joffrey. Daenerys looks to buy ships to sail for the Seven Kingdoms.", "Bran and Rickon have escaped Winterfell. Theon tries to hunt them down. Daenerys' dragons have been stolen. Jon travels through the wilderness with Ygritte as his prisoner. Sansa has bled and is now ready to have Joffrey's children.", "Stannis is just days from King's Landing. Tyrion prepares for his arrival. Jon and Qhorin are taken prisoner by the wildlings. Catelyn is arrested for releasing Jaime. Arya, Gendry, and Hot Pie plan to escape from Harrenhal.", "Stannis Baratheon's fleet and army arrive at King's Landing and the battle for the city begins. Cersei plans for her and her children's future.", "Joffrey puts Sansa aside for Margaery Tyrell. Robb marries Talisa Maegyr. Jon prepares to meet Mance Rayder. Arya says farewell to Jaqen H'ghar. Daenerys tries to rescue her dragons.", "Jon is brought before Mance Rayder, the King Beyond the Wall, while the Night's Watch survivors retreat south. In King's Landing, Tyrion asks for his reward. Littlefinger offers Sansa a way out.", 'Bran and company meet Jojen and Meera Reed. Arya, Gendry, and Hot Pie meet the Brotherhood. Jaime travels through the wilderness with Brienne. Sansa confesses her true feelings about Joffery to Margaery.', "Robb and Catelyn arrive at Riverrun for Lord Hoster Tully's funeral. Tywin names Tyrion the new Master of Coin. Arya says goodbye to Hot Pie. The Night's Watch returns to Craster's. Brienne and Jaime are taken prisoner.", "Jaime mopes over his lost hand. Cersei is growing uncomfortable with the Tyrells. The Night's Watch is growing impatient with Craster. Daenerys buys the Unsullied.", "Robb's army is falling apart. Jaime reveals a story, to Brienne, that he has never told anyone. Jon breaks his vows. The Hound is granted his freedom. The Lannisters hatch a new plan.", 'Jon and the wildlings scale the Wall. The Brotherhood sells Gendry to Melisandre. Robb does what he can to win back the Freys. Tyrion tells Sansa about their engagement.', "Jon and the wildlings travel south of the Wall. Talisa tells Robb that she's pregnant. Arya runs away from the Brotherhood. Daenerys arrives at Yunkai. Jaime leaves Brienne behind at Harrenhal.", 'Daenerys tries to persuade the Second Sons to join her against Yunkai. Stannis releases Davos from the dungeons. Sam and Gilly are attacked by a White Walker. Sansa and Tyrion wed.', "Robb and Catelyn arrive at the Twins for the wedding. Jon is put to the test to see where his loyalties truly lie. Bran's group decides to split up. Daenerys plans an invasion of Yunkai.", "Bran and company travel beyond the Wall. Sam returns to Castle Black. Jon says goodbye to Ygritte. Jaime returns to King's Landing. The Night's Watch asks for help from Stannis.", "Tyrion welcomes a guest to King's Landing. At Castle Black, Jon stands trial. Daenerys is pointed to Meereen, the mother of all slave cities. Arya runs into an old enemy.", "Joffrey and Margaery's wedding has come. Tyrion breaks up with Shae. Ramsay tries to prove his worth to his father. Bran and company find a Weirwood tree.", "Tyrion is arrested for the murder of Joffrey and awaits trial. Sansa escapes King's Landing. Sam sends Gilly to Mole's Town as the Night's Watch finds itself in a tight spot. Meereen challenges Daenerys.", "Jaime entrusts a task to Brienne. Daenerys frees Meereen. Jon is given permission to lead a group of Night's Watchmen to Craster's Keep. Bran and company are taken hostage.", "Tommen is crowned King of the Seven Kingdoms. Cersei builds her case against Tyrion. Sansa and Lord Baelish arrive at the Eyrie. The Night's Watch attacks Craster's Keep.", "Tyrion's trial has come. Yara and her troops storm the Dreadfort to free Theon. Daenerys meets Hizdar zo Loraq. Stannis makes a deal with the Iron Bank of Braavos.", "Tyrion tries to find a champion. Daenerys sleeps with Daario. The Hound becomes wounded. Jon's advice is ignored at Castle Black. Brienne and Podrick receive a tip on Arya's whereabouts.", "Theon helps Ramsay seize Moat Cailin. The wildlings attack Mole's Town. Sansa comes up with a story to protect Lord Baelish. Daenerys finds out a secret about Jorah Mormont. Oberyn Martell faces Gregor Clegane, the Mountain.", "The battle between the Night's Watch and the wildlings has come.", 'Jon makes an important decision. Daenerys experiences new consequences. Brienne and Podrick have an unexpected encounter. Bran achieves a goal, while Tyrion makes an important discovery.', 'Cersei and Jaime adjust to a world without Tywin. Tyrion and Varys arrive at Pentos. In Meereen, a new enemy emerges. Jon is caught between two kings.', "Arya arrives in Braavos. Jaime takes on a secret mission. Ellaria Sand seeks revenge for Oberyn's death. Stannis makes Jon a generous offer as the Night's Watch elects a new Lord Commander. Daenerys is faced with a difficult decision.", 'Tommen and Margaery wed. Arya has trouble adapting to her new life. Littlefinger reveals his plans to Sansa. Jon gives his first orders as Lord Commander. Tyrion and Varys arrive in Volantis.', 'Jorah Mormont sets sail alongside his prisoner, Tyrion. Cersei makes a move against the Tyrells. Jaime and Bronn sneak into Dorne. Ellaria and the Sand Snakes make their plans. Melisandre tempts Jon. The Harpies attack.', "Daenerys arrests the heads of Meereen's great families. Jon makes a difficult decision. Theon is forced to face Sansa. Stannis rides south. Tyrion and Jorah enter the ruins of Old Valyria.", 'Arya is put to the test. Tyrion and Jorah are captured by slavers. Loras Tyrell is judged by the Sparrows. Jaime and Bronn face the Sand Snakes. Sansa marries Ramsay Bolton.', 'Jon heads east as trouble begins to stir for Sam and Gilly at Castle Black. Sansa asks Theon for help. Tyrion and Jorah are sold as slaves. Cersei savors her triumph over the Tyrells as new plots are developed in the shadows.', 'Tyrion advises Daenerys. Sansa forces Theon to tell her a secret. Cersei remains stubborn. Arya meets her first target. Jon and Tormund meet with the wildling elders.', 'Jon and the wildlings return to Castle Black. Jaime meets with Doran Martell. Stannis makes a hard choice. Arya runs into Meryn Trant. Daenerys attends the grand reopening of the fighting pits.', 'Stannis arrives at Winterfell. Tyrion runs Meereen as Daario and Jorah go after Daenerys. Jaime and Myrcella leave Dorne. Jon sends Sam and Gilly to Oldtown. Arya challenges the Many-Faced God. Cersei confesses her sins.', 'The fate of Jon Snow is revealed. Daenerys is brought before Khal Moro. Tyrion gets used to living in Meereen. Ramsay sends his dogs after Theon and Sansa. Ellaria and the Sand Snakes make their move. Cersei mourns for Myrcella.', "Bran trains with the Three-Eyed Raven. Tommen meets with Cersei. Tyrion makes a bold move. Theon leaves while at Pyke new issues arise. Ramsay's brother is born. Davos asks Melisandre for a miracle.", 'Daenerys arrives at Vaes Dothrak. Sam and Gilly sail for Horn Hill. Arya trains as No One. Varys finds information on the Sons of the Harpy. Ramsay receives a gift. Tommen meets with the High Sparrow. At Castle Black, a miracle occurs.', 'Sansa arrives at Castle Black. Tyrion makes a deal with the slave masters. Jorah and Daario sneak into Vaes Dothrak. Ramsay sends a letter to Jon. Theon arrives at Pyke. Cersei and Olenna Tyrell plot against the High Sparrow.', 'Sansa and Jon make plans. Arya is given another chance to prove herself. Jorah confesses a secret to Daenerys. Tyrion meets with a red priestess. Yara finds her rule tested. Bran discovers the origin of the White Walkers.', "Bran and Meera find a new ally. Gilly meets Sam's family. Arya makes a difficult choice. The Lannisters and Tyrells march against the High Sparrow.", "Jon and Sansa gather troops. Jaime arrives at Riverrun. Olenna Tyrell plans to leave King's Landing. Theon and Yara plan a destination. Arya makes plans to leave.", 'Brienne arrives at Riverrun. Arya seeks shelter. Jaime meets with Edmure Tully. Cersei challenges the Faith. Sandor Clegane hunts for revenge. Tyrion faces the consequences of earlier decisions.', 'Jon and Sansa face Ramsay Bolton on the fields of Winterfell. Daenerys strikes back at her enemies. Theon and Yara arrive in Meereen.', 'Cersei and Loras Tyrell stand trial by the gods. Daenerys prepares to set sail for Westeros. Davos confronts Melisandre. Sam and Gilly arrive in the Citadel. Bran discovers a long-kept secret. Lord Frey has an uninvited guest.', 'Jon organizes the North\'s defenses. Cersei tries to even the odds. Daenerys comes home. Arya reminds the Freys "the North remembers." Sam adapts to life in Oldtown. The Night King makes his way south.', 'Daenerys receives an unexpected visitor. Jon faces resistance. Tyrion plans the conquest of Westeros. Cersei gathers her allies. Arya has a reunion with old friends. Sam risks his career and life.', 'Jon and Daenerys finally meet. Cersei gains a new ally. Sansa receives an unexpected visitor. Sam is confronted for his actions.', 'Daenerys takes matters into her own hands. Arya reaches her destination. Jaime and Bronn collect the spoils from the war with the Tyrells.', "Daenerys demands loyalty from the surviving Lannister soldiers; Jon heeds Bran's warning about White Walkers on the move; Cersei vows to vanquish anyone or anything that stands in her way.", 'Jon and his team go beyond the wall to capture a wight. Daenerys has to make a tough decision.', "Everyone meets in King's Landing to discuss the fate of the realm. In Winterfell, Sansa confronts Arya. Sam reaches Winterfell, where he and Bran discover a shocking secret about Jon Snow.", 'Jon and Daenerys arrive in Winterfell and are met with skepticism. Sam learns about the fate of his family. Cersei gives Euron the reward he aims for. Theon follows his heart.', 'Jaime faces judgment and Winterfell prepares for the battle to come.', 'The Night King and his army have arrived at Winterfell and the great battle begins.', 'The Battle of Winterfell is over and a new chapter for Westeros begins.', "Forces have arrived at King's Landing for the final battle.", "In the aftermath of the devastating attack on King's Landing, Daenerys must face the survivors."]