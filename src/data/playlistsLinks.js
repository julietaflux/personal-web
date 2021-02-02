const playlists = [
  {
    title: "Koirat Eivät Käytä Housuja",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/6by3fNYSlqCrRVU0F5O9As",
    publicUrl:
      "https://open.spotify.com/playlist/6by3fNYSlqCrRVU0F5O9As?si=lt5uBtkeQrqYsbkhGB602A",
    image: "ddwp1.png",
    description:
      "Years after the death of his wife, Juha struggles with sadness and regret. But he will find comfort in Mona, a lover who is as eager to punish Juha as he wishes to be punished. Everything ends up getting out of control, since no one knows how far they are willing to go.",
    tags: ["various artists", "movie inspired", "soundtrack"],
    artists: "Sin Cos Tan, Mr. Flagio, Petter & The Magician and more.",
  },
  {
    title: "Climax",
    hue: 20,
    url: "https://open.spotify.com/embed/playlist/2AJb4MlPMtUOENuiYDR7Gn",
    publicUrl:
      "https://open.spotify.com/playlist/2AJb4MlPMtUOENuiYDR7Gn?si=1SxbgeW2RsSk26jPOSkI1g",
    image: "climax1.png",
    description:
      "Climax, Gaspar Noé's first French-language film since Irréversible, a woozy, pyschological-horror story about a dance troupe who drink sangria spiked with LSD. The film premiered at Cannes, and should receive a release in the US later in 2018.",
    tags: ["various artists", "movie inspired", "soundtrack"],
    artists:
      "Gary Numan, Cerrone, Patrick Hernandez, M/A/A/R/S, Lil' Louis and more.",
  },
  {
    title: "Fucking Vol. I",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/1g04SeS25BkXg5PK6bYXfk",
    publicUrl:
      "https://open.spotify.com/playlist/1g04SeS25BkXg5PK6bYXfk?si=dyG5ecMXTOS28LR9Z8SaWg",
    image: `f11.png`,
    description: "No description available yet.",
    tags: ["personal selection", "mood"],
    artists:
      "The Wallflowers, 10cc, The Cure, Interpol, Eric Clapton and more.",
  },
  {
    title: "Fucking Vol. II",
    hue: 20,
    url: "https://open.spotify.com/embed/playlist/2f7hHTbvT6dIdul1xySP0O",
    publicUrl:
      "https://open.spotify.com/playlist/2f7hHTbvT6dIdul1xySP0O?si=qs7w3F_NRaaC7CIZ4NJDsw",
    image: "f21.png",
    description: "No description available yet.",
    tags: ["personal selection", "mood"],
    artists:
      "Hozier, Blonder, alt-J, Royal Blood, Seinabo Sey, Interpol and more.",
  },
  {
    title: "Disco And Sexuality Vol. I",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/1zyjHx7G88qpY4BE7ue1Bh",
    publicUrl:
      "https://open.spotify.com/playlist/1zyjHx7G88qpY4BE7ue1Bh?si=8hYcNwu-S9iPiUEsQkBbXw",
    image: "noart.png",
    description: "No description available yet.",
    tags: ["disco", "historical", "various artists"],
    artists:
      "Beete Midler, The Equals, Bill Withers, Billy Sha-Rae, Marvin Gaye and more.",
  },
  {
    title: "Disco And Sexuality Vol. II",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/1EJW0CyF3jRMoNpn6Egfw0",
    publicUrl:
      "https://open.spotify.com/playlist/1EJW0CyF3jRMoNpn6Egfw0?si=pnrv38UTRaqyhaxsjPNeBA",
    image: "noart.png",
    description: "No description available yet.",
    tags: ["disco", "historical", "various artists"],
    artists: "Loose Joints, Donna Summer, Sylvester, NYC Peech Boys and more.",
  },
  {
    title: "Disco And Sexuality Vol. III",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/6427piCsVDQW9l2oHjGUkf",
    publicUrl:
      "https://open.spotify.com/playlist/6427piCsVDQW9l2oHjGUkf?si=FCNtChlMQYyDUe8F62XQPQ",
    image: "noart.png",
    description: "No description available yet.",
    tags: ["disco", "historical", "various artists"],
    artists: "Dan Hartman, Miquel Brown, Sandi Sheldon, Sylvester and more.",
  },
  {
    title: "Disco Foundations Vol. I",
    hue: 10,
    url: "https://open.spotify.com/embed/playlist/1CLo5s8knReFSppDRzUoLr",
    publicUrl: "",
    image: "disco.png",
    description:
      "From the first jukeboxes, 3-level basements, sedative clubs, hotels and ex-churches almost exclusively for gays, blacks and Latinos, the synthetic and ready-made music, the euro-trash, the bump and orgies immersed in percussive psychedelic, the dazzling brilliance of exotic fantasy that also leaded the way of Soul, between nights full of poppers, quaalude and seconal, utopia and hell, join me to witness the two-headed beast of groove rising.",
    tags: ["disco", "historical", "various artists"],
    artists:
      "Nat Gonella, Louis Armstrong, Erroll Garner, Charlie Parker And His Orchestra and more. ",
  },
  {
    title: "Disco Foundations Vol. II",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/5BwqpO0NVI9WsLJwltRu2v",
    publicUrl: "",
    image: "disco.png",
    description:
      "Come to the loft and have some fun, tension between gay/hetero, black/black have never been so insidious. A líbrenla experiment of glamorous decadence is about to dance us to the edge. Lose yourself to the penetrant, slow groove and join the nature rhythm following the slip cueing masters making the track. ",
    tags: ["disco", "historical", "various artists"],
    artists: "War, Mandré, Exuma, Mickey Hart, Eddie Kendricks and more.",
  },
  {
    title: "Disco Foundations Vol. III",
    hue: 40,
    url: "https://open.spotify.com/embed/playlist/2qQBht8sHyHgGm2Lyr4at4",
    publicUrl: "",
    image: "disco.png",
    description:
      "The art of mixing, the 12’’ inches singles, white versions of the black songs, did you know it took eighty hours to record the first mix tape of 45’? sStretched grooves were fixed with the only purpose of keep people on the dance floor all nite long. ",
    tags: ["disco", "historical", "various artists"],
    artists: "Ann Peebles, Syl Johnson, The Detroit Emeralds and more.",
  },
  {
    title: "Disco Foundations Vol. IV",
    hue: -40,
    url: "https://open.spotify.com/embed/playlist/6Q1kqM30KWrArmvVG5YKS4",
    publicUrl: "",
    image: "disco.png",
    description:
      "From ghost cities, claustrophobic discotheque rooms, the northern soul remarks the start of the next 40 years of European music and pop scene’s golden mafia. Fast and refreshing chords were now hiding the saddest lyrics with full or trebles guitars, reggae chanks, and Motown like rhythm.",
    tags: ["disco", "historical", "various artists"],
    artists:
      "Brenda Holloway, Mose Allison, Jimmy Smith, James Brown and more.",
  },
  {
    title: "Classics Introduction",
    hue: 10,
    url: "https://open.spotify.com/embed/playlist/171hWInefgudTXZMMZO8La",
    publicUrl:
      "https://open.spotify.com/playlist/171hWInefgudTXZMMZO8La?si=DtXT2pw6SruUfTDoFwZqOA",
    image: "ci.png",
    description: "No description available yet.",
    tags: ["classical", "various artists"],
    artists:
      "Guillaume de Machaut, Giulio Caccini, Claude Debussy, Richard Strauss and more.",
  },
  {
    title: "Beethoven & Rachmaninov",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/7FabrukRR6fjnoiSzwSIoc",
    publicUrl: "",
    image: "bar1.png",
    description:
      "Beethoven's piano is a true orchestra, with its extreme dynamics and textures, humor and darkness, unconcern and tension. Rachmaninov's piano music takes full advantage of the large and opulent sounds of the modern piano and contains rich emotional overtones.",
    tags: ["classical", "various artists"],
    artists: "Ludwing van Beethoven and Sergei Rachmaninoff.",
  },
  {
    title: "Sibelius & Bartók",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/41oO7FexR6Op6qhcSe2I83",
    publicUrl: "",
    image: "sab1.png",
    description: "No description available yet.",
    tags: ["classical", "various artists"],
    artists: "Jean Sibelius and Béla Bartók.",
  },
  {
    title: "Alceste: Fuck Rococó",
    hue: 20,
    url: "https://open.spotify.com/embed/playlist/65KAV0aVjdxNp3AZ4CIuvV",
    publicUrl:
      "https://open.spotify.com/playlist/65KAV0aVjdxNp3AZ4CIuvV?si=KLb6Wue3S-uXkZnK7AeAvg",
    image: "a1.png",
    description:
      "In the dedication of his opera Alceste (1769), Gluck advocated 'noble simplicity', condemning 'superfluous ornament' and saying that he had avoided 'bragging about difficulties at the cost of clarity.'",
    tags: ["classical", "various artists"],
    artists: "Christoph Willibald Gluck.",
  },
  {
    title: "Dying",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/48EZeHtofEB7yn9BU9PTdR",
    publicUrl: "",
    image: "dy1.png",
    description: "No description available yet.",
    tags: ["personal selection", "mood"],
    artists: "Modest Mouse, Aquilo, Covenant, LCD Soundsystem and more.",
  },
  {
    title: "Groove",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/7AxOEM5DBBwhRb1wL5WdOo",
    publicUrl: "",
    image: "g1.png",
    description: "No description available yet.",
    tags: ["personal selection", "mood"],
    artists: "Aphex Twin, Talk Talk, Leonard Cohen, Toe, R.E.M and more.",
  },
  {
    title: "Chilling",
    hue: 20,
    url: "https://open.spotify.com/embed/playlist/6iJOVGsuubavqZ15xixo59",
    publicUrl: "",
    image: "ch1.png",
    description: "No description available yet.",
    tags: ["personal selection", "mood"],
    artists: "Interpol, David Bowie, THe Jam, Deerhunter, Pulp and more.",
  },
  {
    title: "Power",
    hue: 20,
    url: "https://open.spotify.com/embed/playlist/4ieuodA30gN92TLqSL0qGf",
    publicUrl: "",
    image: "power1.png",
    description: "No description available yet.",
    tags: ["personal selection", "mood"],
    artists: "Volveat, Kanye West, Arctic Monkeys, The Vines, Weezer and more.",
  },
  {
    title: "Pogo, etc",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/4JgtzHV1nWJbvNKsV8yODR",
    publicUrl: "",
    image: "pogo1.png",
    description: "No description available yet.",
    tags: ["personal selection", "mood"],
    artists:
      "MInor Threat, The Cramps, Descendents, The Dead Weather and more.",
  },
  {
    title: "Warm Up",
    hue: 90,
    url: "https://open.spotify.com/embed/playlist/5Ucvfhxkd85q8wXTZVjOsH",
    publicUrl:
      "https://open.spotify.com/playlist/5Ucvfhxkd85q8wXTZVjOsH?si=vf-C5n75SiawkuKLMbsnSw",
    image: "wu1.png",
    description: "No description available yet.",
    tags: ["personal selection", "mood"],
    artists:
      "The Smashing Pumpkins, Silverchair, Soundgarden, Alice In Chains and more.",
  },
];

export default playlists;
