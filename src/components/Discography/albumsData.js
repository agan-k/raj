import pistils from '../../assets/albums/pistils.jpg'
import laniakea from '../../assets/albums/laniakea.jpg'
import wee3c from '../../assets/albums/wee3c.jpg'
import joechindamo from '../../assets/albums/joechindamo.jpg'
import sikame from '../../assets/albums/sikame.jpg'
import ragstretch from '../../assets/albums/ragstretch.jpg'
import benbryden from '../../assets/albums/benbryden.jpg'
import pauljones from '../../assets/albums/pauljones.jpg'
import cyrille from '../../assets/albums/cyrille.jpg'
import qmorrow from '../../assets/albums/qmorrow.jpeg'
import peterknight from '../../assets/albums/peterknight.jpg'
import angeladavis from '../../assets/albums/angeladavis.jpg'
import rotemsivan from '../../assets/albums/rotemsivan.jpg'
import cyrille1 from '../../assets/albums/cyrille1.jpg'
import michu from '../../assets/albums/michu.jpg'
import emmagilmartin from '../../assets/albums/emmagilmartin.jpg'
import joechindamo1 from '../../assets/albums/joechindamo1.jpg'
import wayoutwest from '../../assets/albums/wayoutwest.jpg'
import goodonions from '../../assets/albums/goodonions.jpg'
import korema from '../../assets/albums/korema.jpg'
import dianepeters from '../../assets/albums/dianepeters.jpg'



let albumsData = [
   {
      id: 1,
      bandcamp: '4057622917',
      description: 'Rajiv Jayaweera',
      cover: pistils,
      title: 'Pistils',
      label: 'Earshift Music',
      tracks: [
         '1. Pistils (feat. Lara Bello) 4:04',
         '2. Ellstandissa 6:38',
         '3. Welikadawatte 5:58',
         '4. Galadari 6:35',
         '5. Nilus 4:57',
         '6. The Elephant 6:57',
         '7. Hirimbura 7:03',
         '8. Malkoha Bird 6:42',
         '9. Pistils (feat. Chris Cheek) 5:51'],
      personnel: [
         'Rajiv Jayaweera – drums, thammattama, caxixi',
         'Chris Cheek – tenor and soprano saxophone',
         'Aaron Parks – piano',
         'Lara Bello – voice',
         'Hugh Stuckey – guitar',
         'Sam Anning – double bass'],
      credits: [
         'All songs composed by Rajiv Jayaweera. Produced by Rajiv Jayaweera.',
         'Mixing by James Farber. Mastering by Mark Wilder.',
         'Artwork, "Garden of Earthly Delights" by Dr. Priyantha Udagedera. Design by Lucas Carrillo']
   },

   {
      id: 2,
      description: 'Trio Kleine Ahnung',
      bandcamp: '827241178',
      cover: laniakea,
      title: 'Laniakea',
      label: 'Earshift Music',
      tracks: [
         '1. Intro (C. Morgan) 0:56',
         '2. Datameta (S. Anning) 7:59',
         '3. Kleine Ahnung (R. Jayaweera) 5:03',
         '4. Laniakea (C. Morgan) 5:34',
         '5. Ripples	(S. Anning)	5:42',
         '6. Gott Liebt Diese Welt (W. Schulz) 6:39',
         '7. Losdy (R. Jayaweera) 6:01',
         '8. Outro (C. Morgan) 1:39'],
      personnel: [
         'Carl Morgan – guitar, voice',
         'Sam Anning – d. bass, a. guitars (Datameta)',
         'Rajiv Jayaweera – drums',
         '+ Sean Wayland – synth (Kleine Ahnung)'],
      credits: [
        'Recorded at Kindred Studio in Neukölln, Berlin in April, 2019.',
        ' Engineered & mixed by Carl Morgan.',
         ' Mastered by David Darlington.',
         'Cover art by Scott Bergey ',
         'Design by Elle Deslandes']
   },

   {
      id: 3,
      description: 'Dinesen / Jayaweera / Anning',
      bandcamp: '801737656',
      cover: wee3c,
      title: 'We Three See',
      label: 'Label',
      tracks: [
         '1. Sweetheart',
         '2. Bush Baby',
         '3. The band',
         '4. Three',
         '5. Daggry',
         '6. We See',
         '7. Goodbye'],
      personnel: [
         'Jakob Dinesen – tenor saxophone',
         'Sam Anning – double bass',
         'Rajiv Jayaweera – drums'],
      credits: [
         'Recorded in Copenhagen 2013.',
         ' Released 2015.']
   },
   {
      id: 4,
      description: 'Lara Bello',
      bandcamp: '1639898348',
      cover: sikame,
      title: 'Sikame',
      label: 'Biophilia Records',
      tracks: [
         '1. Sola',
         '2. Suave',
         '3. Ave Fugaz',
         '4. Our Spanish Love Song',
         '5. Sikame',
         '6. Hind Y El Amor',
         '7. Farfalla',
         '8. Simple Fado',
         '9. A Woman and the Universe',
         '10. La Semilla'],
      personnel: [
         'Lara Bello – voice',
         'Gil Goldstein – piano / accordion',
         'Romero Lubambo – guitar',
         'Jorge Pardo – flute',
         'Lionel Loueke – guitar / voice',
         'Richard Bona – bass',
         'Dave Eggar – cello',
         'Leni Stern – ngoni',
         'Samuel Torres – percussion',
         'Rajiv Jayaweera – percussion'],
      credits: [
         'Recorded in New York, 2015.',
        ' Released on Biophilia Records, 2017']
   },
   {
      id: 5,
      description: 'Ragstretch',
      cover: ragstretch,
      title: 'Ragstretch',
      label: '',
      tracks: [
         '1. Dans La Rue d’Antibes',
         '2. When I Grow Too Old Too Dream',
         '3. Just a Closer Walk With Thee',
         '4. Way Down Yonder in New Orleans',
         '5. My Monday Date',
         '6. Jazz Me Blues',
         '7. Foolin’ Myself',
         '8. Why Don’t You Go Down To New Orleans',
         '9. Rocking Chair',
         '10. Panama',
         '11. Sweet Lorraine',
         '12. I’ll Be Your Baby Tonight'],
      personnel: [
         'Björn Ingelstam – trumpet / vocals',
         'Chris Tanner – clarinet / vocals',
         'Shannon Barnett – trombone / vocals',
         'Craig Fermanis – guitar',
         'Sam Anning – double bass',
         'Rajiv Jayaweera – drums'],
      credits: [
         'Recorded in Copenhagen, 2013']
   },
   {
      id: 6,
      description: 'Ben Bryden',
      bandcamp: '2734449489',
      cover: benbryden,
      title: 'Figure of Eight',
      label: '',
      tracks: [
         '1. Luskentyre 00:14',
         '2. The Cold Shoulder 06:46',
         '3. Goodbye Lullaby 04:03',
         '4. The Art of Fielding 03:51',
         '5. Sielebost 00:35',
         '6. She&#39;s Always a Woman 06:24',
         '7. Horgabost 00:43',
         '8. Auburn Skye 05:54',
         '9. Spectre by the Door 05:38',
         '10. Scarista 03:28',
         '11. A Respectful Salute to the Socially Relevant 05:21',
         '12. Flow Gently Sweet Afton 01:44',
         '13. Bostadh 00:56'],
      personnel: [
         'Ben Bryden - tenor saxophone',
         'Phil Robson - guitar',
         'Desmond White - bass',
         'Rajiv Jayaweera - drums',
         '+ Steven Delannoye - tenor sax tr. 3&4'],
      credits: [
         'Released November 8, 2019',
         '',
         '']
   },
   {
      id: 7,
      description: 'Q Morrow',
      cover: qmorrow,
      title: 'There Are Stars in Brooklyn',
      label: '',
      tracks: [
         '1. There Are Stars In Brooklyn',
         '2. The Do How',
         '3. Pupusa Da Jamaica',
         '4. Sueño de Miel',
         '5. Chinook Passing',
         '6. Inferno Astral',
         '7. Not Quite Sure Yet',
         '8. Loose Ends'],
      personnel: [
         'Q Morrow - guitar',
         'Will Vinson - alto saxophone',
         'Evan Francis - alto saxophone, flute',
         'Sam Bevan - bass',
         'Rajiv Jayaweera - drums'],
      credits: [
         'Released 2018',
         '']
   },
   {
      id: 8,
      description: 'Paul Jones',
      bandcamp: '2688499749',
      cover: pauljones,
      title: 'Paul Jones with Leon Boykins and Rajiv Jayaweera',
      label: '',
      tracks: [
         '1. Track 0:00',
         '2. Track 0:00',
         '3. Track 0:00',
         '4. Track 0:00',
         '5. Track 0:00',
         '6. Track 0:00',
         '7. Track 0:00'],
      personnel: [
         'Paul Jones - tenor sax and compositions',
         'Leon Boykins - bass',
         'Rajiv Jayaweera - drums'],
      credits: [
         'All audio and artwork by Paul Jones',
         'Released November 2017']
   },
   {
      id: 9,
      description: 'Joe Chindamo',
      cover: joechindamo,
      title: 'Puccini Arias',
      label: 'Origin Records',
      tracks: [
         '1. O Mio Babbino Caro 3:19',
         '2. E Lucevan Le Stelle 9:18',
         '3. Un Bel Di Vedremo 7:32',
         '4. Quando Men Vo 5:04',
         `5. Ch'ella Mi Creda 2:31`,
         '6. Che Gelida Manina 4:41',
         '7. Nessun Dorma 7:39'],
      personnel: [
         'Joe Chindamo - piano, accordion',
         'Nigel MacLean - violin',
         'Doug De Vries - guitar',
         'Ben Robertson - double bass',
         'Rajiv Jayaweera - drums'],
      credits: [
         '2019 - Origin Records',
         '']
   },
   {
      id: 10,
      description: 'Cyrille Aimee',
      cover: cyrille,
      title: `Let's Get Lost`,
      label: 'Mack Avenue Records',
      tracks: [
         '1. Live Alone and Like It 2:36',
         '2. There’s a Lull in My Life 3:47',
         '3. Estrellitas y Duendes 3:20',
         '4. Lazy Afternoon 4:53',
         '5. Three Little Words 2:32',
         '6. T’es Beau tu Sais 3:20',
         '7. Let’s Get Lost 2:35',
         '8. Samois a Moi 4:20',
         '9. Nine More Minutes 2:53',
         '10. Laverne Walk 2:20',
         '11. That Old Feeling 2:38',
         '12. Each Day (feat. Matt Simons) 3:26',
         '13. Words 3:41',
         '14. Well You Needn’t (Bonus Track) 3:16'],
      personnel: [
         'Cyrille Aimée - vocals',
         'Adrien Moignard - guitar',
         'Michael Valeneau - guitar',
         'Sam Anning - bass',
         'Rajiv Jayaweera - drums',],
      credits: [
         '2016 - Mack Avenue Records',
         '']
   },
   {
      id: 11,
      description: 'Peter Knight',
      bandcamp: '3460606253',
      cover: peterknight,
      title: 'Way Out West',
      label: '',
      tracks: ['', ''],
      personnel: [
         'Peter Knight - trumpet/laptop electronics/organ',
         'Satsuki Odamura - koto/bass koto',
         'Ray Pereira - congas/djembe/balafon/bass drum/cowbells/shekere',
         'Lucas Michailidis - guitar/balafon on track 4',
         'Paul Williamson - saxophones',
         'Rajiv Jayaweera - drums',
         'Howard Cairns - double bass/concertina on track 5',
         'Kanchana Karunaratna - Kandyan drum on track 2'],
      credits: [
         'Recorded 2nd and 3rd May 2014 at Allan Eaton Studios St Kilda by Robin Gray',
         'Mixed by Myles Mumford and Peter Knight',
         'Mastered by Adam Dempsey at Deluxe Mastering'
      ]
   },
   {
      id: 13,
      description: 'Angela Davis',
      bandcamp: '',
      cover: angeladavis,
      title: 'The Art Of The Melody',
      label: '',
      tracks: [
         `1. 41. St. Nick`,
         `2. We’re All Alone`,
         `3. Annie Laurie`,
         `4. The Road to Montgomery`,
         `5. Conscientia`,
         `6. Crazy She Calls Me`,
         `7. Joana’s Waltz`,
         `8. Martha`,
         `9. Smile`
      ],
      personnel: [
            'Angela Davis - saxophone',
            `Chris Ziemba - piano`,
            `Linda May Han Oh - bass`,
            `Rajiv Jayaweera - drums`
         ],
      credits:
         ['2013 - Nicholas Records',
         '']
   },
   {
      id: 14,
      description: 'Rotem Sivan',
      bandcamp: '',
      cover: rotemsivan,
      title: 'Enchanted Sun',
      label: '',
      tracks: [
         `1 Here With You 7:21`,
         `2 There Without 3:46`,
         `3 Rodent&#39;s Blues 4:13`,
         `4 Isn't It Romantic 5:30`,
         `5 Scene #5 4:06`,
         `6 How Long Has This Been Going On? 7:35`,
         '7 Keep Breathing 4:00',
         '8 Enchanted Sun 5:57',
         '9 Sun-Song 5:34',
      ],
      personnel: [
            'Rotem Sivan - guitar',
            `Sam Anning - bass`,
            `Rajiv Jayaweera - drums`
         ],
      credits:
         ['2013 - Steeplechase',
         '']
   },
   {
      id: 15,
      description: 'Cyrille Aimee and The Surreal Band',
      bandcamp: '',
      cover: cyrille1,
      title: 'Live at Birdland',
      label: '',
      tracks: [
         `1. The Lamp Is Low 3:34`,
         `2. A Dream Is a Wish 7:46`,
         '3. Caravan 6:47',
         '4. Blue Skies 5:38',
         '5. Darn That Dream 6:44',
         '6. Well You Needn’t 5:22',
         '7. You and the Night and the Music 7:16',
         '8. Softly as in a Morning Sunrise 4:20',
         '9. Love Me or Leave Me 2:34',
         '10. Nuit Blanche 6:19',
         '11. You Stepped out of a Dream 6:41'
      ],
      personnel: [
         `Cyrille Aimee – vocals`,
         `Wayne Tucker – trumpet`,
         `Joel Frahm – tenor saxophone`,
         `Assaf Gleizner – piano`,
         `Jeremy Bruyere – bass`,
         `Rajiv Jayaweera – drums`
      ],
      credits:
         ['Released 2013',
         '']
   },
   {
      id: 16,
      description: 'Michael Valeanu',
      bandcamp: '',
      cover: michu,
      title: 'Tea Time',
      label: '',
      tracks: [
         `1. From This Moment On`,
         `2. La Javanaise`,
         `3. I Concentrate On You`,
         `4. Who Can I Turn To ?`,
         `5. Tea Time`,
         `6. Rabo De Nube`,
         `7. Voice Of Memory`,
         `8. Dexterity`,
         `9. Almost Like Being In Love`,
         `10. Polka Dots and Moonbeams`
      ],
      personnel: [
         `Michael Valeanu - guitar`,
         `Thomas Enhco - piano`,
         `Or Bareket - Bass`,
         `Rajiv Jayaweera - Drums`,
      ],
      credits:
         ['Released 2012',
         '']
   },
   {
      id: 17,
      description: 'Emma Gilmartin',
      bandcamp: '',
      cover: emmagilmartin,
      title: 'Songe',
      label: 'Move Records',
      tracks: [
         `1. Fairly fast samba (Gilmartin)`,
         `2. I’m old fashioned (Kern/Mercer)`,
         `3. Another Story Girl (Nordernstam)`,
         `4. Devil may care (Kirk/Dorough)`,
         `5. Songe (Gilmartin)`,
         `6. I’ve never been in love before (Loesser)`,
         `7. For no one (Lennon/McCartney)`,
         `8. When you wish upon a star (Harline)`,
         `9. A weaver of dreams (Young/Elliot)`,
         `10. Is it OK if I call you mine (McCrane)`
      ],
      personnel: [
         `Michael Valeanu - guitar`,
         `Thomas Ehnco - piano`,
         `Or Bareket - Bass`,
         `Rajiv Jayaweera - Drums`,
      ],
      credits:
         ['2005 Move Records',
         '']
   },
   {
      id: 18,
      description: 'Joe Chindamo',
      bandcamp: '',
      cover: joechindamo1,
      title: 'Another Place Some Other Time',
      label: 'Move Records',
      tracks: [
         `1. No Country For Old Men 05:35`,
         `2. Man Of Constant Sorrow 05:27`,
         `3. Raising Arizona 02:22`,
         `4. Fargo 05:51`,
         `5. Lujon 06:01`,
         `6. Miller's Crossing 03:38`,
         `7. You Are My Sunshine 02:42`,
         `8. Spartacus Adagio 06:26`,
         `9. Hotel California 05:40`,
         `10. Goodnight Well It's Time To Go 02:51`,
         `11. Blood Simple 04:13`
      ],
      personnel: [
         `Joe Chindamo - piano and accordian`,
         `Philip Rex - bass`,
         `Doug de Vries - guitars`,
         `Nigel MaClean - violin`,
         `Lucky Oceans - pedal steel and dobro`,
         `Rajiv Jayaweera - drums`,
         `Alex Pertout - percussion`
      ],
      credits:
         ['2010 Jazz Head',
         '']
   },
   {
      id: 19,
      description: 'Way Out West',
      bandcamp: '1602420040',
      cover: wayoutwest,
      title: 'The Effects of Weather',
      label: 'Jazz Head',
      tracks: [
         ``,
         ``
      ],
      personnel: [
         `Peter Knight - trumpet, prepared, flugel horn, jaw harp, found objects`,
         `Dung Nguyen - dan tranh, dan nguyet, modified electric guitar`,
         `Paul Williamson - saxophones, flute`,
         `Ray Pereira - percussion, found objects`,
         `Howard Cairns - double bass, found objects`,
         `Rajiv Jayaweera - drum kit, found objects`
      ],
      credits: [
         'Produced by Peter Knight.',
         'Recorded by Robin Gray at Allan Eaton Studio, Melbourne.',
         'Mixed by Myles Mumford and Peter Knight.',
         'Mastered by Adam Dempsey at Deluxe Mastering.',
         'Cover Design by Pete Barrett.',
         'Photography by Sharka Bosakova.'

      ]
   },
   {
      id: 20,
      description: 'Dinesen / Ball / Pallesen / Jayaweera',
      bandcamp: '1170216191',
      cover: goodonions,
      title: 'Good Onions',
      label: '',
      tracks: [
         ``,
         ``
      ],
      personnel: [
         `Jakob Dinesen - tenor saxophone`,
         `Eugene Ball - trumpet`,
         `Guffi Pallesen - double bass`,
         `Rajiv Jayaweera - drums`
      ],
      credits: [
         'Recorded by Mal Stanley at the ABC Studio, Southbank, Australia, November 2007',
         'Released 2017'
      ]
   },
   {
      id: 21,
      description: 'Aaron Choulai',
      bandcamp: '1170216191',
      cover: korema,
      title: 'Korema',
      label: 'New Market',
      tracks: [
         `1. Korema`,
         `2. Papuese`,
         `3. Douglas Me Senseless`,
         `4. Tamona`,
         `5. Cruising At An Altitude Of Toasted`,
         `6. Splat`
      ],
      personnel: [
         `Aaron Choulai - piano`,
         `Eugene Ball - trumpet`,
         `Julien Wilson - tenor saxophone`,
         `Geoff Hughes - guitar`,
         `Tom Lee - double bass`,
         `Rajiv Jayaweera - drums`
      ],
      credits: [
         '2005 New Market',
         ''
      ]
   },
   {
      id: 22,
      description: 'Diane Peters',
      bandcamp: '',
      cover: dianepeters,
      title: 'Archaeopteryx',
      label: '',
      tracks: [
         `1 Strength And Light 9:02`,
         `2 Green Tea 6:02`,
         `3 Jason Man 8:24`,
         `4 Love Dust 5:43`,
         `5 Picass's Weeping Woman Pt.1 2:31`,
         `6 Picass's Weeping Woman Pt.2 5:09`,
         `7 Duo In Seven 5:28`,
         `8 Mother Song Pt.1 1:03`,
         `9 Mother Song Pt.2 0:57`,
         `10 Mother Song Pt.3 5:33`
      ],
      personnel: [
         `Diane Peters - harp, voice`,
         `Ben Carr - saxophone`,
         `James Wilkinson - trombone`,
         `Mark Shepherd - bass`,
         `Rajiv Jayaweera - drums`,
         `Cam McAllister - trumpet`
      ],
      credits: [
         'Released 2000',
         ''
      ]
   },
]
export default albumsData