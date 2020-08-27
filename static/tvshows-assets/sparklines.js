var showName = "Game of Thrones";
var episodeRatings = [[{x:0, y:9.1}, {x:1, y:8.8}, {x:2, y:8.7}, {x:3, y:8.8}, {x:4, y:9.1}, {x:5, y:9.2}, {x:6, y:9.2}, {x:7, y:9.0}, {x:8, y:9.6}, {x:9, y:9.5}], [{x:10, y:8.8}, {x:11, y:8.5}, {x:12, y:8.8}, {x:13, y:8.8}, {x:14, y:8.8}, {x:15, y:9.1}, {x:16, y:8.9}, {x:17, y:8.8}, {x:18, y:9.7}, {x:19, y:9.4}], [{x:20, y:8.8}, {x:21, y:8.6}, {x:22, y:8.9}, {x:23, y:9.6}, {x:24, y:9.0}, {x:25, y:8.8}, {x:26, y:8.7}, {x:27, y:9.0}, {x:28, y:9.9}, {x:29, y:9.2}], [{x:30, y:9.1}, {x:31, y:9.7}, {x:32, y:8.9}, {x:33, y:8.8}, {x:34, y:8.8}, {x:35, y:9.7}, {x:36, y:9.1}, {x:37, y:9.7}, {x:38, y:9.6}, {x:39, y:9.7}], [{x:40, y:8.5}, {x:41, y:8.5}, {x:42, y:8.5}, {x:43, y:8.7}, {x:44, y:8.6}, {x:45, y:8.0}, {x:46, y:9.0}, {x:47, y:9.9}, {x:48, y:9.5}, {x:49, y:9.1}], [{x:50, y:8.5}, {x:51, y:9.4}, {x:52, y:8.7}, {x:53, y:9.1}, {x:54, y:9.7}, {x:55, y:8.4}, {x:56, y:8.6}, {x:57, y:8.4}, {x:58, y:9.9}, {x:59, y:9.9}], [{x:60, y:8.6}, {x:61, y:8.9}, {x:62, y:9.2}, {x:63, y:9.8}, {x:64, y:8.8}, {x:65, y:9.0}, {x:66, y:9.4}], [{x:67, y:7.5}, {x:68, y:7.8}, {x:69, y:7.5}, {x:70, y:5.5}, {x:71, y:6.0}, {x:72, y:4.1}]];

var episodeNames = {S1:['Winter Is Coming', 'The Kingsroad', 'Lord Snow', 'Cripples, Bastards, and Broken Things', 'The Wolf and the Lion', 'A Golden Crown', 'You Win or You Die', 'The Pointy End', 'Baelor', 'Fire and Blood'], S2:['The North Remembers', 'The Night Lands', 'What Is Dead May Never Die', 'Garden of Bones', 'The Ghost of Harrenhal', 'The Old Gods and the New', 'A Man Without Honor', 'The Prince of Winterfell', 'Blackwater', 'Valar Morghulis'], S3:['Valar Dohaeris', 'Dark Wings, Dark Words', 'Walk of Punishment', 'And Now His Watch Is Ended', 'Kissed by Fire', 'The Climb', 'The Bear and the Maiden Fair', 'Second Sons', 'The Rains of Castamere', 'Mhysa'], S4:['Two Swords', 'The Lion and the Rose', 'Breaker of Chains', 'Oathkeeper', 'First of His Name', 'The Laws of Gods and Men', 'Mockingbird', 'The Mountain and the Viper', 'The Watchers on the Wall', 'The Children'], S5:['The Wars to Come', 'The House of Black and White', 'High Sparrow', 'Sons of the Harpy', 'Kill the Boy', 'Unbowed, Unbent, Unbroken', 'The Gift', 'Hardhome', 'The Dance of Dragons', "Mother's Mercy"], S6:['The Red Woman', 'Home', 'Oathbreaker', 'Book of the Stranger', 'The Door', 'Blood of My Blood', 'The Broken Man', 'No One', 'Battle of the Bastards', 'The Winds of Winter'], S7:['Dragonstone', 'Stormborn', "The Queen's Justice", 'The Spoils of War', 'Eastwatch', 'Beyond the Wall', 'The Dragon and the Wolf'], S8:['Winterfell', 'A Knight of the Seven Kingdoms', 'The Long Night', 'The Last of the Starks', 'The Bells', 'The Iron Throne']};

var himym_ratings = [[{x:0, y:8.5}, {x:1, y:8.2}, {x:2, y:8.2}, {x:3, y:8.0}, {x:4, y:8.3}, {x:5, y:8.1}, {x:6, y:7.7}, {x:7, y:8.2}, {x:8, y:8.1}, {x:9, y:9.2}, {x:10, y:8.3}, {x:11, y:8.1}, {x:12, y:8.7}, {x:13, y:8.2}, {x:14, y:9.1}, {x:15, y:7.9}, {x:16, y:7.7}, {x:17, y:8.5}, {x:18, y:8.8}, {x:19, y:7.9}, {x:20, y:8.1}, {x:21, y:8.9}], [{x:22, y:8.2}, {x:23, y:8.2}, {x:24, y:8.5}, {x:25, y:8.8}, {x:26, y:8.8}, {x:27, y:8.1}, {x:28, y:9.0}, {x:29, y:8.0}, {x:30, y:9.5}, {x:31, y:8.2}, {x:32, y:8.1}, {x:33, y:8.2}, {x:34, y:8.0}, {x:35, y:8.4}, {x:36, y:8.4}, {x:37, y:8.5}, {x:38, y:8.2}, {x:39, y:8.1}, {x:40, y:8.4}, {x:41, y:8.9}, {x:42, y:8.8}, {x:43, y:8.8}], [{x:44, y:8.3}, {x:45, y:7.7}, {x:46, y:8.1}, {x:47, y:7.8}, {x:48, y:9.0}, {x:49, y:8.1}, {x:50, y:8.0}, {x:51, y:9.1}, {x:52, y:9.0}, {x:53, y:8.0}, {x:54, y:8.5}, {x:55, y:8.2}, {x:56, y:8.8}, {x:57, y:8.7}, {x:58, y:8.0}, {x:59, y:8.3}, {x:60, y:8.2}, {x:61, y:8.1}, {x:62, y:7.8}, {x:63, y:8.7}], [{x:64, y:8.6}, {x:65, y:8.5}, {x:66, y:7.7}, {x:67, y:8.8}, {x:68, y:8.3}, {x:69, y:8.0}, {x:70, y:7.9}, {x:71, y:8.1}, {x:72, y:9.2}, {x:73, y:8.3}, {x:74, y:8.1}, {x:75, y:8.6}, {x:76, y:8.5}, {x:77, y:8.4}, {x:78, y:8.3}, {x:79, y:7.8}, {x:80, y:8.4}, {x:81, y:7.7}, {x:82, y:8.5}, {x:83, y:7.7}, {x:84, y:8.7}, {x:85, y:8.2}, {x:86, y:7.7}, {x:87, y:8.8}], [{x:88, y:8.5}, {x:89, y:8.1}, {x:90, y:8.4}, {x:91, y:8.0}, {x:92, y:7.8}, {x:93, y:7.8}, {x:94, y:7.8}, {x:95, y:9.4}, {x:96, y:8.0}, {x:97, y:8.1}, {x:98, y:7.8}, {x:99, y:9.1}, {x:100, y:8.6}, {x:101, y:8.9}, {x:102, y:8.0}, {x:103, y:7.8}, {x:104, y:8.3}, {x:105, y:8.2}, {x:106, y:7.6}, {x:107, y:7.9}, {x:108, y:7.8}, {x:109, y:8.2}, {x:110, y:8.1}, {x:111, y:8.5}], [{x:112, y:8.2}, {x:113, y:8.3}, {x:114, y:7.8}, {x:115, y:8.6}, {x:116, y:7.8}, {x:117, y:7.7}, {x:118, y:7.7}, {x:119, y:8.1}, {x:120, y:8.5}, {x:121, y:9.1}, {x:122, y:8.0}, {x:123, y:8.2}, {x:124, y:8.9}, {x:125, y:8.6}, {x:126, y:8.8}, {x:127, y:8.1}, {x:128, y:7.7}, {x:129, y:8.3}, {x:130, y:8.3}, {x:131, y:7.7}, {x:132, y:8.0}, {x:133, y:7.9}, {x:134, y:7.8}, {x:135, y:8.5}], [{x:136, y:8.6}, {x:137, y:8.1}, {x:138, y:8.9}, {x:139, y:8.1}, {x:140, y:7.5}, {x:141, y:7.8}, {x:142, y:7.7}, {x:143, y:7.4}, {x:144, y:8.3}, {x:145, y:9.0}, {x:146, y:8.0}, {x:147, y:8.8}, {x:148, y:7.8}, {x:149, y:7.7}, {x:150, y:7.3}, {x:151, y:8.1}, {x:152, y:8.4}, {x:153, y:8.0}, {x:154, y:8.6}, {x:155, y:8.6}, {x:156, y:8.0}, {x:157, y:7.8}, {x:158, y:8.5}, {x:159, y:8.9}], [{x:160, y:8.6}, {x:161, y:7.4}, {x:162, y:7.3}, {x:163, y:7.5}, {x:164, y:7.5}, {x:165, y:7.6}, {x:166, y:7.4}, {x:167, y:7.6}, {x:168, y:7.5}, {x:169, y:8.1}, {x:170, y:8.6}, {x:171, y:9.4}, {x:172, y:7.9}, {x:173, y:7.9}, {x:174, y:8.2}, {x:175, y:7.6}, {x:176, y:7.8}, {x:177, y:8.1}, {x:178, y:8.0}, {x:179, y:8.4}, {x:180, y:7.4}, {x:181, y:8.7}, {x:182, y:7.6}, {x:183, y:8.8}], [{x:184, y:7.8}, {x:185, y:7.7}, {x:186, y:7.6}, {x:187, y:7.3}, {x:188, y:7.2}, {x:189, y:7.5}, {x:190, y:7.4}, {x:191, y:7.3}, {x:192, y:8.3}, {x:193, y:6.7}, {x:194, y:5.7}, {x:195, y:7.8}, {x:196, y:8.3}, {x:197, y:5.9}, {x:198, y:8.4}, {x:199, y:9.5}, {x:200, y:8.2}, {x:201, y:8.0}, {x:202, y:7.7}, {x:203, y:8.5}, {x:204, y:8.3}, {x:205, y:8.9}, {x:206, y:6.7}, {x:207, y:5.5}]];
var himym_names = {S1: ['Pilot', 'Purple Giraffe', 'The Sweet Taste of Liberty', 'Return of the Shirt', 'Okay Awesome', 'The Slutty Pumpkin', 'Matchmaker', 'The Duel', 'Belly Full of Turkey', 'The Pineapple Incident', 'The Limo', 'The Wedding', 'Drumroll, Please', 'Zip, Zip, Zip', 'Game Night', 'Cupcake', 'Life Among the Gorillas', 'Nothing Good Happens After 2 AM', 'Mary the Paralegal', 'Best Prom Ever', 'Milk', 'Come On'], S2: ['Where Were We?', 'The Scorpion and the Toad', 'Brunch', 'Ted Mosby, Architect', "WorldS Greatest Couple", 'Aldrin Justice', 'Swarley', 'Atlantic City', 'Slap Bet', 'Single Stamina', 'How Lily Stole Christmas', 'First Time in New York', 'Columns', 'Monday Night Football', 'Lucky Penny', 'Stuff', 'Arrivederci, Fiero', 'Moving Day', 'Bachelor Party', 'Showdown', 'Something Borrowed', 'Something Blue'], S3: ['Wait for It', "We're Not from Here", 'Third Wheel', 'Little Boys', 'How I Met Everyone Else', "I'm Not That Guy", 'Dowisetrepla', 'Spoiler Alert', 'Slapsgiving', 'The Yips', 'The Platinum Rule', 'No Tomorrow', 'Ten Sessions', 'The Bracket', 'The Chain of Screaming', 'Sandcastles in the Sand', 'The Goat', 'Rebound Bro', 'Everything Must Go', 'Miracles'], S4: ['Do I Know You?', 'The Best Burger in New York', 'I Heart NJ', 'Intervention', 'Shelter Island', 'Happily Ever After', "Not a FatherS Day", 'Woooo!', 'The Naked Man', 'The Fight', 'Little Minnesota', 'Benefits', 'Three Days of Snow', 'The Possimpible', 'The Stinsons', 'Sorry, Bro', 'The Front Porch', 'Old King Clancy', 'Murtaugh', 'Mosbius Designs', 'The Three Days Rule', 'Right Place Right Time', 'As Fast as She Can', 'The Leap'], S5: ['Definitions', 'Double Date', 'Robin 101', 'The Sexless Innkeeper', 'Duel Citizenship', 'Bagpipes', 'The Rough Patch', 'The Playbook', 'Slapsgiving 2: Revenge of the Slap', 'The Window', 'Last Cigarette Ever', 'Girls vs. Suits', 'Jenkins', 'Perfect Week', 'Rabbit or Duck', 'Hooked', 'Of Course', 'Say Cheese', 'Zoo or False', 'Home Wreckers', 'Twin Beds', 'Robots vs. Wrestlers', 'The Wedding Bride', 'Doppelgangers'], S6: ['Big Days', 'Cleaning House', 'Unfinished', 'Subway Wars', 'Architect of Destruction', 'Baby Talk', 'Canning Randy', 'Natural History', 'Glitter', 'Blitzgiving', 'The Mermaid Theory', 'False Positive', 'Bad News', 'Last Words', 'Oh Honey', 'Desperation Day', 'Garbage Island', 'A Change of Heart', 'Legendaddy', 'The Exploding Meatball Sub', 'Hopeless', 'The Perfect Cocktail', 'Landmarks', 'Challenge Accepted'], S7: ['The Best Man', 'The Naked Truth', 'Ducky Tie', 'The Stinson Missile Crisis', 'Field Trip', 'Mystery vs. History', 'Noretta', 'The Slutty Pumpkin Returns', 'Disaster Averted', 'Tick Tick Tick', 'The Rebound Girl', 'Symphony of Illumination', 'Tailgate', '46 Minutes', 'The Burning Beekeeper', 'The Drunk Train', 'No Pressure', 'Karma', 'The Broath', 'Trilogy Time', "Now We're Even", 'Good Crazy', "The MagicianS Code: Part 1", "The Magician's Code: Part 2"], S8: ['Farhampton', 'The Pre-Nup', 'Nannies', 'Who Wants to Be a Godparent', 'The Autumn of Breakups', 'Splitsville', 'The Stamp Tramp', 'Twelve Horny Women', 'Lobster Crawl', 'The Over-Correction', 'The Final Page: Part One', 'The Final Page: Part Two', 'Band or DJ?', 'Ring Up!', 'P.S. I Love You', 'Bad Crazy', 'The Ashtray', "Weekend at BarneyS", 'The Fortress', 'The Time Travelers', 'Romeward Bound', 'The Bro Mitzvah', 'Something Old', 'Something New'], S9: ['The Locket', 'Coming Back', 'Last Time in New York', 'The Broken Code', 'The Poker Game', 'Knight Vision', 'No Questions Asked', 'The Lighthouse', 'Platonish', 'Mom and Dad', 'Bedtime Stories', 'The Rehearsal Dinner', 'Bass Player Wanted', 'Slapsgiving 3: Slappointment in Slapmarra', 'Unpause', 'How Your Mother Met Me', 'Sunrise', 'Rally', 'Vesuvius', 'Daisy', 'Gary Blauman', 'The End of the Aisle', 'Last Forever: Part One', 'Last Forever: Part Two']};

Highcharts.chart('line-got', {
  chart: {
    height:250,
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
    labels: {
      enabled: false,
      overflow: 'justify'
    },
  },
  yAxis: {
    max: 10,
    min: 2,
    title: {
      text: '',
    },
    minorGridLineWidth: 1,
    gridLineWidth: 1,
    alternateGridColor: null,
  },
  tooltip: {
    formatter: function () {
      return `<b> ${this.series.name}E${this.point.index+1}: ${episodeNames[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
      },
     style: {
        width:320,
     }
  },
  plotOptions: {
    line: {
        marker: {
            enabled: false,
            symbol: "circle",
        },
      color: "#346888",
      lineWidth: 4,
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
    height:250,
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
    labels: {
      enabled: false,
      overflow: 'justify'
    },
  },
  yAxis: {
    max: 10,
    min: 2,
    title: {
      text: '',
    },
    minorGridLineWidth: 1,
    gridLineWidth: 1,
    alternateGridColor: null,
  },
  tooltip: {
    formatter: function () {
      return `<b> ${this.series.name}E${this.point.index+1}: ${himym_names[this.series.name][this.point.index]} </b><br>Rating: ${this.point.y}`
      },
     style: {
        width:320,
     }
  },
  plotOptions: {
    line: {
        marker: {
            enabled: false,
            symbol: "circle",
        },
      color: "#346888",
      lineWidth: 3,
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
  // {
  //   name: 'Friends',
  //   data: [8.3, 8.1, 8.2, 8.1, 8.5, 8.1, 9.0, 8.1, 8.2, 8.1, 8.2, 8.2, 8.7, 8.3, 8.2, 8.2, 8.5, 8.8, 8.1, 7.9, 7.9, 8.3, 8.7, 8.9, 8.5, 8.2, 8.4, 8.0, 8.3, 8.6, 9.0, 8.5, 8.0, 8.0, 8.1, 8.6, 8.8, 9.4, 8.9, 8.6, 8.3, 8.5, 8.6, 8.2, 8.2, 9.0, 8.1, 8.2, 8.4, 9.0, 8.1, 8.1, 8.1, 9.1, 8.3, 8.4, 9.0, 8.1, 8.6, 8.2, 8.2, 7.9, 8.6, 9.1, 8.3, 8.4, 8.2, 8.1, 8.7, 8.3, 8.1, 8.1, 8.8, 9.1, 8.1, 8.5, 8.2, 8.4, 8.5, 8.7, 9.1, 7.9, 8.1, 8.5, 9.5, 8.2, 8.2, 8.5, 8.2, 8.6, 8.3, 8.7, 8.5, 7.2, 8.5, 8.7, 9.2, 8.9, 9.0, 8.8, 8.3, 8.8, 8.1, 8.4, 9.2, 9.1, 8.2, 9.1, 8.3, 8.1, 9.7, 8.5, 8.6, 8.5, 8.0, 8.7, 8.3, 8.5, 8.3, 8.8, 9.1, 8.7, 8.2, 8.2, 8.5, 8.2, 8.5, 8.4, 8.5, 9.2, 8.6, 8.1, 8.1, 8.2, 8.6, 8.5, 8.5, 9.1, 8.3, 8.3, 7.4, 8.6, 9.0, 8.6, 8.8, 9.3, 8.4, 8.3, 8.1, 8.1, 8.1, 8.9, 8.5, 8.2, 8.1, 8.5, 8.6, 8.7, 8.4, 8.6, 8.4, 8.7, 8.4, 8.4, 8.7, 8.4, 7.5, 8.4, 8.9, 9.2, 8.7, 9.1, 8.7, 9.3, 8.1, 8.5, 7.9, 8.8, 9.3, 8.1, 8.0, 8.6, 8.6, 8.2, 8.4, 8.3, 8.1, 8.2, 7.5, 8.2, 8.2, 8.3, 8.8, 8.9, 8.6, 8.6, 8.2, 8.2, 8.5, 8.4, 8.7, 8.8, 8.2, 7.5, 8.0, 8.0, 8.2, 8.2, 8.3, 8.2, 8.5, 8.6, 8.1, 8.3, 8.2, 7.8, 8.5, 8.7]
  // },  