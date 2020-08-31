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

var seinfeld_ratings = 
    [[{x:0, y:7.6}, {x:1, y:7.7}, {x:2, y:7.6}, {x:3, y:7.4}, {x:4, y:7.5}], [{x:5, y:7.7}, {x:6, y:7.9}, {x:7, y:8.4}, {x:8, y:8.4}, {x:9, y:7.9}, {x:10, y:8.1}, {x:11, y:8.3}, {x:12, y:7.9}, {x:13, y:8.3}, {x:14, y:7.5}, {x:15, y:8.7}, {x:16, y:7.7}], [{x:17, y:8.2}, {x:18, y:7.8}, {x:19, y:8.2}, {x:20, y:7.4}, {x:21, y:8.7}, {x:22, y:8.8}, {x:23, y:8.5}, {x:24, y:8.7}, {x:25, y:8.0}, {x:26, y:7.5}, {x:27, y:8.3}, {x:28, y:8.4}, {x:29, y:8.8}, {x:30, y:8.4}, {x:31, y:7.6}, {x:32, y:8.4}, {x:33, y:8.7}, {x:34, y:9.0}, {x:35, y:8.0}, {x:36, y:8.0}, {x:37, y:8.3}, {x:38, y:8.4}], [{x:39, y:8.3}, {x:40, y:8.3}, {x:41, y:8.6}, {x:42, y:8.3}, {x:43, y:8.1}, {x:44, y:8.1}, {x:45, y:8.8}, {x:46, y:8.5}, {x:47, y:8.2}, {x:48, y:8.2}, {x:49, y:9.6}, {x:50, y:8.9}, {x:51, y:8.5}, {x:52, y:8.2}, {x:53, y:8.1}, {x:54, y:8.2}, {x:55, y:9.4}, {x:56, y:8.0}, {x:57, y:8.6}, {x:58, y:8.8}, {x:59, y:8.5}, {x:60, y:8.3}, {x:61, y:8.6}], [{x:62, y:8.6}, {x:63, y:8.9}, {x:64, y:8.4}, {x:65, y:8.1}, {x:66, y:8.1}, {x:67, y:8.5}, {x:68, y:8.5}, {x:69, y:8.4}, {x:70, y:7.8}, {x:71, y:8.4}, {x:72, y:8.2}, {x:73, y:8.6}, {x:74, y:8.2}, {x:75, y:9.2}, {x:76, y:8.5}, {x:77, y:7.6}, {x:78, y:8.1}, {x:79, y:8.5}, {x:80, y:8.6}, {x:81, y:9.0}, {x:82, y:9.6}], [{x:83, y:8.1}, {x:84, y:8.2}, {x:85, y:8.3}, {x:86, y:8.2}, {x:87, y:8.1}, {x:88, y:8.2}, {x:89, y:8.2}, {x:90, y:8.1}, {x:91, y:8.2}, {x:92, y:8.9}, {x:93, y:8.9}, {x:94, y:8.6}, {x:95, y:8.1}, {x:96, y:7.4}, {x:97, y:8.3}, {x:98, y:8.3}, {x:99, y:8.3}, {x:100, y:8.9}, {x:101, y:8.3}, {x:102, y:8.7}, {x:103, y:8.2}, {x:104, y:8.5}, {x:105, y:8.0}], [{x:106, y:8.8}, {x:107, y:8.4}, {x:108, y:8.2}, {x:109, y:8.6}, {x:110, y:8.6}, {x:111, y:9.5}, {x:112, y:8.6}, {x:113, y:8.5}, {x:114, y:8.3}, {x:115, y:8.6}, {x:116, y:8.9}, {x:117, y:8.6}, {x:118, y:8.2}, {x:119, y:8.4}, {x:120, y:8.5}, {x:121, y:8.1}, {x:122, y:7.9}, {x:123, y:8.1}, {x:124, y:9.0}, {x:125, y:8.9}, {x:126, y:8.3}, {x:127, y:8.8}], [{x:128, y:8.3}, {x:129, y:8.2}, {x:130, y:9.2}, {x:131, y:9.0}, {x:132, y:8.8}, {x:133, y:8.1}, {x:134, y:8.3}, {x:135, y:9.0}, {x:136, y:9.1}, {x:137, y:8.5}, {x:138, y:8.3}, {x:139, y:7.9}, {x:140, y:8.6}, {x:141, y:8.2}, {x:142, y:8.8}, {x:143, y:8.8}, {x:144, y:8.7}, {x:145, y:8.9}, {x:146, y:8.9}, {x:147, y:8.2}, {x:148, y:8.5}, {x:149, y:8.6}], [{x:150, y:8.5}, {x:151, y:8.4}, {x:152, y:8.9}, {x:153, y:8.4}, {x:154, y:8.1}, {x:155, y:9.2}, {x:156, y:8.6}, {x:157, y:8.9}, {x:158, y:8.3}, {x:159, y:8.8}, {x:160, y:8.7}, {x:161, y:8.3}, {x:162, y:7.9}, {x:163, y:7.9}, {x:164, y:8.0}, {x:165, y:8.4}, {x:166, y:8.3}, {x:167, y:8.9}, {x:168, y:8.2}, {x:169, y:8.1}, {x:170, y:7.7}, {x:171, y:7.5}]]
    ;
var seinfeld_names =
    {S1: ['Good News, Bad News', 'The Stakeout', 'The Robbery', 'Male Unbonding', 'The Stock Tip'], S2: ['The Ex-Girlfriend', 'The Pony Remark', 'The Jacket', 'The Phone Message', 'The Apartment', 'The Statue', 'The Revenge', 'The Heart Attack', 'The Deal', 'The Baby Shower', 'The Chinese Restaurant', 'The Busboy'], S3: ['The Note', 'The Truth', 'The Pen', 'The Dog', 'The Library', 'The Parking Garage', 'The Cafe', 'The Tape', 'The Nose Job', 'The Stranded', 'The Alternate Side', 'The Red Dot', 'The Subway', 'The Pez Dispenser', 'The Suicide', 'The Fix Up', 'The Boyfriend', 'The Limo', 'The Good Samaritan', 'The Letter', 'The Parking Space', 'The Keys'], S4: ['The Trip: Part 1', 'The Trip: Part 2', 'The Pitch', 'The Ticket', 'The Wallet', 'The Watch', 'The Bubble Boy', 'The Cheever Letters', 'The Opera', 'The Virgin', 'The Contest', 'The Airport', 'The Pick', 'The Movie', 'The Visa', 'The Shoes', 'The Outing', 'The Old Man', 'The Implant', 'The Junior Mint', 'The Smelly Car', 'The Handicap Spot', 'The Pilot'], S5: ['The Mango', 'The Puffy Shirt', 'The Glasses', 'The Sniffing Accountant', 'The Bris', 'The Lip Reader', 'The Non-Fat Yogurt', 'The Barber', 'The Masseuse', 'The Cigar Store Indian', 'The Conversion', 'The Stall', 'The Dinner Party', 'The Marine Biologist', 'The Pie', 'The Stand-In', 'The Wife', 'The Raincoats', 'The Fire', 'The Hamptons', 'The Opposite'], S6: ['The Chaperone', 'The Big Salad', 'The Pledge Drive', 'The Chinese Woman', 'The Couch', 'The Gymnast', 'The Soup', 'The Mom and Pop Store', 'The Secretary', 'The Race', 'The Switch', 'The Label Maker', 'The Scofflaw', 'Highlights of a Hundred', 'The Beard', 'The Kiss Hello', 'The Doorman', 'The Jimmy', 'The Doodle', 'The Fusilli Jerry', "The Diplomat's Club", 'The Face Painter', 'The Understudy'], S7: ['The Engagement', 'The Postponement', 'The Maestro', 'The Wink', 'The Hot Tub', 'The Soup Nazi', 'The Secret Code', 'The Pool Guy', 'The Sponge', 'The Gum', 'The Rye', 'The Caddy', 'The Seven', 'The Cadillac', 'The Shower Head', 'The Doll', 'The Friars Club', 'The Wig Master', 'The Calzone', 'The Bottle Deposit', 'The Wait Out', 'The Invitations'], S8: ['The Foundation', 'The Soul Mate', 'The Bizarro Jerry', 'The Little Kicks', 'The Package', 'The Fatigues', 'The Checks', 'The Chicken Roaster', 'The Abstinence', 'The Andrea Doria', 'The Little Jerry', 'The Money', 'The Comeback', 'The Van Buren Boys', 'The Susie', 'The Pothole', 'The English Patient', 'The Nap', 'The Yada Yada', 'The Millennium', 'The Muffin Tops', 'The Summer of George'], S9: ['The Butter Shave', 'The Voice', 'The Serenity Now', 'The Blood', 'The Junk Mail', 'The Merv Griffin Show', 'The Slicer', 'The Betrayal', 'The Apology', 'The Strike', 'The Dealership', 'The Reverse Peephole', 'The Cartoon', 'The Strongbox', 'The Wizard', 'The Burning', 'The Bookstore', 'The Frogger', 'The Maid', 'The Puerto Rican Day', 'The Chronicle', 'The Finale']}
    ;

var theoffice_ratings =
    [[{x:0, y:7.5}, {x:1, y:8.3}, {x:2, y:7.8}, {x:3, y:8.1}, {x:4, y:8.4}, {x:5, y:7.7}], [{x:6, y:8.7}, {x:7, y:8.2}, {x:8, y:8.4}, {x:9, y:8.4}, {x:10, y:8.1}, {x:11, y:8.1}, {x:12, y:8.6}, {x:13, y:8.2}, {x:14, y:8.4}, {x:15, y:8.9}, {x:16, y:8.6}, {x:17, y:9.1}, {x:18, y:8.3}, {x:19, y:7.8}, {x:20, y:8.1}, {x:21, y:8.3}, {x:22, y:8.5}, {x:23, y:8.3}, {x:24, y:8.1}, {x:25, y:8.4}, {x:26, y:8.7}, {x:27, y:9.4}], [{x:28, y:9.0}, {x:29, y:8.2}, {x:30, y:8.5}, {x:31, y:8.0}, {x:32, y:8.1}, {x:33, y:7.9}, {x:34, y:8.6}, {x:35, y:8.7}, {x:36, y:8.3}, {x:37, y:8.8}, {x:38, y:8.6}, {x:39, y:8.6}, {x:40, y:8.8}, {x:41, y:8.1}, {x:42, y:8.2}, {x:43, y:8.9}, {x:44, y:8.5}, {x:45, y:9.0}, {x:46, y:8.8}, {x:47, y:8.7}, {x:48, y:8.8}, {x:49, y:9.2}, {x:50, y:9.3}], [{x:51, y:8.8}, {x:52, y:8.3}, {x:53, y:8.4}, {x:54, y:8.7}, {x:55, y:8.8}, {x:56, y:8.5}, {x:57, y:8.2}, {x:58, y:8.7}, {x:59, y:9.5}, {x:60, y:8.0}, {x:61, y:8.6}, {x:62, y:8.3}, {x:63, y:7.8}, {x:64, y:9.3}], [{x:65, y:8.8}, {x:66, y:8.3}, {x:67, y:8.0}, {x:68, y:8.1}, {x:69, y:8.0}, {x:70, y:8.5}, {x:71, y:8.2}, {x:72, y:8.6}, {x:73, y:8.8}, {x:74, y:8.4}, {x:75, y:8.7}, {x:76, y:8.0}, {x:77, y:9.7}, {x:78, y:8.2}, {x:79, y:8.2}, {x:80, y:8.0}, {x:81, y:8.7}, {x:82, y:8.3}, {x:83, y:8.4}, {x:84, y:8.3}, {x:85, y:8.7}, {x:86, y:8.7}, {x:87, y:9.3}, {x:88, y:8.3}, {x:89, y:8.8}, {x:90, y:9.0}], [{x:91, y:8.8}, {x:92, y:8.1}, {x:93, y:8.0}, {x:94, y:9.4}, {x:95, y:9.4}, {x:96, y:7.6}, {x:97, y:8.6}, {x:98, y:8.2}, {x:99, y:8.1}, {x:100, y:8.7}, {x:101, y:8.2}, {x:102, y:8.3}, {x:103, y:8.5}, {x:104, y:6.8}, {x:105, y:7.6}, {x:106, y:8.1}, {x:107, y:8.4}, {x:108, y:8.5}, {x:109, y:7.7}, {x:110, y:7.7}, {x:111, y:8.6}, {x:112, y:7.8}, {x:113, y:7.9}, {x:114, y:8.1}, {x:115, y:7.7}, {x:116, y:8.0}], [{x:117, y:8.4}, {x:118, y:8.2}, {x:119, y:8.2}, {x:120, y:7.8}, {x:121, y:7.8}, {x:122, y:8.2}, {x:123, y:7.4}, {x:124, y:7.8}, {x:125, y:7.7}, {x:126, y:8.2}, {x:127, y:9.0}, {x:128, y:8.3}, {x:129, y:7.6}, {x:130, y:8.5}, {x:131, y:8.4}, {x:132, y:9.4}, {x:133, y:7.5}, {x:134, y:9.4}, {x:135, y:7.8}, {x:136, y:9.0}, {x:137, y:9.8}, {x:138, y:7.6}, {x:139, y:8.7}, {x:140, y:8.8}], [{x:141, y:8.1}, {x:142, y:8.1}, {x:143, y:7.3}, {x:144, y:8.1}, {x:145, y:7.5}, {x:146, y:7.7}, {x:147, y:7.7}, {x:148, y:6.8}, {x:149, y:7.7}, {x:150, y:7.9}, {x:151, y:7.9}, {x:152, y:8.0}, {x:153, y:7.4}, {x:154, y:7.7}, {x:155, y:7.8}, {x:156, y:8.1}, {x:157, y:7.8}, {x:158, y:7.8}, {x:159, y:6.6}, {x:160, y:7.1}, {x:161, y:7.0}, {x:162, y:7.0}, {x:163, y:7.6}, {x:164, y:7.7}], [{x:165, y:7.6}, {x:166, y:7.1}, {x:167, y:7.4}, {x:168, y:7.8}, {x:169, y:7.0}, {x:170, y:7.7}, {x:171, y:7.6}, {x:172, y:7.8}, {x:173, y:8.4}, {x:174, y:7.6}, {x:175, y:7.8}, {x:176, y:7.9}, {x:177, y:7.5}, {x:178, y:7.4}, {x:179, y:7.3}, {x:180, y:8.1}, {x:181, y:7.5}, {x:182, y:8.0}, {x:183, y:8.0}, {x:184, y:8.0}, {x:185, y:9.0}, {x:186, y:9.5}, {x:187, y:9.8}]]
    ;
var theoffice_names =
    {S1: ['Pilot', 'Diversity Day', 'Health Care', 'The Alliance', 'Basketball', 'Hot Girl'], S2: ['The Dundies', 'Sexual Harassment', 'Office Olympics', 'The Fire', 'Halloween', 'The Fight', 'The Client', 'Performance Review', 'E-Mail Surveillance', 'Christmas Party', 'Booze Cruise', 'The Injury', 'The Secret', 'The Carpet', 'Boys and Girls', "Valentine's Day", "Dwight's Speech", 'Take Your Daughter to Work Day', "Michael's Birthday", 'Drug Testing', 'Conflict Resolution', 'Casino Night'], S3: ['Gay Witch Hunt', 'The Convention', 'The Coup', 'Grief Counseling', 'Initiation', 'Diwali', 'Branch Closing', 'The Merger', 'The Convict', 'A Benihana Christmas', 'Back from Vacation', 'Traveling Salesmen', 'The Return', 'Ben Franklin', "Phyllis' Wedding", 'Business School', 'Cocktails', 'The Negotiation', 'Safety Training', 'Product Recall', "Women's Appreciation", 'Beach Games', 'The Job'], S4: ['Fun Run', 'Dunder Mifflin Infinity', 'Launch Party', 'Money', 'Local Ad', 'Branch Wars', 'Survivor Man', 'The Deposition', 'Dinner Party', 'Chair Model', 'Night Out', 'Did I Stutter?', 'Job Fair', 'Goodbye, Toby'], S5: ['Weight Loss', 'Business Ethics', 'Baby Shower', 'Crime Aid', 'Employee Transfer', 'Customer Survey', 'Business Trip', 'Frame Toby', 'The Surplus', 'Moroccan Christmas', 'The Duel', 'Prince Family Paper', 'Stress Relief', 'Lecture Circuit: Part 1', 'Lecture Circuit: Part 2', 'Blood Drive', 'Golden Ticket', 'New Boss', 'Two Weeks', 'Dream Team', 'Michael Scott Paper Company', 'Heavy Competition', 'Broke', 'Casual Friday', 'Cafe Disco', 'Company Picnic'], S6: ['Gossip', 'The Meeting', 'The Promotion', 'Niagara: Part 1', 'Niagara: Part 2', 'Mafia', 'The Lover', 'Koi Pond', 'Double Date', 'Murder', 'Shareholder Meeting', "Scott's Tots", 'Secret Santa', 'The Banker', 'Sabre', 'Manager and Salesman', 'The Delivery: Part 1', 'The Delivery: Part 2', "St. Patrick's Day", 'New Leads', 'Happy Hour', "Secretary's Day", 'Body Language', 'The Cover-Up', 'The Chump', 'Whistleblower'], S7: ['Nepotism', 'Counseling', "Andy's Play", 'Sex Ed', 'The Sting', 'Costume Contest', 'Christening', 'Viewing Party', 'WUPHF.com', 'China', 'Classy Christmas', 'Ultimatum', 'The Seminar', 'The Search', 'PDA', 'Threat Level Midnight', 'Todd Packer', 'Garage Sale', 'Training Day', "Michael's Last Dundies", 'Goodbye, Michael', 'The Inner Circle', 'Dwight K. Schrute, (Acting) Manager', 'Search Committee'], S8: ['The List', 'The Incentive', 'Lotto', 'Garden Party', 'Spooked', 'Doomsday', "Pam's Replacement", 'Gettysburg', 'Mrs. California', 'Christmas Wishes', 'Trivia', 'Pool Party', 'Jury Duty', 'Special Project', 'Tallahassee', 'After Hours', 'Test the Store', 'Last Day in Florida', 'Get the Girl', 'Welcome Party', 'Angry Andy', 'Fundraiser', 'Turf War', 'Free Family Portrait Studio'], S9: ['New Guys', "Roy's Wedding", "Andy's Ancestry", 'Work Bus', 'Here Comes Treble', 'The Boat', 'The Whale', 'The Target', 'Dwight Christmas', 'Lice', 'Suit Warehouse', 'Customer Loyalty', 'Junior Salesman', 'Vandalism', 'Couples Discount', 'Moving On', 'The Farm', 'Promos', 'Stairmageddon', 'Paper Airplane', "Livin' the Dream", 'A.A.R.M.', 'Finale']}
    ;

var houseofcards_ratings =
    [[{x:0, y:8.6}, {x:1, y:8.6}, {x:2, y:8.3}, {x:3, y:8.2}, {x:4, y:8.5}, {x:5, y:8.6}, {x:6, y:8.2}, {x:7, y:7.8}, {x:8, y:8.5}, {x:9, y:8.8}, {x:10, y:9.1}, {x:11, y:8.6}, {x:12, y:8.9}], [{x:13, y:9.6}, {x:14, y:8.4}, {x:15, y:8.5}, {x:16, y:9.1}, {x:17, y:8.4}, {x:18, y:8.4}, {x:19, y:8.4}, {x:20, y:8.6}, {x:21, y:8.9}, {x:22, y:8.4}, {x:23, y:8.7}, {x:24, y:8.9}, {x:25, y:9.6}], [{x:26, y:8.1}, {x:27, y:8.5}, {x:28, y:8.6}, {x:29, y:8.3}, {x:30, y:8.2}, {x:31, y:9.1}, {x:32, y:8.2}, {x:33, y:8.3}, {x:34, y:8.4}, {x:35, y:8.2}, {x:36, y:9.1}, {x:37, y:8.8}, {x:38, y:9.0}], [{x:39, y:8.0}, {x:40, y:8.2}, {x:41, y:8.9}, {x:42, y:9.4}, {x:43, y:8.5}, {x:44, y:8.6}, {x:45, y:8.5}, {x:46, y:8.2}, {x:47, y:8.8}, {x:48, y:9.3}, {x:49, y:8.4}, {x:50, y:8.8}, {x:51, y:9.5}], [{x:52, y:8.3}, {x:53, y:8.1}, {x:54, y:8.1}, {x:55, y:8.7}, {x:56, y:8.0}, {x:57, y:7.9}, {x:58, y:8.4}, {x:59, y:8.1}, {x:60, y:8.0}, {x:61, y:8.4}, {x:62, y:8.4}, {x:63, y:9.1}, {x:64, y:8.5}], [{x:65, y:4.2}, {x:66, y:4.2}, {x:67, y:4.2}, {x:68, y:4.3}, {x:69, y:4.4}, {x:70, y:4.2}, {x:71, y:3.9}, {x:72, y:2.5}]]
    ;
var houseofcards_names =
    {S1: ['Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5', 'Chapter 6', 'Chapter 7', 'Chapter 8', 'Chapter 9', 'Chapter 10', 'Chapter 11', 'Chapter 12', 'Chapter 13'], S2: ['Chapter 14', 'Chapter 15', 'Chapter 16', 'Chapter 17', 'Chapter 18', 'Chapter 19', 'Chapter 20', 'Chapter 21', 'Chapter 22', 'Chapter 23', 'Chapter 24', 'Chapter 25', 'Chapter 26'], S3: ['Chapter 27', 'Chapter 28', 'Chapter 29', 'Chapter 30', 'Chapter 31', 'Chapter 32', 'Chapter 33', 'Chapter 34', 'Chapter 35', 'Chapter 36', 'Chapter 37', 'Chapter 38', 'Chapter 39'], S4: ['Chapter 40', 'Chapter 41', 'Chapter 42', 'Chapter 43', 'Chapter 44', 'Chapter 45', 'Chapter 46', 'Chapter 47', 'Chapter 48', 'Chapter 49', 'Chapter 50', 'Chapter 51', 'Chapter 52'], S5: ['Chapter 53', 'Chapter 54', 'Chapter 55', 'Chapter 56', 'Chapter 57', 'Chapter 58', 'Chapter 59', 'Chapter 60', 'Chapter 61', 'Chapter 62', 'Chapter 63', 'Chapter 64', 'Chapter 65'], S6: ['Chapter 66', 'Chapter 67', 'Chapter 68', 'Chapter 69', 'Chapter 70', 'Chapter 71', 'Chapter 72', 'Chapter 73']}
    ;

var house_ratings =
    [[{x:0, y:8.6}, {x:1, y:8.3}, {x:2, y:8.3}, {x:3, y:8.4}, {x:4, y:8.2}, {x:5, y:8.5}, {x:6, y:8.3}, {x:7, y:8.2}, {x:8, y:8.8}, {x:9, y:8.5}, {x:10, y:8.8}, {x:11, y:8.1}, {x:12, y:8.2}, {x:13, y:8.7}, {x:14, y:8.1}, {x:15, y:8.4}, {x:16, y:8.6}, {x:17, y:8.9}, {x:18, y:8.3}, {x:19, y:8.4}, {x:20, y:9.6}, {x:21, y:8.7}], [{x:22, y:8.5}, {x:23, y:9.2}, {x:24, y:8.0}, {x:25, y:8.1}, {x:26, y:8.1}, {x:27, y:8.0}, {x:28, y:8.4}, {x:29, y:8.9}, {x:30, y:8.5}, {x:31, y:8.6}, {x:32, y:8.2}, {x:33, y:8.6}, {x:34, y:8.7}, {x:35, y:8.5}, {x:36, y:8.6}, {x:37, y:8.8}, {x:38, y:9.0}, {x:39, y:8.2}, {x:40, y:8.6}, {x:41, y:9.1}, {x:42, y:9.3}, {x:43, y:8.1}, {x:44, y:7.8}, {x:45, y:9.5}], [{x:46, y:8.9}, {x:47, y:8.5}, {x:48, y:8.6}, {x:49, y:9.0}, {x:50, y:8.4}, {x:51, y:8.2}, {x:52, y:8.9}, {x:53, y:8.1}, {x:54, y:8.5}, {x:55, y:8.7}, {x:56, y:8.7}, {x:57, y:9.1}, {x:58, y:8.1}, {x:59, y:8.8}, {x:60, y:9.1}, {x:61, y:8.1}, {x:62, y:8.5}, {x:63, y:9.0}, {x:64, y:8.3}, {x:65, y:8.3}, {x:66, y:8.4}, {x:67, y:8.5}, {x:68, y:8.5}, {x:69, y:9.0}], [{x:70, y:9.0}, {x:71, y:8.9}, {x:72, y:8.8}, {x:73, y:8.5}, {x:74, y:8.8}, {x:75, y:8.6}, {x:76, y:8.3}, {x:77, y:8.7}, {x:78, y:8.7}, {x:79, y:8.4}, {x:80, y:9.2}, {x:81, y:8.2}, {x:82, y:8.1}, {x:83, y:8.3}, {x:84, y:9.8}, {x:85, y:9.8}], [{x:86, y:8.4}, {x:87, y:8.2}, {x:88, y:8.2}, {x:89, y:9.0}, {x:90, y:8.6}, {x:91, y:8.6}, {x:92, y:8.3}, {x:93, y:8.1}, {x:94, y:8.9}, {x:95, y:8.3}, {x:96, y:8.4}, {x:97, y:8.1}, {x:98, y:8.0}, {x:99, y:8.0}, {x:100, y:8.5}, {x:101, y:8.5}, {x:102, y:8.7}, {x:103, y:8.3}, {x:104, y:9.1}, {x:105, y:9.2}, {x:106, y:8.4}, {x:107, y:9.1}, {x:108, y:9.3}, {x:109, y:9.6}], [{x:110, y:9.7}, {x:111, y:8.6}, {x:112, y:9.0}, {x:113, y:8.5}, {x:114, y:8.5}, {x:115, y:8.4}, {x:116, y:8.2}, {x:117, y:8.3}, {x:118, y:8.9}, {x:119, y:8.9}, {x:120, y:8.7}, {x:121, y:8.0}, {x:122, y:8.4}, {x:123, y:8.0}, {x:124, y:8.1}, {x:125, y:8.8}, {x:126, y:8.0}, {x:127, y:7.9}, {x:128, y:8.2}, {x:129, y:8.9}, {x:130, y:9.6}], [{x:131, y:8.3}, {x:132, y:8.7}, {x:133, y:8.3}, {x:134, y:8.0}, {x:135, y:8.2}, {x:136, y:8.1}, {x:137, y:8.7}, {x:138, y:7.8}, {x:139, y:8.5}, {x:140, y:8.1}, {x:141, y:8.6}, {x:142, y:7.9}, {x:143, y:8.9}, {x:144, y:8.0}, {x:145, y:8.6}, {x:146, y:8.9}, {x:147, y:8.5}, {x:148, y:8.9}, {x:149, y:8.5}, {x:150, y:8.0}, {x:151, y:7.9}, {x:152, y:9.2}, {x:153, y:8.5}], [{x:154, y:8.8}, {x:155, y:8.3}, {x:156, y:8.2}, {x:157, y:8.0}, {x:158, y:8.5}, {x:159, y:8.0}, {x:160, y:8.3}, {x:161, y:8.0}, {x:162, y:8.1}, {x:163, y:7.8}, {x:164, y:9.2}, {x:165, y:8.8}, {x:166, y:8.0}, {x:167, y:8.0}, {x:168, y:7.5}, {x:169, y:7.7}, {x:170, y:8.0}, {x:171, y:8.1}, {x:172, y:9.0}, {x:173, y:8.8}, {x:174, y:9.0}, {x:175, y:9.3}]]
    ;
var house_names = 
    {S1: ['Pilot', 'Paternity', "Occam's Razor", 'Maternity', 'Damned If You Do', 'The Socratic Method', 'Fidelity', 'Poison', 'DNR', 'Histories', 'Detox', 'Sports Medicine', 'Cursed', 'Control', 'Mob Rules', 'Heavy', 'Role Model', 'Babies & Bathwater', 'Kids', 'Love Hurts', 'Three Stories', 'Honeymoon'], S2: ['Acceptance', 'Autopsy', 'Humpty Dumpty', 'TB or Not TB', "Daddy's Boy", 'Spin', 'Hunting', 'The Mistake', 'Deception', 'Failure to Communicate', 'Need to Know', 'Distractions', 'Skin Deep', 'Sex Kills', 'Clueless', 'Safe', 'All In', 'Sleeping Dogs Lie', 'House vs. God', 'Euphoria: Part 1', 'Euphoria: Part 2', 'Forever', "Who's Your Daddy?", 'No Reason'], S3: ['Meaning', 'Cane and Able', 'Informed Consent', 'Lines in the Sand', 'Fools for Love', 'Que Será Será', 'Son of Coma Guy', 'Whac-A-Mole', 'Finding Judas', 'Merry Little Christmas', 'Words and Deeds', 'One Day, One Room', 'Needle in a Haystack', 'Insensitive', 'Half-Wit', 'Top Secret', 'Fetal Position', 'Airborne', 'Act Your Age', 'House Training', 'Family', 'Resignation', 'The Jerk', 'Human Error'], S4: ['Alone', 'The Right Stuff', '97 Seconds', 'Guardian Angels', 'Mirror Mirror', 'Whatever It Takes', 'Ugly', "You Don't Want to Know", 'Games', "It's a Wonderful Lie", 'Frozen', "Don't Ever Change", 'No More Mr. Nice Guy', 'Living the Dream', "House's Head", "Wilson's Heart"], S5: ['Dying Changes Everything', 'Not Cancer', 'Adverse Events', 'Birthmarks', 'Lucky Thirteen', 'Joy', 'The Itch', 'Emancipation', 'Last Resort', 'Let Them Eat Cake', 'Joy to the World', 'Painless', 'Big Baby', 'The Greater Good', 'Unfaithful', 'The Softer Side', 'The Social Contract', 'Here Kitty', 'Locked In', 'Simple Explanation', 'Saviors', 'House Divided', 'Under My Skin', 'Both Sides Now'], S6: ['Broken', 'Epic Fail', 'The Tyrant', 'Instant Karma', 'Brave Heart', 'Known Unknowns', 'Teamwork', 'Ignorance Is Bliss', 'Wilson', 'The Down Low', 'Remorse', 'Moving the Chains', '5 to 9', 'Private Lives', 'Black Hole', 'Lockdown', 'Knight Fall', 'Open and Shut', 'The Choice', 'Baggage', 'Help Me'], 'S7': ['Now What?', 'Selfish', 'Unwritten', 'Massage Therapy', 'Unplanned Parenthood', 'Office Politics', 'A Pox on Our House', 'Small Sacrifices', 'Larger Than Life', 'Carrot or Stick', 'Family Practice', 'You Must Remember This', 'Two Stories', 'Recession Proof', 'Bombshells', 'Out of the Chute', 'Fall from Grace', 'The Dig', 'Last Temptation', 'Changes', 'The Fix', 'After Hours', 'Moving On'], 'S8': ['Twenty Vicodin', 'Transplant', 'Charity Case', 'Risky Business', 'The Confession', 'Parents', 'Dead & Buried', 'Perils of Paranoia', 'Better Half', 'Runaways', "Nobody's Fault", 'Chase', 'Man of the House', 'Love Is Blind', 'Blowing the Whistle', 'Gut Check', 'We Need the Eggs', 'Body and Soul', 'The C Word', 'Post Mortem', 'Holding On', 'Everybody Dies']}
    ;

var suits_ratings =
    [[{x:0, y:8.9}, {x:1, y:8.4}, {x:2, y:8.3}, {x:3, y:8.2}, {x:4, y:8.3}, {x:5, y:8.2}, {x:6, y:8.7}, {x:7, y:8.3}, {x:8, y:8.6}, {x:9, y:8.5}, {x:10, y:8.6}, {x:11, y:9.0}], [{x:12, y:9.1}, {x:13, y:8.5}, {x:14, y:8.4}, {x:15, y:8.6}, {x:16, y:8.9}, {x:17, y:8.6}, {x:18, y:9.2}, {x:19, y:8.7}, {x:20, y:8.9}, {x:21, y:9.3}, {x:22, y:8.3}, {x:23, y:8.6}, {x:24, y:8.4}, {x:25, y:8.6}, {x:26, y:8.5}, {x:27, y:8.9}], [{x:28, y:8.6}, {x:29, y:8.6}, {x:30, y:8.5}, {x:31, y:8.5}, {x:32, y:8.3}, {x:33, y:8.8}, {x:34, y:8.8}, {x:35, y:8.7}, {x:36, y:8.5}, {x:37, y:8.6}, {x:38, y:8.5}, {x:39, y:9.1}, {x:40, y:8.5}, {x:41, y:9.0}, {x:42, y:8.9}, {x:43, y:9.4}], [{x:44, y:8.7}, {x:45, y:8.5}, {x:46, y:8.5}, {x:47, y:8.4}, {x:48, y:8.5}, {x:49, y:9.0}, {x:50, y:8.9}, {x:51, y:9.0}, {x:52, y:9.3}, {x:53, y:9.6}, {x:54, y:9.0}, {x:55, y:8.5}, {x:56, y:8.9}, {x:57, y:8.7}, {x:58, y:9.3}, {x:59, y:9.1}], [{x:60, y:9.0}, {x:61, y:8.7}, {x:62, y:9.0}, {x:63, y:9.1}, {x:64, y:8.7}, {x:65, y:8.8}, {x:66, y:9.4}, {x:67, y:9.2}, {x:68, y:9.0}, {x:69, y:9.8}, {x:70, y:9.4}, {x:71, y:9.1}, {x:72, y:8.9}, {x:73, y:9.4}, {x:74, y:9.6}, {x:75, y:9.4}], [{x:76, y:8.3}, {x:77, y:8.3}, {x:78, y:8.5}, {x:79, y:8.4}, {x:80, y:8.3}, {x:81, y:8.1}, {x:82, y:8.2}, {x:83, y:8.7}, {x:84, y:9.2}, {x:85, y:9.6}, {x:86, y:8.4}, {x:87, y:8.8}, {x:88, y:8.5}, {x:89, y:8.4}, {x:90, y:8.3}, {x:91, y:9.6}], [{x:92, y:8.7}, {x:93, y:8.3}, {x:94, y:7.9}, {x:95, y:8.1}, {x:96, y:7.9}, {x:97, y:8.4}, {x:98, y:8.5}, {x:99, y:8.7}, {x:100, y:8.0}, {x:101, y:9.0}, {x:102, y:8.2}, {x:103, y:7.7}, {x:104, y:8.6}, {x:105, y:8.4}, {x:106, y:8.5}, {x:107, y:8.0}], [{x:108, y:7.3}, {x:109, y:7.5}, {x:110, y:7.7}, {x:111, y:7.7}, {x:112, y:7.8}, {x:113, y:8.1}, {x:114, y:7.8}, {x:115, y:7.4}, {x:116, y:7.6}, {x:117, y:8.9}, {x:118, y:7.8}, {x:119, y:7.8}, {x:120, y:7.8}, {x:121, y:8.3}, {x:122, y:8.1}, {x:123, y:8.9}], [{x:124, y:8.2}, {x:125, y:7.9}, {x:126, y:7.7}, {x:127, y:8.0}, {x:128, y:8.6}, {x:129, y:7.8}, {x:130, y:7.5}, {x:131, y:8.9}, {x:132, y:9.3}, {x:133, y:9.6}]]
    ;
var suits_names =
    {S1: ['Pilot', 'Errors and Omissions', 'Inside Track', 'Dirty Little Secrets', 'Bail Out', 'Tricks of the Trade', 'Play the Man', 'Identity Crisis', 'Undefeated', 'The Shelf Life', 'Rules of the Game', 'Dog Fight'], S2: ['She Knows', 'The Choice', 'Meet the New Boss', 'Discovery', 'Break Point', 'All In', 'Sucker Punch', 'Rewind', 'Asterisk', 'High Noon', 'Blind-Sided', 'Blood in the Water', 'Zane vs. Zane', "He's Back", 'Normandy', 'War'], S3: ['The Arrangement', 'I Want You to Want Me', 'Unfinished Business', 'Conflict of Interest', 'Shadow of a Doubt', 'The Other Time', "She's Mine", 'Endgame', 'Bad Faith', 'Stay', 'Buried Secrets', "Yesterday's Gone", 'Moot Point', 'Heartburn', "Know When to Fold 'Em", 'No Way Out'], S4: ['One-Two-Three Go...', 'Breakfast, Lunch and Dinner', 'Two in the Knees', 'Leveraged', 'Pound of Flesh', 'Litt the Hell Up', "We're Done", 'Exposure', 'Gone', 'This Is Rome', 'Enough Is Enough', 'Respect', 'Fork in the Road', 'Derailed', 'Intent', 'Not Just a Pretty Face'], S5: ['Denial', 'Compensation', 'No Refills', 'No Puedo Hacerlo', 'Toe to Toe', 'Privilege', 'Hitting Home', 'Mea Culpa', 'Uninvited Guests', 'Faith', 'Blowback', 'Live to Fight...', "God's Green Earth", 'Self Defense', 'Tick Tock', '25th Hour'], S6: ['To Trouble', 'Accounts Payable', 'Back on the Map', 'Turn', 'Trust', 'Spain', 'Shake the Trees', 'Borrowed Time', 'The Hand That Feeds You', 'P.S.L.', "She's Gone", 'The Painting', 'Teeth, Nose, Teeth', 'Admission of Guilt', 'Quid Pro Quo', 'Character and Fitness'], 'S7': ['Skin in the Game', 'The Statue', 'Mudmare', 'Divide and Conquer', 'Brooklyn Housing', 'Home to Roost', 'Full Disclosure', '100', 'Shame', 'Donna', 'Hard Truths', 'Bad Man', 'Inevitable', 'Pulling the Goalie', 'Tiny Violin', 'Good-Bye'], 'S8': ['Right-Hand Man', 'Pecking Order', 'Promises, Promises', 'Revenue Per Square Foot', 'Good Mudding', 'Cats, Ballet, Harvey Specter', 'Sour Grapes', 'Coral Gables', 'Motion to Delay', 'Managing Partner', 'Rocky 8', 'Whale Hunt', 'The Greater Good', 'Peas in a Pod', 'Stalking Horse', 'Harvey'], 'S9': ["Everything's Changed", 'Special Master', 'Windmills', 'Cairo', 'If the Shoe Fits', 'Whatever It Takes', 'Scenic Route', "Prisoner's Dilemma", 'Thunder Away', 'One Last Con']}
    ;

var breakingbad_ratings =
    [[{x:0, y:9.0}, {x:1, y:8.7}, {x:2, y:8.8}, {x:3, y:8.3}, {x:4, y:8.4}, {x:5, y:9.3}, {x:6, y:8.9}], [{x:7, y:8.7}, {x:8, y:9.3}, {x:9, y:8.4}, {x:10, y:8.3}, {x:11, y:8.4}, {x:12, y:8.9}, {x:13, y:8.7}, {x:14, y:9.2}, {x:15, y:9.2}, {x:16, y:8.6}, {x:17, y:8.9}, {x:18, y:9.3}, {x:19, y:9.3}], [{x:20, y:8.6}, {x:21, y:8.7}, {x:22, y:8.5}, {x:23, y:8.3}, {x:24, y:8.7}, {x:25, y:9.3}, {x:26, y:9.6}, {x:27, y:8.8}, {x:28, y:8.5}, {x:29, y:7.8}, {x:30, y:8.5}, {x:31, y:9.5}, {x:32, y:9.7}], [{x:33, y:9.2}, {x:34, y:8.3}, {x:35, y:8.1}, {x:36, y:8.7}, {x:37, y:8.7}, {x:38, y:8.5}, {x:39, y:8.9}, {x:40, y:9.3}, {x:41, y:8.9}, {x:42, y:9.6}, {x:43, y:9.7}, {x:44, y:9.5}, {x:45, y:9.9}], [{x:46, y:9.3}, {x:47, y:8.9}, {x:48, y:8.9}, {x:49, y:8.9}, {x:50, y:9.7}, {x:51, y:9.1}, {x:52, y:9.6}, {x:53, y:9.6}, {x:54, y:9.5}, {x:55, y:9.2}, {x:56, y:9.6}, {x:57, y:9.2}, {x:58, y:9.8}, {x:59, y:9.7}, {x:60, y:9.9}]]
    ;
var breakingbad_names =
    {S1: ['Pilot', "Cat's in the Bag...", "...And the Bag's in the River", 'Cancer Man', 'Gray Matter', "Crazy Handful of Nothin'", 'A No-Rough-Stuff-Type Deal'], S2: ['Seven Thirty-Seven', 'Grilled', 'Bit by a Dead Bee', 'Down', 'Breakage', 'Peekaboo', 'Negro Y Azul', 'Better Call Saul', '4 Days Out', 'Over', 'Mandala', 'Phoenix', 'ABQ'], S3: ['No Más', 'Caballo sin Nombre', 'I.F.T.', 'Green Light', 'Más', 'Sunset', 'One Minute', 'I See You', 'Kafkaesque', 'Fly', 'Abiquiu', 'Half Measures', 'Full Measure'], S4: ['Box Cutter', 'Thirty-Eight Snub', 'Open House', 'Bullet Points', 'Shotgun', 'Cornered', 'Problem Dog', 'Hermanos', 'Bug', 'Salud', 'Crawl Space', 'End Times', 'Face Off'], S5: ['Live Free or Die', 'Madrigal', 'Hazard Pay', 'Fifty-One', 'Dead Freight', 'Buyout', 'Say My Name', 'Gliding Over All', 'Blood Money', 'Buried', 'Confessions', 'Rabid Dog', "To'hajiilee", 'Ozymandias', 'Granite State', 'Felina']}
    ;

var avatar_ratings =
    [[{x:0, y:8.6}, {x:1, y:8.1}, {x:2, y:8.3}, {x:3, y:8.5}, {x:4, y:8.2}, {x:5, y:8.2}, {x:6, y:8.0}, {x:7, y:8.2}, {x:8, y:8.9}, {x:9, y:8.0}, {x:10, y:7.8}, {x:11, y:7.0}, {x:12, y:9.1}, {x:13, y:9.1}, {x:14, y:7.9}, {x:15, y:7.9}, {x:16, y:8.5}, {x:17, y:8.0}, {x:18, y:8.6}, {x:19, y:9.4}, {x:20, y:9.7}], [{x:21, y:8.7}, {x:22, y:8.2}, {x:23, y:8.4}, {x:24, y:7.7}, {x:25, y:7.5}, {x:26, y:9.2}, {x:27, y:9.5}, {x:28, y:9.0}, {x:29, y:8.6}, {x:30, y:8.8}, {x:31, y:8.8}, {x:32, y:8.4}, {x:33, y:9.0}, {x:34, y:8.7}, {x:35, y:9.3}, {x:36, y:8.8}, {x:37, y:9.1}, {x:38, y:8.6}, {x:39, y:9.1}, {x:40, y:9.6}], [{x:41, y:8.7}, {x:42, y:8.4}, {x:43, y:8.0}, {x:44, y:8.8}, {x:45, y:8.5}, {x:46, y:9.5}, {x:47, y:8.2}, {x:48, y:9.1}, {x:49, y:7.8}, {x:50, y:9.1}, {x:51, y:9.4}, {x:52, y:8.9}, {x:53, y:9.2}, {x:54, y:8.7}, {x:55, y:9.2}, {x:56, y:8.9}, {x:57, y:8.6}, {x:58, y:9.1}, {x:59, y:9.5}, {x:60, y:9.8}, {x:61, y:9.8}]]
    ;
var avatar_names =
    {S1: ['Avatar: The Last Airbender', 'The Boy in the Iceberg', 'The Avatar Returns', 'The Southern Air Temple', 'The Warriors of Kyoshi', 'The King of Omashu', 'Imprisoned', 'The Spirit World: Winter Solstice, Part 1', 'Avatar Roku: Winter Solstice, Part 2', 'The Waterbending Scroll', 'Jet', 'The Great Divide', 'The Storm', 'The Blue Spirit', 'The Fortuneteller', 'Bato of the Water Tribe', 'The Deserter', 'The Northern Air Temple', 'The Waterbending Master', 'The Siege of the North, Part 1', 'The Siege of the North, Part 2'], S2: ['The Avatar State', 'The Cave of Two Lovers', 'Return to Omashu', 'The Swamp', 'Avatar Day', 'The Blind Bandit', 'Zuko Alone', 'The Chase', 'Bitter Work', 'The Library', 'The Desert', "The Serpent's Pass", 'The Drill', 'City of Walls and Secrets', 'The Tales of Ba Sing Se', "Appa's Lost Days", 'Lake Laogai', 'The Earth King', 'The Guru', 'The Crossroads of Destiny'], S3: ['The Awakening', 'The Headband', 'The Painted Lady', "Sokka's Master", 'The Beach', 'The Avatar and the Fire Lord', 'The Runaway', 'The Puppetmaster', 'Nightmares and Daydreams', 'The Day of Black Sun, Part 1: The Invasion', 'The Day of Black Sun, Part 2: The Eclipse', 'The Western Air Temple', 'The Firebending Masters', 'The Boiling Rock: Part 1', 'The Boiling Rock, Part 2', 'The Southern Raiders', 'The Ember Island Players', "Sozin's Comet, Part 1: The Phoenix King", "Sozin's Comet, Part 2: The Old Masters", "Sozin's Comet, Part 3: Into the Inferno", "Sozin's Comet, Part 4: Avatar Aang"]}
    ;

var lineColor = "#346888";
var sparklineHeight = 180;

Highcharts.chart('line-got', {
    chart: {
        height: sparklineHeight,
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
                fillColor: lineColor,
                symbol: "circle",
            },
            color: lineColor,
            lineWidth: 4,
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, lineColor], // start
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
        height: sparklineHeight,
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
            color: lineColor,
            lineWidth: 4,
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0.5, lineColor], // mid
                    [1, '#FF0000'] // end
                ]
            },
            marker: {
                enabled: false,
                fillColor: lineColor,
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
        height: sparklineHeight,
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
            color: lineColor,
            lineWidth: 3,
            marker: {
                enabled: false,
                symbol: "circle",
            },
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, lineColor], // start
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

Highcharts.chart('line-seinfeld', {
    chart: {
        height: sparklineHeight,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Seinfeld',
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
            return `<b> ${this.series.name}E${this.point.index + 1}: ${seinfeld_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            color: lineColor,
            lineWidth: 3,
            marker: {
                enabled: false,
                symbol: "circle",
            },
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, lineColor], // start
                    [0.5, '#FF0000'] // end
                ]
            },
        }
    },
    series: [{
        name: 'S1',
        data: seinfeld_ratings[0],
    },
    {
        name: 'S2',
        data: seinfeld_ratings[1],
    },
    {
        name: 'S3',
        data: seinfeld_ratings[2],
    },
    {
        name: 'S4',
        data: seinfeld_ratings[3],
    },
    {
        name: 'S5',
        data: seinfeld_ratings[4],
    },
    {
        name: 'S6',
        data: seinfeld_ratings[5],
    },
    {
        name: 'S7',
        data: seinfeld_ratings[6],
    },
    {
        name: 'S8',
        data: seinfeld_ratings[7],
    },
    {
        name: 'S9',
        data: seinfeld_ratings[8],
    },
    {
        name: 'S10',
        data: seinfeld_ratings[9],
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

Highcharts.chart('line-theoffice', {
    chart: {
        height: sparklineHeight,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'The Office',
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
            return `<b> ${this.series.name}E${this.point.index + 1}: ${theoffice_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            color: lineColor,
            lineWidth: 3,
            marker: {
                enabled: false,
                symbol: "circle",
            },
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, lineColor], // start
                    [0.5, '#FF0000'] // end
                ]
            },
        }
    },
    series: [{
        name: 'S1',
        data: theoffice_ratings[0],
    },
    {
        name: 'S2',
        data: theoffice_ratings[1],
    },
    {
        name: 'S3',
        data: theoffice_ratings[2],
    },
    {
        name: 'S4',
        data: theoffice_ratings[3],
    },
    {
        name: 'S5',
        data: theoffice_ratings[4],
    },
    {
        name: 'S6',
        data: theoffice_ratings[5],
    },
    {
        name: 'S7',
        data: theoffice_ratings[6],
    },
    {
        name: 'S8',
        data: theoffice_ratings[7],
    },
    {
        name: 'S9',
        data: theoffice_ratings[8],
    },
    {
        name: 'S10',
        data: theoffice_ratings[9],
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

Highcharts.chart('line-houseofcards', {
    chart: {
        height: sparklineHeight,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'House of Cards',
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
            return `<b> ${this.series.name}E${this.point.index + 1}: ${houseofcards_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            color: lineColor,
            lineWidth: 3,
            marker: {
                enabled: false,
                symbol: "circle",
            },
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, "#FF0000"], // start
                    [0.5, '#FF0000'] // end
                ]
            },
        }
    },
    series: [{
        name: 'S1',
        data: houseofcards_ratings[0],
    },
    {
        name: 'S2',
        data: houseofcards_ratings[1],
    },
    {
        name: 'S3',
        data: houseofcards_ratings[2],
    },
    {
        name: 'S4',
        data: houseofcards_ratings[3],
    },
    {
        name: 'S5',
        data: houseofcards_ratings[4],
    },
    {
        name: 'S6',
        data: houseofcards_ratings[5],
    },
    {
        name: 'S7',
        data: houseofcards_ratings[6],
    },
    {
        name: 'S8',
        data: houseofcards_ratings[7],
    },
    {
        name: 'S9',
        data: houseofcards_ratings[8],
    },
    {
        name: 'S10',
        data: houseofcards_ratings[9],
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

Highcharts.chart('line-house', {
    chart: {
        height: sparklineHeight,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'House',
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
            return `<b> ${this.series.name}E${this.point.index + 1}: ${house_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            color: lineColor,
            lineWidth: 3,
            marker: {
                enabled: false,
                symbol: "circle",
            },
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, lineColor], // start
                    [0.5, '#FF0000'] // end
                ]
            },
        }
    },
    series: [{
        name: 'S1',
        data: house_ratings[0],
    },
    {
        name: 'S2',
        data: house_ratings[1],
    },
    {
        name: 'S3',
        data: house_ratings[2],
    },
    {
        name: 'S4',
        data: house_ratings[3],
    },
    {
        name: 'S5',
        data: house_ratings[4],
    },
    {
        name: 'S6',
        data: house_ratings[5],
    },
    {
        name: 'S7',
        data: house_ratings[6],
    },
    {
        name: 'S8',
        data: house_ratings[7],
    },
    {
        name: 'S9',
        data: house_ratings[8],
    },
    {
        name: 'S10',
        data: house_ratings[9],
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


Highcharts.chart('line-suits', {
    chart: {
        height: sparklineHeight,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Suits',
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
            return `<b> ${this.series.name}E${this.point.index + 1}: ${suits_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            color: lineColor,
            lineWidth: 3,
            marker: {
                enabled: false,
                symbol: "circle",
            },
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, lineColor], // start
                    [0.5, '#FF0000'] // end
                ]
            },
        }
    },
    series: [{
        name: 'S1',
        data: suits_ratings[0],
    },
    {
        name: 'S2',
        data: suits_ratings[1],
    },
    {
        name: 'S3',
        data: suits_ratings[2],
    },
    {
        name: 'S4',
        data: suits_ratings[3],
    },
    {
        name: 'S5',
        data: suits_ratings[4],
    },
    {
        name: 'S6',
        data: suits_ratings[5],
    },
    {
        name: 'S7',
        data: suits_ratings[6],
    },
    {
        name: 'S8',
        data: suits_ratings[7],
    },
    {
        name: 'S9',
        data: suits_ratings[8],
    },
    {
        name: 'S10',
        data: suits_ratings[9],
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


Highcharts.chart('line-breakingbad', {
    chart: {
        height: sparklineHeight,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Breaking Bad',
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
            return `<b> ${this.series.name}E${this.point.index + 1}: ${breakingbad_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            color: lineColor,
            lineWidth: 3,
            marker: {
                enabled: false,
                symbol: "circle",
            },
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, lineColor], // start
                    [0.5, '#FF0000'] // end
                ]
            },
        }
    },
    series: [{
        name: 'S1',
        data: breakingbad_ratings[0],
    },
    {
        name: 'S2',
        data: breakingbad_ratings[1],
    },
    {
        name: 'S3',
        data: breakingbad_ratings[2],
    },
    {
        name: 'S4',
        data: breakingbad_ratings[3],
    },
    {
        name: 'S5',
        data: breakingbad_ratings[4],
    },
    {
        name: 'S6',
        data: breakingbad_ratings[5],
    },
    {
        name: 'S7',
        data: breakingbad_ratings[6],
    },
    {
        name: 'S8',
        data: breakingbad_ratings[7],
    },
    {
        name: 'S9',
        data: breakingbad_ratings[8],
    },
    {
        name: 'S10',
        data: breakingbad_ratings[9],
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


Highcharts.chart('line-avatar', {
    chart: {
        height: sparklineHeight,
        zoomType: 'x',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Avatar',
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
            return `<b> ${this.series.name}E${this.point.index + 1}: ${avatar_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
        },
        style: {
            width: 320,
        }
    },
    plotOptions: {
        line: {
            color: lineColor,
            lineWidth: 3,
            marker: {
                enabled: false,
                symbol: "circle",
            },
            threshold: 7.5,
            negativeColor: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, lineColor], // start
                    [0.5, '#FF0000'] // end
                ]
            },
        }
    },
    series: [{
        name: 'S1',
        data: avatar_ratings[0],
    },
    {
        name: 'S2',
        data: avatar_ratings[1],
    },
    {
        name: 'S3',
        data: avatar_ratings[2],
    },
    {
        name: 'S4',
        data: avatar_ratings[3],
    },
    {
        name: 'S5',
        data: avatar_ratings[4],
    },
    {
        name: 'S6',
        data: avatar_ratings[5],
    },
    {
        name: 'S7',
        data: avatar_ratings[6],
    },
    {
        name: 'S8',
        data: avatar_ratings[7],
    },
    {
        name: 'S9',
        data: avatar_ratings[8],
    },
    {
        name: 'S10',
        data: avatar_ratings[9],
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