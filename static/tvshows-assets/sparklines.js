var showName = "Game of Thrones";
var episodeRatings = [[{ x: 0, y: 9.1 }, { x: 1, y: 8.8 }, { x: 2, y: 8.7 }, { x: 3, y: 8.8 }, { x: 4, y: 9.1 }, { x: 5, y: 9.2 }, { x: 6, y: 9.2 }, { x: 7, y: 9.0 }, { x: 8, y: 9.6 }, { x: 9, y: 9.5 }], [{ x: 10, y: 8.8 }, { x: 11, y: 8.5 }, { x: 12, y: 8.8 }, { x: 13, y: 8.8 }, { x: 14, y: 8.8 }, { x: 15, y: 9.1 }, { x: 16, y: 8.9 }, { x: 17, y: 8.8 }, { x: 18, y: 9.7 }, { x: 19, y: 9.4 }], [{ x: 20, y: 8.8 }, { x: 21, y: 8.6 }, { x: 22, y: 8.9 }, { x: 23, y: 9.6 }, { x: 24, y: 9.0 }, { x: 25, y: 8.8 }, { x: 26, y: 8.7 }, { x: 27, y: 9.0 }, { x: 28, y: 9.9 }, { x: 29, y: 9.2 }], [{ x: 30, y: 9.1 }, { x: 31, y: 9.7 }, { x: 32, y: 8.9 }, { x: 33, y: 8.8 }, { x: 34, y: 8.8 }, { x: 35, y: 9.7 }, { x: 36, y: 9.1 }, { x: 37, y: 9.7 }, { x: 38, y: 9.6 }, { x: 39, y: 9.7 }], [{ x: 40, y: 8.5 }, { x: 41, y: 8.5 }, { x: 42, y: 8.5 }, { x: 43, y: 8.7 }, { x: 44, y: 8.6 }, { x: 45, y: 8.0 }, { x: 46, y: 9.0 }, { x: 47, y: 9.9 }, { x: 48, y: 9.5 }, { x: 49, y: 9.1 }], [{ x: 50, y: 8.5 }, { x: 51, y: 9.4 }, { x: 52, y: 8.7 }, { x: 53, y: 9.1 }, { x: 54, y: 9.7 }, { x: 55, y: 8.4 }, { x: 56, y: 8.6 }, { x: 57, y: 8.4 }, { x: 58, y: 9.9 }, { x: 59, y: 9.9 }], [{ x: 60, y: 8.6 }, { x: 61, y: 8.9 }, { x: 62, y: 9.2 }, { x: 63, y: 9.8 }, { x: 64, y: 8.8 }, { x: 65, y: 9.0 }, { x: 66, y: 9.4 }], [{ x: 67, y: 7.5 }, { x: 68, y: 7.8 }, { x: 69, y: 7.5 }, { x: 70, y: 5.5 }, { x: 71, y: 6.0 }, { x: 72, y: 4.1 }]];
var episodeNames = { S1: ['Winter Is Coming', 'The Kingsroad', 'Lord Snow', 'Cripples, Bastards, and Broken Things', 'The Wolf and the Lion', 'A Golden Crown', 'You Win or You Die', 'The Pointy End', 'Baelor', 'Fire and Blood'], S2: ['The North Remembers', 'The Night Lands', 'What Is Dead May Never Die', 'Garden of Bones', 'The Ghost of Harrenhal', 'The Old Gods and the New', 'A Man Without Honor', 'The Prince of Winterfell', 'Blackwater', 'Valar Morghulis'], S3: ['Valar Dohaeris', 'Dark Wings, Dark Words', 'Walk of Punishment', 'And Now His Watch Is Ended', 'Kissed by Fire', 'The Climb', 'The Bear and the Maiden Fair', 'Second Sons', 'The Rains of Castamere', 'Mhysa'], S4: ['Two Swords', 'The Lion and the Rose', 'Breaker of Chains', 'Oathkeeper', 'First of His Name', 'The Laws of Gods and Men', 'Mockingbird', 'The Mountain and the Viper', 'The Watchers on the Wall', 'The Children'], S5: ['The Wars to Come', 'The House of Black and White', 'High Sparrow', 'Sons of the Harpy', 'Kill the Boy', 'Unbowed, Unbent, Unbroken', 'The Gift', 'Hardhome', 'The Dance of Dragons', "Mother's Mercy"], S6: ['The Red Woman', 'Home', 'Oathbreaker', 'Book of the Stranger', 'The Door', 'Blood of My Blood', 'The Broken Man', 'No One', 'Battle of the Bastards', 'The Winds of Winter'], S7: ['Dragonstone', 'Stormborn', "The Queen's Justice", 'The Spoils of War', 'Eastwatch', 'Beyond the Wall', 'The Dragon and the Wolf'], S8: ['Winterfell', 'A Knight of the Seven Kingdoms', 'The Long Night', 'The Last of the Starks', 'The Bells', 'The Iron Throne'] };

var himym_ratings = [[{ x: 0, y: 8.5 }, { x: 1, y: 8.2 }, { x: 2, y: 8.2 }, { x: 3, y: 8.0 }, { x: 4, y: 8.3 }, { x: 5, y: 8.1 }, { x: 6, y: 7.7 }, { x: 7, y: 8.2 }, { x: 8, y: 8.1 }, { x: 9, y: 9.2 }, { x: 10, y: 8.3 }, { x: 11, y: 8.1 }, { x: 12, y: 8.7 }, { x: 13, y: 8.2 }, { x: 14, y: 9.1 }, { x: 15, y: 7.9 }, { x: 16, y: 7.7 }, { x: 17, y: 8.5 }, { x: 18, y: 8.8 }, { x: 19, y: 7.9 }, { x: 20, y: 8.1 }, { x: 21, y: 8.9 }], [{ x: 22, y: 8.2 }, { x: 23, y: 8.2 }, { x: 24, y: 8.5 }, { x: 25, y: 8.8 }, { x: 26, y: 8.8 }, { x: 27, y: 8.1 }, { x: 28, y: 9.0 }, { x: 29, y: 8.0 }, { x: 30, y: 9.5 }, { x: 31, y: 8.2 }, { x: 32, y: 8.1 }, { x: 33, y: 8.2 }, { x: 34, y: 8.0 }, { x: 35, y: 8.4 }, { x: 36, y: 8.4 }, { x: 37, y: 8.5 }, { x: 38, y: 8.2 }, { x: 39, y: 8.1 }, { x: 40, y: 8.4 }, { x: 41, y: 8.9 }, { x: 42, y: 8.8 }, { x: 43, y: 8.8 }], [{ x: 44, y: 8.3 }, { x: 45, y: 7.7 }, { x: 46, y: 8.1 }, { x: 47, y: 7.8 }, { x: 48, y: 9.0 }, { x: 49, y: 8.1 }, { x: 50, y: 8.0 }, { x: 51, y: 9.1 }, { x: 52, y: 9.0 }, { x: 53, y: 8.0 }, { x: 54, y: 8.5 }, { x: 55, y: 8.2 }, { x: 56, y: 8.8 }, { x: 57, y: 8.7 }, { x: 58, y: 8.0 }, { x: 59, y: 8.3 }, { x: 60, y: 8.2 }, { x: 61, y: 8.1 }, { x: 62, y: 7.8 }, { x: 63, y: 8.7 }], [{ x: 64, y: 8.6 }, { x: 65, y: 8.5 }, { x: 66, y: 7.7 }, { x: 67, y: 8.8 }, { x: 68, y: 8.3 }, { x: 69, y: 8.0 }, { x: 70, y: 7.9 }, { x: 71, y: 8.1 }, { x: 72, y: 9.2 }, { x: 73, y: 8.3 }, { x: 74, y: 8.1 }, { x: 75, y: 8.6 }, { x: 76, y: 8.5 }, { x: 77, y: 8.4 }, { x: 78, y: 8.3 }, { x: 79, y: 7.8 }, { x: 80, y: 8.4 }, { x: 81, y: 7.7 }, { x: 82, y: 8.5 }, { x: 83, y: 7.7 }, { x: 84, y: 8.7 }, { x: 85, y: 8.2 }, { x: 86, y: 7.7 }, { x: 87, y: 8.8 }], [{ x: 88, y: 8.5 }, { x: 89, y: 8.1 }, { x: 90, y: 8.4 }, { x: 91, y: 8.0 }, { x: 92, y: 7.8 }, { x: 93, y: 7.8 }, { x: 94, y: 7.8 }, { x: 95, y: 9.4 }, { x: 96, y: 8.0 }, { x: 97, y: 8.1 }, { x: 98, y: 7.8 }, { x: 99, y: 9.1 }, { x: 100, y: 8.6 }, { x: 101, y: 8.9 }, { x: 102, y: 8.0 }, { x: 103, y: 7.8 }, { x: 104, y: 8.3 }, { x: 105, y: 8.2 }, { x: 106, y: 7.6 }, { x: 107, y: 7.9 }, { x: 108, y: 7.8 }, { x: 109, y: 8.2 }, { x: 110, y: 8.1 }, { x: 111, y: 8.5 }], [{ x: 112, y: 8.2 }, { x: 113, y: 8.3 }, { x: 114, y: 7.8 }, { x: 115, y: 8.6 }, { x: 116, y: 7.8 }, { x: 117, y: 7.7 }, { x: 118, y: 7.7 }, { x: 119, y: 8.1 }, { x: 120, y: 8.5 }, { x: 121, y: 9.1 }, { x: 122, y: 8.0 }, { x: 123, y: 8.2 }, { x: 124, y: 8.9 }, { x: 125, y: 8.6 }, { x: 126, y: 8.8 }, { x: 127, y: 8.1 }, { x: 128, y: 7.7 }, { x: 129, y: 8.3 }, { x: 130, y: 8.3 }, { x: 131, y: 7.7 }, { x: 132, y: 8.0 }, { x: 133, y: 7.9 }, { x: 134, y: 7.8 }, { x: 135, y: 8.5 }], [{ x: 136, y: 8.6 }, { x: 137, y: 8.1 }, { x: 138, y: 8.9 }, { x: 139, y: 8.1 }, { x: 140, y: 7.5 }, { x: 141, y: 7.8 }, { x: 142, y: 7.7 }, { x: 143, y: 7.4 }, { x: 144, y: 8.3 }, { x: 145, y: 9.0 }, { x: 146, y: 8.0 }, { x: 147, y: 8.8 }, { x: 148, y: 7.8 }, { x: 149, y: 7.7 }, { x: 150, y: 7.3 }, { x: 151, y: 8.1 }, { x: 152, y: 8.4 }, { x: 153, y: 8.0 }, { x: 154, y: 8.6 }, { x: 155, y: 8.6 }, { x: 156, y: 8.0 }, { x: 157, y: 7.8 }, { x: 158, y: 8.5 }, { x: 159, y: 8.9 }], [{ x: 160, y: 8.6 }, { x: 161, y: 7.4 }, { x: 162, y: 7.3 }, { x: 163, y: 7.5 }, { x: 164, y: 7.5 }, { x: 165, y: 7.6 }, { x: 166, y: 7.4 }, { x: 167, y: 7.6 }, { x: 168, y: 7.5 }, { x: 169, y: 8.1 }, { x: 170, y: 8.6 }, { x: 171, y: 9.4 }, { x: 172, y: 7.9 }, { x: 173, y: 7.9 }, { x: 174, y: 8.2 }, { x: 175, y: 7.6 }, { x: 176, y: 7.8 }, { x: 177, y: 8.1 }, { x: 178, y: 8.0 }, { x: 179, y: 8.4 }, { x: 180, y: 7.4 }, { x: 181, y: 8.7 }, { x: 182, y: 7.6 }, { x: 183, y: 8.8 }], [{ x: 184, y: 7.8 }, { x: 185, y: 7.7 }, { x: 186, y: 7.6 }, { x: 187, y: 7.3 }, { x: 188, y: 7.2 }, { x: 189, y: 7.5 }, { x: 190, y: 7.4 }, { x: 191, y: 7.3 }, { x: 192, y: 8.3 }, { x: 193, y: 6.7 }, { x: 194, y: 5.7 }, { x: 195, y: 7.8 }, { x: 196, y: 8.3 }, { x: 197, y: 5.9 }, { x: 198, y: 8.4 }, { x: 199, y: 9.5 }, { x: 200, y: 8.2 }, { x: 201, y: 8.0 }, { x: 202, y: 7.7 }, { x: 203, y: 8.5 }, { x: 204, y: 8.3 }, { x: 205, y: 8.9 }, { x: 206, y: 6.7 }, { x: 207, y: 5.5 }]];
var himym_names = { S1: ['Pilot', 'Purple Giraffe', 'The Sweet Taste of Liberty', 'Return of the Shirt', 'Okay Awesome', 'The Slutty Pumpkin', 'Matchmaker', 'The Duel', 'Belly Full of Turkey', 'The Pineapple Incident', 'The Limo', 'The Wedding', 'Drumroll, Please', 'Zip, Zip, Zip', 'Game Night', 'Cupcake', 'Life Among the Gorillas', 'Nothing Good Happens After 2 AM', 'Mary the Paralegal', 'Best Prom Ever', 'Milk', 'Come On'], S2: ['Where Were We?', 'The Scorpion and the Toad', 'Brunch', 'Ted Mosby, Architect', "WorldS Greatest Couple", 'Aldrin Justice', 'Swarley', 'Atlantic City', 'Slap Bet', 'Single Stamina', 'How Lily Stole Christmas', 'First Time in New York', 'Columns', 'Monday Night Football', 'Lucky Penny', 'Stuff', 'Arrivederci, Fiero', 'Moving Day', 'Bachelor Party', 'Showdown', 'Something Borrowed', 'Something Blue'], S3: ['Wait for It', "We're Not from Here", 'Third Wheel', 'Little Boys', 'How I Met Everyone Else', "I'm Not That Guy", 'Dowisetrepla', 'Spoiler Alert', 'Slapsgiving', 'The Yips', 'The Platinum Rule', 'No Tomorrow', 'Ten Sessions', 'The Bracket', 'The Chain of Screaming', 'Sandcastles in the Sand', 'The Goat', 'Rebound Bro', 'Everything Must Go', 'Miracles'], S4: ['Do I Know You?', 'The Best Burger in New York', 'I Heart NJ', 'Intervention', 'Shelter Island', 'Happily Ever After', "Not a FatherS Day", 'Woooo!', 'The Naked Man', 'The Fight', 'Little Minnesota', 'Benefits', 'Three Days of Snow', 'The Possimpible', 'The Stinsons', 'Sorry, Bro', 'The Front Porch', 'Old King Clancy', 'Murtaugh', 'Mosbius Designs', 'The Three Days Rule', 'Right Place Right Time', 'As Fast as She Can', 'The Leap'], S5: ['Definitions', 'Double Date', 'Robin 101', 'The Sexless Innkeeper', 'Duel Citizenship', 'Bagpipes', 'The Rough Patch', 'The Playbook', 'Slapsgiving 2: Revenge of the Slap', 'The Window', 'Last Cigarette Ever', 'Girls vs. Suits', 'Jenkins', 'Perfect Week', 'Rabbit or Duck', 'Hooked', 'Of Course', 'Say Cheese', 'Zoo or False', 'Home Wreckers', 'Twin Beds', 'Robots vs. Wrestlers', 'The Wedding Bride', 'Doppelgangers'], S6: ['Big Days', 'Cleaning House', 'Unfinished', 'Subway Wars', 'Architect of Destruction', 'Baby Talk', 'Canning Randy', 'Natural History', 'Glitter', 'Blitzgiving', 'The Mermaid Theory', 'False Positive', 'Bad News', 'Last Words', 'Oh Honey', 'Desperation Day', 'Garbage Island', 'A Change of Heart', 'Legendaddy', 'The Exploding Meatball Sub', 'Hopeless', 'The Perfect Cocktail', 'Landmarks', 'Challenge Accepted'], S7: ['The Best Man', 'The Naked Truth', 'Ducky Tie', 'The Stinson Missile Crisis', 'Field Trip', 'Mystery vs. History', 'Noretta', 'The Slutty Pumpkin Returns', 'Disaster Averted', 'Tick Tick Tick', 'The Rebound Girl', 'Symphony of Illumination', 'Tailgate', '46 Minutes', 'The Burning Beekeeper', 'The Drunk Train', 'No Pressure', 'Karma', 'The Broath', 'Trilogy Time', "Now We're Even", 'Good Crazy', "The MagicianS Code: Part 1", "The Magician's Code: Part 2"], S8: ['Farhampton', 'The Pre-Nup', 'Nannies', 'Who Wants to Be a Godparent', 'The Autumn of Breakups', 'Splitsville', 'The Stamp Tramp', 'Twelve Horny Women', 'Lobster Crawl', 'The Over-Correction', 'The Final Page: Part One', 'The Final Page: Part Two', 'Band or DJ?', 'Ring Up!', 'P.S. I Love You', 'Bad Crazy', 'The Ashtray', "Weekend at BarneyS", 'The Fortress', 'The Time Travelers', 'Romeward Bound', 'The Bro Mitzvah', 'Something Old', 'Something New'], S9: ['The Locket', 'Coming Back', 'Last Time in New York', 'The Broken Code', 'The Poker Game', 'Knight Vision', 'No Questions Asked', 'The Lighthouse', 'Platonish', 'Mom and Dad', 'Bedtime Stories', 'The Rehearsal Dinner', 'Bass Player Wanted', 'Slapsgiving 3: Slappointment in Slapmarra', 'Unpause', 'How Your Mother Met Me', 'Sunrise', 'Rally', 'Vesuvius', 'Daisy', 'Gary Blauman', 'The End of the Aisle', 'Last Forever: Part One', 'Last Forever: Part Two'] };

var friends_ratings =
    [[{ x: 0, y: 8.3 }, { x: 1, y: 8.1 }, { x: 2, y: 8.2 }, { x: 3, y: 8.1 }, { x: 4, y: 8.5 }, { x: 5, y: 8.1 }, { x: 6, y: 9.0 }, { x: 7, y: 8.1 }, { x: 8, y: 8.2 }, { x: 9, y: 8.1 }, { x: 10, y: 8.2 }, { x: 11, y: 8.2 }, { x: 12, y: 8.7 }, { x: 13, y: 8.3 }, { x: 14, y: 8.2 }, { x: 15, y: 8.2 }, { x: 16, y: 8.5 }, { x: 17, y: 8.8 }, { x: 18, y: 8.1 }, { x: 19, y: 7.9 }, { x: 20, y: 7.9 }, { x: 21, y: 8.3 }, { x: 22, y: 8.7 }, { x: 23, y: 8.9 }], [{ x: 24, y: 8.5 }, { x: 25, y: 8.2 }, { x: 26, y: 8.4 }, { x: 27, y: 8.0 }, { x: 28, y: 8.3 }, { x: 29, y: 8.6 }, { x: 30, y: 9.0 }, { x: 31, y: 8.5 }, { x: 32, y: 8.0 }, { x: 33, y: 8.0 }, { x: 34, y: 8.1 }, { x: 35, y: 8.6 }, { x: 36, y: 8.8 }, { x: 37, y: 9.4 }, { x: 38, y: 8.9 }, { x: 39, y: 8.6 }, { x: 40, y: 8.3 }, { x: 41, y: 8.5 }, { x: 42, y: 8.6 }, { x: 43, y: 8.2 }, { x: 44, y: 8.2 }, { x: 45, y: 9.0 }, { x: 46, y: 8.1 }, { x: 47, y: 8.2 }], [{ x: 48, y: 8.4 }, { x: 49, y: 9.0 }, { x: 50, y: 8.1 }, { x: 51, y: 8.1 }, { x: 52, y: 8.1 }, { x: 53, y: 9.1 }, { x: 54, y: 8.3 }, { x: 55, y: 8.4 }, { x: 56, y: 9.0 }, { x: 57, y: 8.1 }, { x: 58, y: 8.6 }, { x: 59, y: 8.2 }, { x: 60, y: 8.2 }, { x: 61, y: 7.9 }, { x: 62, y: 8.5 }, { x: 63, y: 9.1 }, { x: 64, y: 8.3 }, { x: 65, y: 8.4 }, { x: 66, y: 8.2 }, { x: 67, y: 8.1 }, { x: 68, y: 8.7 }, { x: 69, y: 8.3 }, { x: 70, y: 8.1 }, { x: 71, y: 8.1 }, { x: 72, y: 8.8 }], [{ x: 73, y: 9.1 }, { x: 74, y: 8.1 }, { x: 75, y: 8.5 }, { x: 76, y: 8.2 }, { x: 77, y: 8.4 }, { x: 78, y: 8.5 }, { x: 79, y: 8.7 }, { x: 80, y: 9.1 }, { x: 81, y: 7.9 }, { x: 82, y: 8.1 }, { x: 83, y: 8.5 }, { x: 84, y: 9.5 }, { x: 85, y: 8.2 }, { x: 86, y: 8.2 }, { x: 87, y: 8.5 }, { x: 88, y: 8.2 }, { x: 89, y: 8.6 }, { x: 90, y: 8.3 }, { x: 91, y: 8.7 }, { x: 92, y: 8.5 }, { x: 93, y: 7.2 }, { x: 94, y: 8.5 }, { x: 95, y: 8.7 }, { x: 96, y: 9.2 }], [{ x: 97, y: 8.9 }, { x: 98, y: 9.0 }, { x: 99, y: 8.8 }, { x: 100, y: 8.3 }, { x: 101, y: 8.8 }, { x: 102, y: 8.1 }, { x: 103, y: 8.4 }, { x: 104, y: 9.2 }, { x: 105, y: 9.1 }, { x: 106, y: 8.2 }, { x: 107, y: 9.1 }, { x: 108, y: 8.3 }, { x: 109, y: 8.1 }, { x: 110, y: 9.7 }, { x: 111, y: 8.5 }, { x: 112, y: 8.6 }, { x: 113, y: 8.5 }, { x: 114, y: 8.0 }, { x: 115, y: 8.7 }, { x: 116, y: 8.3 }, { x: 117, y: 8.5 }, { x: 118, y: 8.3 }, { x: 119, y: 8.8 }, { x: 120, y: 9.1 }], [{ x: 121, y: 8.7 }, { x: 122, y: 8.2 }, { x: 123, y: 8.2 }, { x: 124, y: 8.5 }, { x: 125, y: 8.2 }, { x: 126, y: 8.5 }, { x: 127, y: 8.4 }, { x: 128, y: 8.5 }, { x: 129, y: 9.2 }, { x: 130, y: 8.6 }, { x: 131, y: 8.1 }, { x: 132, y: 8.1 }, { x: 133, y: 8.2 }, { x: 134, y: 8.6 }, { x: 135, y: 8.5 }, { x: 136, y: 8.5 }, { x: 137, y: 9.1 }, { x: 138, y: 8.3 }, { x: 139, y: 8.3 }, { x: 140, y: 7.4 }, { x: 141, y: 8.6 }, { x: 142, y: 9.0 }, { x: 143, y: 8.6 }, { x: 144, y: 8.8 }, { x: 145, y: 9.3 }], [{ x: 146, y: 8.4 }, { x: 147, y: 8.3 }, { x: 148, y: 8.1 }, { x: 149, y: 8.1 }, { x: 150, y: 8.1 }, { x: 151, y: 8.9 }, { x: 152, y: 8.5 }, { x: 153, y: 8.2 }, { x: 154, y: 8.1 }, { x: 155, y: 8.5 }, { x: 156, y: 8.6 }, { x: 157, y: 8.7 }, { x: 158, y: 8.4 }, { x: 159, y: 8.6 }, { x: 160, y: 8.4 }, { x: 161, y: 8.7 }, { x: 162, y: 8.4 }, { x: 163, y: 8.4 }, { x: 164, y: 8.7 }, { x: 165, y: 8.4 }, { x: 166, y: 7.5 }, { x: 167, y: 8.4 }, { x: 168, y: 8.9 }, { x: 169, y: 9.2 }], [{ x: 170, y: 8.7 }, { x: 171, y: 9.1 }, { x: 172, y: 8.7 }, { x: 173, y: 9.3 }, { x: 174, y: 8.1 }, { x: 175, y: 8.5 }, { x: 176, y: 7.9 }, { x: 177, y: 8.8 }, { x: 178, y: 9.3 }, { x: 179, y: 8.1 }, { x: 180, y: 8.0 }, { x: 181, y: 8.6 }, { x: 182, y: 8.6 }, { x: 183, y: 8.2 }, { x: 184, y: 8.4 }, { x: 185, y: 8.3 }, { x: 186, y: 8.1 }, { x: 187, y: 8.2 }, { x: 188, y: 7.5 }, { x: 189, y: 8.2 }, { x: 190, y: 8.2 }, { x: 191, y: 8.3 }, { x: 192, y: 8.8 }, { x: 193, y: 8.9 }], [{ x: 194, y: 8.6 }, { x: 195, y: 8.6 }, { x: 196, y: 8.2 }, { x: 197, y: 8.2 }, { x: 198, y: 8.5 }, { x: 199, y: 8.4 }, { x: 200, y: 8.7 }, { x: 201, y: 8.8 }, { x: 202, y: 8.2 }, { x: 203, y: 7.5 }, { x: 204, y: 8.0 }, { x: 205, y: 8.0 }, { x: 206, y: 8.2 }, { x: 207, y: 8.2 }, { x: 208, y: 8.3 }, { x: 209, y: 8.2 }, { x: 210, y: 8.5 }, { x: 211, y: 8.6 }, { x: 212, y: 8.1 }, { x: 213, y: 8.3 }, { x: 214, y: 8.2 }, { x: 215, y: 7.8 }, { x: 216, y: 8.5 }, { x: 217, y: 8.7 }], [{ x: 218, y: 8.5 }, { x: 219, y: 8.8 }, { x: 220, y: 8.8 }, { x: 221, y: 8.3 }, { x: 222, y: 8.2 }, { x: 223, y: 8.2 }, { x: 224, y: 8.3 }, { x: 225, y: 8.9 }, { x: 226, y: 8.6 }, { x: 227, y: 8.0 }, { x: 228, y: 9.0 }, { x: 229, y: 8.9 }, { x: 230, y: 8.5 }, { x: 231, y: 8.6 }, { x: 232, y: 8.5 }, { x: 233, y: 8.9 }, { x: 234, y: 9.7 }]]
    ;
var friends_names =
    { S1: ['The One Where Monica Gets a Roommate', 'The One with the Sonogram at the End', 'The One with the Thumb', 'The One with George Stephanopoulos', 'The One with the East German Laundry Detergent', 'The One with the Butt', 'The One with the Blackout', 'The One Where Nana Dies Twice', 'The One Where Underdog Gets Away', 'The One with the Monkey', 'The One with Mrs. Bing', 'The One with the Dozen Lasagnas', 'The One with the Boobies', 'The One with the Candy Hearts', 'The One with the Stoned Guy', 'The One with Two Parts: Part 1', 'The One with Two Parts: Part 2', 'The One with All the Poker', 'The One Where the Monkey Gets Away', 'The One with the Evil Orthodontist', 'The One with the Fake Monica', 'The One with the Ick Factor', 'The One with the Birth', 'The One Where Rachel Finds Out'], S2: ["The One with Ross's New Girlfriend", 'The One with the Breast Milk', 'The One Where Heckles Dies', "The One with Phoebe's Husband", 'The One with Five Steaks and an Eggplant', 'The One with the Baby on the Bus', 'The One Where Ross Finds Out', 'The One with the List', "The One with Phoebe's Dad", 'The One with Russ', 'The One with the Lesbian Wedding', 'The One After the Superbowl: Part 1', 'The One After the Superbowl: Part 2', 'The One with the Prom Video', 'The One Where Ross and Rachel... You Know', 'The One Where Joey Moves Out', 'The One Where Eddie Moves In', 'The One Where Dr. Ramoray Dies', "The One Where Eddie Won't Go", 'The One Where Old Yeller Dies', 'The One with the Bullies', 'The One with the Two Parties', 'The One with the Chicken Pox', "The One with Barry and Mindy's Wedding"], S3: ['The One with the Princess Leia Fantasy', "The One Where No One's Ready", 'The One with the Jam', 'The One with the Metaphorical Tunnel', 'The One with Frank Jr.', 'The One with the Flashback', 'The One with the Race Car Bed', 'The One with the Giant Poking Device', 'The One with the Football', 'The One Where Rachel Quits', "The One Where Chandler Can't Remember Which Sister", 'The One with All the Jealousy', 'The One Where Monica and Richard Are Just Friends', "The One with Phoebe's Ex-Partner", 'The One Where Ross and Rachel Take a Break', 'The One with the Morning After', 'The One Without the Ski Trip', 'The One with the Hypnosis Tape', 'The One with the Tiny T-Shirt', 'The One with the Dollhouse', 'The One with the Chick and the Duck', 'The One with the Screamer', "The One with Ross's Thing", 'The One with the Ultimate Fighting Champion', 'The One at the Beach'], S4: ['The One with the Jellyfish', 'The One with the Cat', "The One with the 'Cuffs", 'The One with the Ballroom Dancing', "The One with Joey's New Girlfriend", 'The One with the Dirty Girl', 'The One Where Chandler Crosses the Line', 'The One with Chandler in a Box', "The One Where They're Going to Party!", 'The One with the Girl from Poughkeepsie', "The One with Phoebe's Uterus", 'The One with the Embryos', "The One with Rachel's Crush", "The One with Joey's Dirty Day", 'The One with All the Rugby', 'The One with the Fake Party', 'The One with the Free Porn', "The One with Rachel's New Dress", 'The One with All the Haste', 'The One with All the Wedding Dresses', 'The One with the Invitation', 'The One with the Worst Best Man Ever', "The One with Ross's Wedding", "The One with Ross's Wedding: Part 2"], S5: ['The One After Ross Says Rachel', 'The One with All the Kissing', 'The One Hundredth', 'The One Where Phoebe Hates PBS', 'The One with the Kips', 'The One with the Yeti', 'The One Where Ross Moves In', 'The One with All the Thanksgivings', "The One with Ross's Sandwich", 'The One with the Inappropriate Sister', 'The One with All the Resolutions', "The One with Chandler's Work Laugh", "The One with Joey's Bag", 'The One Where Everybody Finds Out', 'The One with the Girl Who Hits Joey', 'The One with the Cop', "The One with Rachel's Inadvertent Kiss", 'The One Where Rachel Smokes', "The One Where Ross Can't Flirt", 'The One with the Ride Along', 'The One with the Ball', "The One with Joey's Big Break", 'The One in Vegas: Part 1', 'The One in Vegas: Part 2'], S6: ['The One After Vegas', 'The One Where Ross Hugs Rachel', "The One with Ross's Denial", 'The One Where Joey Loses His Insurance', "The One with Joey's Porsche", 'The One on the Last Night', 'The One Where Phoebe Runs', "The One with Ross' Teeth", 'The One Where Ross Got High', 'The One with the Routine', 'The One with the Apothecary Table', 'The One with the Joke', "The One with Rachel's Sister", "The One Where Chandler Can't Cry", 'The One That Could Have Been', 'The One That Could Have Been', 'The One with Unagi', 'The One Where Ross Dates a Student', "The One with Joey's Fridge", 'The One with Mac and C.H.E.E.S.E.', "The One Where Ross Meets Elizabeth's Dad", "The One Where Paul's the Man", 'The One with the Ring', 'The One with the Proposal', 'The One with the Proposal'], S7: ["The One with Monica's Thunder", "The One with Rachel's Book", "The One with Phoebe's Cookies", "The One with Rachel's Assistant", 'The One with the Engagement Picture', 'The One with the Nap Partners', "The One with Ross's Library Book", "The One Where Chandler Doesn't Like Dogs", 'The One with All the Candy', 'The One with the Holiday Armadillo', 'The One with All the Cheesecakes', "The One Where They're Up All Night", 'The One Where Rosita Dies', 'The One Where They All Turn Thirty', "The One with Joey's New Brain", 'The One with the Truth About London', 'The One with the Cheap Wedding Dress', "The One with Joey's Award", "The One with Ross and Monica's Cousin", "The One with Rachel's Big Kiss", 'The One with the Vows', "The One with Chandler's Dad", "The One with Monica and Chandler's Wedding: Part 1", "The One with Monica and Chandler's Wedding: Part 2"], S8: ['The One After I Do', 'The One with the Red Sweater', 'The One Where Rachel Tells...', 'The One with the Videotape', "The One with Rachel's Date", 'The One with the Halloween Party', 'The One with the Stain', 'The One with the Stripper', 'The One with the Rumor', "The One with Monica's Boots", "The One with Ross's Step Forward", 'The One Where Joey Dates Rachel', 'The One Where Chandler Takes a Bath', 'The One with the Secret Closet', 'The One with the Birthing Video', 'The One Where Joey Tells Rachel', 'The One with the Tea Leaves', 'The One in Massapequa', "The One with Joey's Interview", 'The One with the Baby Shower', 'The One with the Cooking Class', 'The One Where Rachel Is Late', 'The One Where Rachel Has a Baby: Part 1', 'The One Where Rachel Has a Baby: Part 2'], S9: ['The One Where No One Proposes', 'The One Where Emma Cries', 'The One with the Pediatrician', 'The One with the Sharks', "The One with Phoebe's Birthday Dinner", 'The One with the Male Nanny', "The One with Ross's Inappropriate Song", "The One with Rachel's Other Sister", "The One with Rachel's Phone Number", 'The One with Christmas in Tulsa', 'The One Where Rachel Goes Back to Work', "The One with Phoebe's Rats", 'The One Where Monica Sings', 'The One with the Blind Dates', 'The One with the Mugging', 'The One with the Boob Job', 'The One with the Memorial Service', 'The One with the Lottery', "The One with Rachel's Dream", 'The One with the Soap Opera Party', 'The One with the Fertility Test', 'The One with the Donor', 'The One in Barbados', 'The One in Barbados'], S10: ['The One After Joey and Rachel Kiss', 'The One Where Ross Is Fine', "The One with Ross's Tan", 'The One with the Cake', "The One Where Rachel's Sister Babysits", "The One with Ross' Grant", 'The One with the Home Study', 'The One with the Late Thanksgiving', 'The One with the Birth Mother', 'The One Where Chandler Gets Caught', 'The One Where the Stripper Cries', "The One with Phoebe's Wedding", 'The One Where Joey Speaks French', 'The One with Princess Consuela', 'The One Where Estelle Dies', "The One with Rachel's Going Away Party", 'The Last One: Part 2'] }
    ;
var theoffice_ratings = [];
var theoffice_names = [];

var houseofcards_ratings = [];
var houseofcards_names = [];

var house_ratings = [];
var house_names = [];

var suits_ratings = [];
var suits_names = [];

var breakingbad_ratings = [];
var breakingbad_names = [];


Highcharts.chart('line-got', {
    chart: {
        height: 200,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Game of Thrones',
        align: 'left'
    },
    xAxis: {
        tickLength: 0,
        labels: {
            enabled: false,
            overflow: 'justify'
        },
    },
    yAxis: {
        max: 10,
        min: 2.5,
        tickInterval: 2.5,
        title: {
            text: '',
        },
        minorGridLineWidth: 1,
        gridLineWidth: 1,
        alternateGridColor: null,
    },
    tooltip: {
        formatter: function () {
            return `<b> ${this.series.name}E${this.point.index + 1}: ${episodeNames[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            marker: {
                enabled: false,
                fillColor: '#346888',
                symbol: "circle",
            },
            color: "#346888",
            lineWidth: 4,
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#346888'], // start
                    [0.5, '#FF0000'] // end
                ]
            },
        }
    },
    series: [{
        name: 'S1',
        data: episodeRatings[0],
    },
    {
        name: 'S2',
        data: episodeRatings[1],
    },
    {
        name: 'S3',
        data: episodeRatings[2],
    },
    {
        name: 'S4',
        data: episodeRatings[3],
    },
    {
        name: 'S5',
        data: episodeRatings[4],
    },
    {
        name: 'S6',
        data: episodeRatings[5],
    },
    {
        name: 'S7',
        data: episodeRatings[6],
    },
    {
        name: 'S8',
        data: episodeRatings[7],
    },
    ],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    },
    legend: {
        enabled: false,
    }
});

Highcharts.chart('line-himym', {
    chart: {
        height: 200,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'How I Met Your Mother',
        align: 'left'
    },
    xAxis: {
        tickLength: 0,
        labels: {
            enabled: false,
            overflow: 'justify'
        },
    },
    yAxis: {
        max: 10,
        min: 2.5,
        tickInterval: 2.5,
        title: {
            text: '',
        },
        minorGridLineWidth: 1,
        gridLineWidth: 1,
        alternateGridColor: null,
    },
    tooltip: {
        formatter: function () {
            return `<b> ${this.series.name}E${this.point.index + 1}: ${himym_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            color: "#346888",
            lineWidth: 4,
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0.5, '#346888'], // mid
                    [1, '#FF0000'] // end
                ]
            },
            marker: {
                enabled: false,
                fillColor: '#346888',
                symbol: "circle",
            },
        }
    },
    series: [{
        name: 'S1',
        data: himym_ratings[0],
    },
    {
        name: 'S2',
        data: himym_ratings[1],
    },
    {
        name: 'S3',
        data: himym_ratings[2],
    },
    {
        name: 'S4',
        data: himym_ratings[3],
    },
    {
        name: 'S5',
        data: himym_ratings[4],
    },
    {
        name: 'S6',
        data: himym_ratings[5],
    },
    {
        name: 'S7',
        data: himym_ratings[6],
    },
    {
        name: 'S8',
        data: himym_ratings[7],
    },
    {
        name: 'S9',
        data: himym_ratings[8],
    },
    {
        name: 'S10',
        data: himym_ratings[9],
    },
    ],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    },
    legend: {
        enabled: false,
    }
});

Highcharts.chart('line-friends', {
    chart: {
        height: 200,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Friends',
        align: 'left'
    },
    xAxis: {
        tickLength: 0,
        labels: {
            enabled: false,
            overflow: 'justify'
        },
    },
    yAxis: {
        max: 10,
        min: 2.5,
        tickInterval: 2.5,
        title: {
            text: '',
        },
        minorGridLineWidth: 1,
        gridLineWidth: 1,
        alternateGridColor: null,
    },
    tooltip: {
        formatter: function () {
            return `<b> ${this.series.name}E${this.point.index + 1}: ${friends_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            color: "#346888",
            lineWidth: 3,
            marker: {
                enabled: false,
                symbol: "circle",
            },
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#346888'], // start
                    [0.5, '#FF0000'] // end
                ]
            },
        }
    },
    series: [{
        name: 'S1',
        data: friends_ratings[0],
    },
    {
        name: 'S2',
        data: friends_ratings[1],
    },
    {
        name: 'S3',
        data: friends_ratings[2],
    },
    {
        name: 'S4',
        data: friends_ratings[3],
    },
    {
        name: 'S5',
        data: friends_ratings[4],
    },
    {
        name: 'S6',
        data: friends_ratings[5],
    },
    {
        name: 'S7',
        data: friends_ratings[6],
    },
    {
        name: 'S8',
        data: friends_ratings[7],
    },
    {
        name: 'S9',
        data: friends_ratings[8],
    },
    {
        name: 'S10',
        data: friends_ratings[9],
    },
    ],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    },
    legend: {
        enabled: false,
    }
});
