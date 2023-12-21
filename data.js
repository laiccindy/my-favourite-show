const showInfo = {
  name: 'The Gilded Age',
  creator:'Julian Fellowes',
  genre: ['Drama', 'History'],
  synopsis: "The series follows the conflicts surrounding the new money Russell family and their old money neighbors, the van Rhijn family, in 1880s New York City high society. Old New York the 1880's. Old Money and New Money are the opposites that attract to create a Post Civil War Era New York society. The Who's Who of society is carefully orchestrated by the Old Money folks that can't help but be fascinated and seduced by the nouveau riche folk. The lives of the characters are also merged with people from all walks of life.",
  network: 'HBO',
  premiereDate: '24 January 2022',
  executiveProducers: ['Julian Fellowes', 'Gareth Neame', 'Michael Enger', 'David Crockett', 'Salli Richardson-Whitfield'],
  rating: '8.0'
};

const castObject = [
  {
    id: 1,
    actor: 'Ben Ahlers',
    character: 'Jack Treacher',
    photo: "/cast-photos/1-ben-ahlers.jpg"
  },
  {
    id: 2,
    actor: 'Debra Monk',
    character: 'Armstrong',
    photo: "/cast-photos/2-debra-monk.jpg"
  },
  {
    id: 3,
    actor: 'Kelli OHara',
    character: 'Aurora Fane',
    photo: "/cast-photos/3-kelli-ohara.jpg"
  },
  {
    id: 4,
    actor: 'Taylor Richardson',
    character: 'Bridget',
    photo: "/cast-photos/4-taylor-richardson.jpg"
  },
  {
    id: 5, 
    actor: 'Carrie Coon',
    character: 'Bertha Russell',
    photo: "/cast-photos/5-carrie-coon.jpg"
  },
  {
    id: 6,
    actor: 'Morgan Spector',
    character: 'George Russell',
    photo: "/cast-photos/6-morgan-spector.jpg"
  },
  {
    id: 7,
    actor: 'Louisa Jacobson',
    character: 'Marian Brook',
    photo: "/cast-photos/7-louisa-jacobson.jpg"
  },
  {
    id: 8,
    actor: 'Celia Keenan Bolger',
    character: 'Mrs. Bruce',
    photo: "/cast-photos/8-celia-keenan-bolger.jpg"
  },
  {
    id: 9,
    actor: 'Kristine Nielsen',
    character: 'Mrs. Bauer',
    photo: "/cast-photos/9-kristine-nielsen.jpg"
  },
  {
    id: 10,
    actor: 'Patrick Page',
    character: 'Richard Clay',
    photo: "/cast-photos/10-patrick-page.jpg"
  },
  {
    id: 11,
    actor: 'Douglas Sills',
    character: 'Monsieur Baudin',
    photo: "/cast-photos/11-douglas-sills.jpg"
  },
  {
    id: 12,
    actor: 'Michael Cerveris',
    character: 'Watson',
    photo: "/cast-photos/12-michael-cerveris.jpg"
  },
  {
    id: 13,
    actor: 'Christine Baranski',
    character: 'Agnes Van Rhijn',
    photo: "/cast-photos/13-christine-baranski.jpg"
  },
  {
    id: 14,
    actor: 'Kelley Curran',
    character: 'Turner',
    photo: "/cast-photos/14-kelley-curran.jpg"
  },
  {
    id: 15,
    actor: 'Ward Horton',
    character: 'Charles Fane',
    photo: "/cast-photos/15-ward-horton.jpg"
  },
  {
    id: 16,
    actor: 'Donna Murphy',
    character: 'Mrs. Astor',
    photo: "/cast-photos/16-donna-murphy.jpg"
  },
  {
    id: 17,
    actor: 'Erin Wilhelmi',
    character: 'Adelheid Weber',
    photo: "/cast-photos/17-erin-wilhelmi.jpg"
  },
  {
    id: 18,
    actor: 'Audra McDonald',
    character: 'Dorothy Scott',
    photo: "/cast-photos/18-audra-mcdonald.jpg"
  },
  {
    id: 19,
    actor: 'Sullivan Jones',
    character: 'T. Thomas Fortune',
    photo: "/cast-photos/19-sullivan-jones.jpg"
  },
  {
    id: 20,
    actor: 'Nathan Lane',
    character: 'Ward McAllister',
    photo: "/cast-photos/20-nathan-lane.jpg"
  },
  {
    id: 21,
    actor: 'Thomas Cocquerel',
    character: 'Tom Raikes',
    photo: "/cast-photos/21-thomas-cocquerel.jpg"
  },
  {
    id: 22,
    actor: 'Claybourne Elder',
    character: 'John Adams',
    photo: "/cast-photos/22-claybourne-elder.jpg"
  },
  {
    id: 23,
    actor: 'Robert Sean Leonard',
    character: 'Reverend Matthew Forte',
    photo: "/cast-photos/23-robert-sean-leonard.jpg"
  },
  {
    id: 24,
    actor: 'David Furr',
    character: 'Dashiell Montgomery',
    photo: "/cast-photos/24-david-furr.jpg"
  },
  {
    id: 25,
    actor: 'Amy Forsyth',
    character: 'Caroline Astor',
    photo: "/cast-photos/25-amy-forsyth.jpg"
  },
  {
    id: 26,
    actor: 'Ashlie Atkinson',
    character: 'Mamie Fish',
    photo: "/cast-photos/26-ashlie-atkinson.jpg"
  },
  {
    id: 27,
    actor: 'John Douglas Thompson',
    character: 'Arthur Scott',
    photo: "/cast-photos/27-john-douglas.jpg"
  },
  {
    id: 28,
    actor: 'Jeanne Tripplehorn',
    character: 'Sylvia Chamberlain',
    photo: "/cast-photos/28-jeanne-tripplehorn.jpg"
  },
  {
    id: 29,
    actor: 'Katie Finneran',
    character: 'Anne Morris',
    photo: "/cast-photos/29-katie-finneran.jpg"
  },
  {
    id: 30,
    actor: 'Rebecca Haden',
    character: 'Flora McNeil',
    photo: "/cast-photos/30-rebecca-haden.jpg"
  },
  {
    id: 31,
    actor: 'Nicole Brydon Bloom',
    character: 'Maude Beaton',
    photo: "/cast-photos/31-nicole-brydon.jpg"
  },
  {
    id: 32,
    actor: 'Matilda Lawler',
    character: 'Frances Montgomery',
    photo: "/cast-photos/32-matilda-lawler.jpg"
  },
  {
    id: 33,
    actor: 'Zuzanna Szadkowski',
    character: 'Mabel Ainsley',
    photo: "/cast-photos/33-zuzanna-szadkowski.jpg"
  },
  {
    id: 34,
    actor: 'Cynthia Nixon',
    character: 'Ada Brook',
    photo: "/cast-photos/34-cynthia-nixon.jpg"
  },
  {
    id: 35,
    actor: 'Christopher Denham',
    character: 'Robert McNeil',
    photo: "/cast-photos/35-christopher-denham.jpg"
  },
  {
    id: 36,
    actor: 'Blake Ritson',
    character: 'Oscar Van Rhijn',
    photo: "/cast-photos/36-blake-ritson.jpg"
  },
  {
    id: 37,
    actor: 'Laura Benanti',
    character: 'Susan Blane',
    photo: "/cast-photos/37-laura-benanti.jpg"
  },
  {
    id: 38,
    actor: 'Ben Lamb',
    character: 'Duke of Buckingham',
    photo: "/cast-photos/38-ben-lamb.jpg"
  },
  {
    id: 39,
    actor: 'Dakin Matthews',
    character: 'Joshua Winterton',
    photo: "/cast-photos/39-dakin-matthews.jpg"
  },
  {
    id: 40,
    actor: 'Linda Emond',
    character: 'Clara Barton',
    photo: "/cast-photos/40-linda-emond.jpg"
  },
  {
    id: 41,
    actor: 'John Sanders',
    character: 'Stanford White',
    photo: "/cast-photos/41-john-sanders.jpg"
  },
  {
    id: 42,
    actor: 'Darren Goldstein',
    character: 'Henderson',
    photo: "/cast-photos/42-darren-goldstein.jpg"
  },
  {
    id: 43,
    actor: 'Denee Benton',
    character: 'Peggy Scott',
    photo: "/cast-photos/43-denee-benton.jpg"
  },
  {
    id: 44,
    actor: 'Harry Richardson',
    character: 'Larry Russell',
    photo: "/cast-photos/44-harry-richardson.jpg"
  },
  {
    id: 45,
    actor: 'Jack Gilpin',
    character: 'Church',
    photo: "/cast-photos/45-jack-gilpin.jpg"
  },
  {
    id: 46,
    actor: 'Simon Jones',
    character: 'Bannister',
    photo: "/cast-photos/46-simon-jones.jpg"
  },
  {
    id: 47,
    actor: 'Taissa Farmiga',
    character: 'Gladys Russell',
    photo: "/cast-photos/47-taissa-farmiga.jpg"
  }
]

const seasonOne = [
  {
    episodeNumber: 1,
    episodeTitle: "Never the New",
    airDate: "24 January 2022",
    synopsis: "In 1882, Marian arrives at the home of her 'old money' aunts Agnes and Ada, whose new neighbors vie to break into New York high society.",
    runTime: "1 hr. 21 min.",
    director: 'Michael Engler',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 36, 21, 46, 45, 34, 13, 18, 28, 1, 22, 29, 8, 9, 3, 41, 4],
    rating: 7.9
  },
  {
    episodeNumber: 2,
    episodeTitle: "Money Isn't Everything",
    airDate: "31  January 2022",
    synopsis: "Marian receives a visit from Tom Raikes, whose legal advice Peggy seeks; the Russells take center stage at a charity bazaar.",
    runTime: "46 min.",
    director:'Michael Engler',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 36, 21, 46, 45, 34, 13, 28, 1, 14, 29, 8, 2, 9, 3, 4, 11],
    rating: 8.0
  },
  {
    episodeNumber: 3,
    episodeTitle: " Face the Music",
    airDate: "07 February 2022",
    synopsis: "An unfortunate development finds George's new rail station under threat; Marian continues to see Mr. Raikes despite Agnes' warnings.",
    runTime: "57 min.",
    director: 'Salli Richardson-Whitfield',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 36, 21, 46, 45, 34, 13, 1, 12, 14, 22, 40, 29, 15, 8, 2, 16, 9, 3, 10, 4, 33, 27],
    rating: 8.3
  },
  {
    episodeNumber: 4,
    episodeTitle: "A Long Ladder",
    airDate: "14 February 2022",
    synopsis: "In the aftermath of a tragedy, George agrees to help Bertha; a visit has a lasting impact on the staff of Russell house.",
    runTime: "56 min.",
    director: 'Salli Richardson-Whitfield',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 36, 44, 21, 46, 45, 34, 13, 18, 28, 1, 12, 14, 29, 30, 15, 19, 8, 2, 9, 3, 10, 4, 41, 27, 17, 11],
    rating: 8.0
  },
  {
    episodeNumber: 5,
    episodeTitle: "Charity Has Two Functions",
    airDate: "22 February 2022",
    synopsis:"Bertha, Marian, Aurora, and Peggy make an overnight trip to see Clara Barton speak; Gladys' desired beau is invited to dinner.",
    director: 'Salli Richardson-Whitfield',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 36, 44, 21, 46, 45, 34, 13, 18, 1, 12, 14, 22, 40, 29, 15, 8, 2, 9, 3, 10, 4, 33, 11, 17, 20],
    rating: 7.9
  },
  {
    episodeNumber: 6,
    episodeTitle: "Heads Have Rolled for Less",
    airDate: "28 February 2022",
    synopsis: "As George fights to protect his public image, Agnes' status quo is disrupted; Armstrong intensifies her campaign against Peggy.",
    director: 'Salli Richardson-Whitfield',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 36, 44, 21, 46, 45, 34, 13, 18, 28, 1, 26, 14, 40, 29, 25, 15, 19, 8, 2, 9, 3, 10, 4, 11, 33, 20],
    rating: 8.2
  },
  {
    episodeNumber: 7,
    episodeTitle: "Irresistible Change",
    airDate: "07 March 2022",
    synopsis: "As Edison's illuminating electricity demonstration sparks conversation, George prepares for a legal battle, and Bannister plots revenge.",
    director:'Michael Engler',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 36, 44, 21, 46, 45, 34, 13, 28, 1, 12, 14, 22, 25, 15, 19, 8, 2, 9, 3, 10, 4, 41, 11, 20, 17],
    rating: 8.0
  },
  {
    episodeNumber: 8,
    episodeTitle: "Tucked up in Newport",
    airDate: "14 March 2022",
    synopsis: "Peggy reveals the truth about her past; George's day in court arrives; Marian considers her romantic future.",
    director:'Michael Engler',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 36, 44, 21, 46, 45, 34, 13, 18, 1, 26, 22, 12, 25, 30, 8, 2, 16, 9, 3, 10, 11, 17, 4, 33, 20],
    rating: 8.1
  },
  {
    episodeNumber: 9,
    episodeTitle: "Let the Tournament Begin",
    airDate: "21 March 2022",
    synopsis: "Marian's grand plan is threatened; Bertha and Mrs. Astor lock horns over Gladys' debut; Peggy is stunned.",
    director:'Michael Engler',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 36, 44, 21, 45, 34, 13, 18, 28, 1, 12, 22, 25, 30, 15, 8, 2, 16, 3, 10, 4, 11, 27, 17, 20],
    rating: 8.7
  }
]

const seasonTwo = [
  {
    episodeNumber: 1,
    episodeTitle: "You Don't Even Like Opera",
    airDate: "29 October 2023",
    synopsis: "Agnes shares news of her nephew Dashiell's imminent arrival in New York; Bertha decides to back the new Metropolitan Opera House.",
    director:'Michael Engler',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 36, 46, 45, 1, 12, 8, 2, 16, 9, 3, 10, 4, 11, 27, 17, 34, 13, 18, 23, 26, 35, 36, 25, 24, 30, 15, 32, 20],
    rating: 8.2
  },
  {
    episodeNumber: 2,
    episodeTitle: "Some Sort of Trck",
    airDate: "05 Novemer2023",
    synopsis: "George delivers a final decision to Oscar; Peggy is welcomed back into the Van Rhijn household by all but one; Marian meets a new match.",
    director:'Deborah Kampmeier',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 36, 46, 45, 1, 12, 14, 2, 19, 9, 3, 10, 4, 27, 17, 34, 13, 23, 37, 31, 35, 24, 15, 32, 39, 20],
    rating: 8.2
  },
  {
    episodeNumber: 3,
    episodeTitle: "Head to Head",
    airDate: "12 November 2023",
    synopsis: "A surprise guest attends Bertha's fundraiser; Ada organizes a luncheon for Mr. Forte; Peggy presses Mr. Fortune about Tuskegee.",
    director:'Michael Engler',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 36, 46, 45, 1, 12, 14, 19, 2, 8, 16, 9, 3, 10, 4, 11, 17, 34, 13, 18, 23, 37, 31, 26, 35, 22, 24, 42, 20],
    rating: 7.9
  },
  {
    episodeNumber: 4,
    episodeTitle: "His Grace the Duke",
    airDate: "19 November 2023",
    synopsis: "Bertha angles for position with a visiting Duke; with Marian's help, Ada continues to see Mr. Forte; Peggy travels to Alabama.",
    director:'Deborah Kampmeier',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 36, 46, 45, 1, 12, 14, 19, 2, 8, 16, 9, 3, 10, 4, 11, 34, 13, 23, 37, 31, 35, 24, 38, 15, 32, 39],
    rating: 8.2
  },
  {
    episodeNumber: 5,
    episodeTitle: "Close Enough to Touch",
    airDate: "26 November 2023",
    synopsis: "After sharing her news, Ada questions moving ahead without Agnes' support; Peggy experiences the dangers of the South.",
    director:'Michael Engler',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 36, 46, 45, 1, 12, 14, 19, 8, 2, 9, 3, 10, 4, 11, 17, 34, 13, 23, 31, 24, 26, 38, 39, 32, 15, 20],
    rating: 8.6
  },
  {
    episodeNumber: 6,
    episodeTitle: "Warning Shots",
    airDate: "03 December 2023",
    synopsis: "As George heads to Pittsburgh to deal with the potential strike, Bertha learns that the Duke will return for the Metropolitan Opera's opening night; Bannister tries to retrieve an incriminating letter from the Russell house.",
    director:'Crystle Roberson',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 36, 46, 45, 1, 14, 19, 8, 2, 16, 9, 3, 11, 4, 10, 27, 17, 34, 13, 18, 23, 31, 24, 42, 15, 32, 20],
    rating: 8.4
  },
  {
    episodeNumber: 7,
    episodeTitle: "Wonders Never Cease",
    airDate: "10 December 2023",
    synopsis: "As New York celebrates a historic event, Bertha reconsiders her loyalty to the Met while Marian has doubts about her future.",
    director:'Michael Engler',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 6, 46, 45, 1, 14, 19, 8, 2, 16, 9, 3, 10, 4, 11, 27, 34, 13, 18, 23, 26, 22, 24, 42, 38, 30, 15],
    rating: 9.0
  },
  {
    episodeNumber: 8,
    episodeTitle: "In Terms of Winning and Losing",
    airDate: "17 December 2023",
    synopsis: "The staff questions its future at Rhijn's house, just as Peggy questions her future at The New York Globe; Marian confesses her true feelings to Dashiell; the opera war reaches its climax.",
    director:'Crystle Roberson',
    writer: 'Julian Fellowes',
    castID: [5, 6, 7, 43, 47, 44, 6, 46, 45, 1, 14, 19, 8, 2, 16, 9, 3, 10, 4, 11, 27, 34, 13, 18, 23, 26, 22, 24, 42, 38, 30, 15],
    rating:9.5
  }
]

module.exports = {
  showInfo,
  castObject,
  seasonOne,
  seasonTwo
}