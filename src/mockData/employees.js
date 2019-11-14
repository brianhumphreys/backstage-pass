import React from 'react';

const employees = [
    {
        "id": "5dccc0182908fc6a032123c1",
        "index": 0,
        "guid": "0fbf81c2-6093-4b12-8173-862552a6377c",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Franks Flores",
        "gender": "male",
        "email": "franksflores@artiq.com",
        "phone": "+1 (803) 504-2627",
        "address": "266 Halsey Street, Ribera, Maryland, 9190",
        "about": "Laboris dolore elit in culpa exercitation veniam cupidatat. Anim cillum magna ea commodo commodo ipsum eiusmod elit minim veniam aliquip reprehenderit et. Quis minim ipsum duis id. Exercitation sit amet in in anim nisi culpa tempor sit irure minim. Ea dolore nostrud veniam sunt veniam eiusmod aliqua. Dolore reprehenderit id irure commodo sunt aliquip nulla deserunt mollit dolor ullamco cillum proident dolor. Incididunt id magna aute culpa dolor irure labore.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 8
            },
            {
                "skill": "devtool",
                "level": 0
            },
            {
                "skill": "frontend",
                "level": 0
            },
            {
                "skill": "objectoriented",
                "level": 9
            },
            {
                "skill": "algorithmic",
                "level": 5
            },
            {
                "skill": "pair",
                "level": 8
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    true,
                    false,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc018956d792ae32a3f8f",
        "index": 1,
        "guid": "755d59f9-2a43-498c-80ed-9a7b072c0660",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Callie Alford",
        "gender": "female",
        "email": "calliealford@artiq.com",
        "phone": "+1 (944) 436-3777",
        "address": "717 Noll Street, Leming, Connecticut, 9035",
        "about": "Veniam amet deserunt nulla id proident aliqua minim et est magna mollit veniam ea. Non duis exercitation ad sit est dolor officia consectetur adipisicing ad qui occaecat consequat. Aute reprehenderit cupidatat qui amet reprehenderit. Commodo aliquip labore nulla velit culpa velit Lorem. Nisi labore excepteur non eu labore do exercitation ex adipisicing ad culpa qui. Deserunt officia cupidatat fugiat ut proident.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 8
            },
            {
                "skill": "devtool",
                "level": 8
            },
            {
                "skill": "frontend",
                "level": 8
            },
            {
                "skill": "objectoriented",
                "level": 7
            },
            {
                "skill": "algorithmic",
                "level": 7
            },
            {
                "skill": "pair",
                "level": 0
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    false,
                    true,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    false,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc0186208b2005f250d87",
        "index": 2,
        "guid": "1d475a0d-fd71-43e6-81ee-d44f95560ba6",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Cote Benjamin",
        "gender": "male",
        "email": "cotebenjamin@artiq.com",
        "phone": "+1 (892) 581-3679",
        "address": "248 Legion Street, Needmore, Georgia, 5509",
        "about": "Esse exercitation qui eu non exercitation Lorem irure velit non aute. Deserunt dolore ut minim cupidatat sit in adipisicing veniam. Consequat labore eiusmod anim velit excepteur reprehenderit non dolor eiusmod mollit. Elit id ad et veniam sunt do dolore ea commodo. Aliquip anim laboris culpa non irure in nulla eu pariatur consequat et ad reprehenderit.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 6
            },
            {
                "skill": "devtool",
                "level": 2
            },
            {
                "skill": "frontend",
                "level": 7
            },
            {
                "skill": "objectoriented",
                "level": 1
            },
            {
                "skill": "algorithmic",
                "level": 3
            },
            {
                "skill": "pair",
                "level": 1
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    false,
                    false,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    false,
                    false,
                    true,
                    false,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc018b343df9b88afb82a",
        "index": 3,
        "guid": "ea4882b4-f535-41f0-a882-21939b20986f",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Bass Wright",
        "gender": "male",
        "email": "basswright@artiq.com",
        "phone": "+1 (995) 441-3466",
        "address": "425 Ovington Court, Deltaville, Puerto Rico, 6608",
        "about": "Magna in enim fugiat sunt duis proident velit esse incididunt qui eu proident duis. Quis officia minim eiusmod magna commodo proident cupidatat excepteur labore. In et pariatur laboris non aliqua sit qui do incididunt deserunt. Ad sit ipsum esse tempor duis amet excepteur aliquip excepteur sint.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 2
            },
            {
                "skill": "devtool",
                "level": 0
            },
            {
                "skill": "frontend",
                "level": 1
            },
            {
                "skill": "objectoriented",
                "level": 8
            },
            {
                "skill": "algorithmic",
                "level": 2
            },
            {
                "skill": "pair",
                "level": 6
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc018b21a3e723ce72327",
        "index": 4,
        "guid": "b9c6d18b-48df-474e-981b-1b50529317e7",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Chen Steele",
        "gender": "male",
        "email": "chensteele@artiq.com",
        "phone": "+1 (831) 564-3360",
        "address": "117 Beayer Place, Floris, Ohio, 1091",
        "about": "Qui pariatur ea aliqua eiusmod do reprehenderit magna irure id ea qui laborum adipisicing irure. Consectetur cupidatat esse cillum id ullamco fugiat nulla excepteur cillum sint. Dolor consequat consequat amet amet commodo est exercitation.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 1
            },
            {
                "skill": "devtool",
                "level": 6
            },
            {
                "skill": "frontend",
                "level": 2
            },
            {
                "skill": "objectoriented",
                "level": 8
            },
            {
                "skill": "algorithmic",
                "level": 7
            },
            {
                "skill": "pair",
                "level": 5
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    true,
                    true,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    true,
                    true,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc018744be31c50efc1a3",
        "index": 5,
        "guid": "8c0a3c87-db19-417c-ae3c-18b5a37d4bd1",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Nora Clements",
        "gender": "female",
        "email": "noraclements@artiq.com",
        "phone": "+1 (959) 442-2533",
        "address": "913 Cumberland Walk, Sanders, Delaware, 7427",
        "about": "Occaecat ut aliqua consequat Lorem sunt non tempor aliqua consectetur Lorem incididunt. Duis labore adipisicing non non dolor tempor laborum ex nisi cillum exercitation commodo excepteur eiusmod. Minim sit sint ea labore. Do eu ullamco adipisicing cupidatat voluptate ut sint.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 1
            },
            {
                "skill": "devtool",
                "level": 10
            },
            {
                "skill": "frontend",
                "level": 3
            },
            {
                "skill": "objectoriented",
                "level": 4
            },
            {
                "skill": "algorithmic",
                "level": 10
            },
            {
                "skill": "pair",
                "level": 1
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    true,
                    false,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc0183378e4f9094c3929",
        "index": 6,
        "guid": "96aea253-6288-4040-a37d-0363fe7316f8",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Hunter Jacobson",
        "gender": "male",
        "email": "hunterjacobson@artiq.com",
        "phone": "+1 (949) 481-2519",
        "address": "177 Hewes Street, Hollymead, Guam, 2090",
        "about": "Voluptate magna eiusmod aliquip irure sunt anim reprehenderit Lorem cupidatat nulla irure esse. Consectetur est sunt officia commodo sit et proident elit laborum reprehenderit fugiat. Minim ea quis pariatur deserunt nisi labore laboris est laborum id. Veniam est commodo nulla eiusmod consequat nostrud sunt aute aliqua nulla mollit sunt in do. Fugiat tempor qui amet mollit sit. Lorem aute voluptate velit voluptate esse magna culpa tempor commodo aute tempor irure qui pariatur. Adipisicing fugiat minim est minim ex anim consequat commodo enim ipsum cillum.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 8
            },
            {
                "skill": "devtool",
                "level": 8
            },
            {
                "skill": "frontend",
                "level": 6
            },
            {
                "skill": "objectoriented",
                "level": 6
            },
            {
                "skill": "algorithmic",
                "level": 7
            },
            {
                "skill": "pair",
                "level": 9
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    false,
                    false,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    true,
                    false,
                    false,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc018eef814f23a31e20e",
        "index": 7,
        "guid": "f0d4b83d-5f3e-41f7-a601-ab71d0cddd6b",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Shawn Cochran",
        "gender": "female",
        "email": "shawncochran@artiq.com",
        "phone": "+1 (909) 498-2877",
        "address": "197 Brooklyn Road, Churchill, Utah, 6309",
        "about": "Proident excepteur pariatur ad aliquip occaecat aliquip adipisicing occaecat labore ad ad mollit. Veniam officia magna irure incididunt mollit incididunt reprehenderit voluptate consequat dolor est. Dolor eiusmod consequat nostrud duis ex sunt velit voluptate. Ipsum magna laborum consequat sit.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 6
            },
            {
                "skill": "devtool",
                "level": 3
            },
            {
                "skill": "frontend",
                "level": 0
            },
            {
                "skill": "objectoriented",
                "level": 4
            },
            {
                "skill": "algorithmic",
                "level": 10
            },
            {
                "skill": "pair",
                "level": 4
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    true,
                    false,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    false,
                    true,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    true,
                    false,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc01821979000b787d0d5",
        "index": 8,
        "guid": "f4ddd6e2-a6ab-43ae-a095-9977a57d82c0",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Bryan Leonard",
        "gender": "male",
        "email": "bryanleonard@artiq.com",
        "phone": "+1 (866) 461-2623",
        "address": "799 Ashland Place, Umapine, Nevada, 237",
        "about": "Exercitation dolore duis reprehenderit laboris aute do amet magna. Nulla ex voluptate adipisicing mollit aliquip laboris anim magna do. Anim excepteur ex nisi elit deserunt proident nostrud amet pariatur minim aute laborum voluptate excepteur. Nulla laboris magna dolor enim occaecat. Amet pariatur officia duis minim labore anim proident. Minim magna irure mollit exercitation dolor veniam est laboris do aliquip ex. Dolor quis aliqua aute veniam sunt.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 7
            },
            {
                "skill": "devtool",
                "level": 10
            },
            {
                "skill": "frontend",
                "level": 4
            },
            {
                "skill": "objectoriented",
                "level": 3
            },
            {
                "skill": "algorithmic",
                "level": 3
            },
            {
                "skill": "pair",
                "level": 4
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    true,
                    true,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc018d48666440dbd625c",
        "index": 9,
        "guid": "a5449f55-e2a7-48ff-a9ed-d3df3ddb8cfc",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Chasity Stokes",
        "gender": "female",
        "email": "chasitystokes@artiq.com",
        "phone": "+1 (901) 485-3045",
        "address": "648 Lewis Avenue, Lorraine, Maine, 252",
        "about": "Minim dolor in adipisicing nisi commodo cillum nostrud. Laborum ad fugiat occaecat deserunt exercitation sit velit enim tempor non consequat proident elit. Commodo proident tempor ea ullamco laborum esse aliqua consectetur cupidatat excepteur ad aliqua. Ea mollit sint irure labore.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 0
            },
            {
                "skill": "devtool",
                "level": 0
            },
            {
                "skill": "frontend",
                "level": 6
            },
            {
                "skill": "objectoriented",
                "level": 5
            },
            {
                "skill": "algorithmic",
                "level": 3
            },
            {
                "skill": "pair",
                "level": 2
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    true,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    true,
                    false,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    true,
                    true,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc018eb93908a63791d74",
        "index": 10,
        "guid": "1a1abb40-9050-468d-b0bf-05c6af575124",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Jewel Chen",
        "gender": "female",
        "email": "jewelchen@artiq.com",
        "phone": "+1 (808) 595-3223",
        "address": "510 Bowne Street, Volta, Michigan, 5882",
        "about": "Ea non sint culpa nostrud exercitation qui exercitation fugiat eu incididunt reprehenderit exercitation minim. Tempor laborum irure magna aliqua magna et. Amet irure est fugiat ad incididunt ullamco nostrud excepteur esse commodo dolor aute. Reprehenderit labore incididunt proident sit duis laborum id ullamco. Ullamco cupidatat dolore aliquip ipsum excepteur aliquip mollit irure cillum pariatur cillum ipsum sint. Commodo elit est ad proident. Pariatur cupidatat deserunt consequat mollit.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 8
            },
            {
                "skill": "devtool",
                "level": 5
            },
            {
                "skill": "frontend",
                "level": 1
            },
            {
                "skill": "objectoriented",
                "level": 10
            },
            {
                "skill": "algorithmic",
                "level": 8
            },
            {
                "skill": "pair",
                "level": 0
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    false,
                    true,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    false,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    true,
                    true,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    false,
                    false,
                    true,
                    false,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc01844b601d4d15ed29f",
        "index": 11,
        "guid": "ce06fe63-44ec-490b-af50-b3bd00c613a4",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Rasmussen Burnett",
        "gender": "male",
        "email": "rasmussenburnett@artiq.com",
        "phone": "+1 (935) 495-2370",
        "address": "434 Caton Avenue, Woodlands, Marshall Islands, 3203",
        "about": "Aliqua est tempor amet velit ullamco dolore labore do incididunt qui nisi elit. Culpa do ex pariatur anim veniam. Quis elit occaecat velit ullamco irure duis adipisicing in Lorem occaecat. Ex nostrud fugiat irure tempor do in mollit do magna cupidatat non voluptate. Nostrud incididunt veniam cillum nostrud eu.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 5
            },
            {
                "skill": "devtool",
                "level": 5
            },
            {
                "skill": "frontend",
                "level": 3
            },
            {
                "skill": "objectoriented",
                "level": 5
            },
            {
                "skill": "algorithmic",
                "level": 2
            },
            {
                "skill": "pair",
                "level": 4
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    true,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    true,
                    false,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc01882ad0cb9ac1cade6",
        "index": 12,
        "guid": "40cfaed9-36ca-4262-8462-72a5f1ce268f",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Charity Hahn",
        "gender": "female",
        "email": "charityhahn@artiq.com",
        "phone": "+1 (900) 417-3040",
        "address": "708 Scholes Street, Laurelton, Florida, 1003",
        "about": "Nisi cillum laborum sint incididunt aliquip reprehenderit. Ea elit eu Lorem occaecat et ex cupidatat velit anim. Cupidatat dolore esse ullamco irure amet ex proident enim sint aliqua proident nisi.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 2
            },
            {
                "skill": "devtool",
                "level": 10
            },
            {
                "skill": "frontend",
                "level": 2
            },
            {
                "skill": "objectoriented",
                "level": 2
            },
            {
                "skill": "algorithmic",
                "level": 4
            },
            {
                "skill": "pair",
                "level": 10
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    false,
                    false,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    false,
                    true,
                    true,
                    false,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc018d0c57be2926729e3",
        "index": 13,
        "guid": "bb7645c9-c5d1-4d35-8095-fc7c3fd1c5a8",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Pat Macias",
        "gender": "female",
        "email": "patmacias@artiq.com",
        "phone": "+1 (955) 474-2977",
        "address": "539 Columbia Street, Muir, Indiana, 5311",
        "about": "Minim cillum ipsum ad mollit enim. Cupidatat aliqua excepteur consectetur officia ex adipisicing qui est culpa quis est non eu. Duis ipsum nulla occaecat ipsum consectetur veniam ex anim et id. Dolor amet excepteur incididunt non ex nisi ex consectetur ex nulla irure velit. In sunt officia ex tempor ullamco culpa ex ad consequat mollit. Pariatur Lorem cupidatat ad cupidatat id dolor excepteur anim excepteur ut.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 9
            },
            {
                "skill": "devtool",
                "level": 9
            },
            {
                "skill": "frontend",
                "level": 1
            },
            {
                "skill": "objectoriented",
                "level": 0
            },
            {
                "skill": "algorithmic",
                "level": 4
            },
            {
                "skill": "pair",
                "level": 0
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    true,
                    true,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    true,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc01803a77c09335d9be0",
        "index": 14,
        "guid": "293dfea0-49d0-410a-bd01-820c484f46c8",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Nicole Vance",
        "gender": "female",
        "email": "nicolevance@artiq.com",
        "phone": "+1 (901) 513-2870",
        "address": "523 River Street, Cade, Colorado, 8581",
        "about": "Officia deserunt cillum qui elit dolor voluptate incididunt excepteur ex proident culpa do nisi reprehenderit. Sint irure laborum laboris proident ad consequat velit irure id magna consectetur. Qui laboris id mollit esse commodo dolor dolore est veniam labore. Magna et cupidatat laboris Lorem consequat dolor eu. Tempor veniam ut incididunt nulla magna fugiat aute occaecat Lorem laboris quis irure dolore id. Ipsum magna commodo non deserunt qui ex officia.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 8
            },
            {
                "skill": "devtool",
                "level": 0
            },
            {
                "skill": "frontend",
                "level": 5
            },
            {
                "skill": "objectoriented",
                "level": 0
            },
            {
                "skill": "algorithmic",
                "level": 0
            },
            {
                "skill": "pair",
                "level": 10
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    true,
                    true,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    false,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    true,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    true,
                    false,
                    false,
                    false,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc01842735c757027f32f",
        "index": 15,
        "guid": "6cfd9971-d06f-44ae-99ad-ce9e8160cec1",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Janie Craig",
        "gender": "female",
        "email": "janiecraig@artiq.com",
        "phone": "+1 (875) 496-2701",
        "address": "642 Autumn Avenue, Omar, Oklahoma, 2149",
        "about": "Et nulla sint nisi veniam cupidatat. Eiusmod sit nulla eiusmod amet quis dolor labore id culpa irure sunt aliqua dolor duis. Dolore laboris aute dolore deserunt Lorem.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 0
            },
            {
                "skill": "devtool",
                "level": 0
            },
            {
                "skill": "frontend",
                "level": 2
            },
            {
                "skill": "objectoriented",
                "level": 8
            },
            {
                "skill": "algorithmic",
                "level": 0
            },
            {
                "skill": "pair",
                "level": 8
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    true,
                    false,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    false,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    true,
                    true,
                    false,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc0187150234240f3ad28",
        "index": 16,
        "guid": "2dabd46c-0666-4138-8dac-b2aeb6a3dd4e",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Maldonado Church",
        "gender": "male",
        "email": "maldonadochurch@artiq.com",
        "phone": "+1 (820) 418-2692",
        "address": "614 Rewe Street, Thynedale, Minnesota, 6528",
        "about": "Cupidatat nulla eiusmod velit esse. Tempor reprehenderit consequat fugiat commodo labore ut et. Veniam ea tempor aliquip aliqua.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 0
            },
            {
                "skill": "devtool",
                "level": 7
            },
            {
                "skill": "frontend",
                "level": 7
            },
            {
                "skill": "objectoriented",
                "level": 6
            },
            {
                "skill": "algorithmic",
                "level": 10
            },
            {
                "skill": "pair",
                "level": 1
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    true,
                    true,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    true,
                    false,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc0189166a681ea1a8ad6",
        "index": 17,
        "guid": "11ef8119-6021-48b3-aa14-9d03cf9b9b17",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Good Manning",
        "gender": "male",
        "email": "goodmanning@artiq.com",
        "phone": "+1 (831) 426-3671",
        "address": "792 Etna Street, Brethren, Hawaii, 1298",
        "about": "Et ex tempor velit sit est. Velit cupidatat officia minim nostrud nisi consequat minim in ullamco aliqua fugiat occaecat eu cillum. Ea ullamco aute fugiat anim sunt. Incididunt magna consectetur irure magna nostrud aliquip cupidatat amet minim qui pariatur ullamco eu culpa.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 0
            },
            {
                "skill": "devtool",
                "level": 0
            },
            {
                "skill": "frontend",
                "level": 4
            },
            {
                "skill": "objectoriented",
                "level": 3
            },
            {
                "skill": "algorithmic",
                "level": 9
            },
            {
                "skill": "pair",
                "level": 10
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    true,
                    false,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    false,
                    false,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    true,
                    false,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    true,
                    false,
                    true,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc018b66bea77da3f9e40",
        "index": 18,
        "guid": "a5ef74e6-5773-4694-87c5-cbb9ab4ca493",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Jenifer Walls",
        "gender": "female",
        "email": "jeniferwalls@artiq.com",
        "phone": "+1 (928) 570-3749",
        "address": "551 Lincoln Place, Brantleyville, West Virginia, 2693",
        "about": "Proident magna commodo occaecat fugiat proident amet pariatur. Duis cupidatat voluptate mollit ut est voluptate eu est laboris cupidatat elit elit. Lorem exercitation excepteur ut minim amet irure adipisicing. Esse ea consectetur excepteur adipisicing dolor magna culpa.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 6
            },
            {
                "skill": "devtool",
                "level": 10
            },
            {
                "skill": "frontend",
                "level": 10
            },
            {
                "skill": "objectoriented",
                "level": 2
            },
            {
                "skill": "algorithmic",
                "level": 7
            },
            {
                "skill": "pair",
                "level": 2
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    false,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    true,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    true,
                    false,
                    false,
                    true,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc0187e2baba090dbd1f2",
        "index": 19,
        "guid": "3633afd1-c592-4893-be64-d9b3ee1061e7",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Daniel Moran",
        "gender": "male",
        "email": "danielmoran@artiq.com",
        "phone": "+1 (932) 578-3172",
        "address": "921 Dennett Place, Zeba, Mississippi, 414",
        "about": "Mollit nisi consectetur nulla nulla do sit Lorem esse eu duis labore quis consequat ipsum. Ullamco eu occaecat consectetur laborum commodo magna aliqua incididunt mollit ipsum enim. Aliqua esse deserunt commodo nisi fugiat ut sit. Excepteur ut deserunt tempor aute ullamco qui veniam cillum aliqua excepteur enim. Pariatur Lorem magna do labore. Et esse proident tempor nisi consequat dolor.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 8
            },
            {
                "skill": "devtool",
                "level": 2
            },
            {
                "skill": "frontend",
                "level": 0
            },
            {
                "skill": "objectoriented",
                "level": 9
            },
            {
                "skill": "algorithmic",
                "level": 1
            },
            {
                "skill": "pair",
                "level": 5
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    true,
                    false,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    true,
                    true,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    false,
                    true,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    true,
                    false,
                    true,
                    true,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc018fc0eaa30dfdd1945",
        "index": 20,
        "guid": "4f2deb6e-47c9-433a-bb73-ed1ba097b525",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Sherrie Juarez",
        "gender": "female",
        "email": "sherriejuarez@artiq.com",
        "phone": "+1 (820) 574-2018",
        "address": "235 Fenimore Street, Ticonderoga, Idaho, 9478",
        "about": "Nisi nisi ad occaecat consectetur officia aliqua consequat ex. Officia ea mollit voluptate aliqua Lorem non est Lorem ex nulla aliqua. Duis proident proident anim deserunt enim aliqua id laboris non pariatur ea elit.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 6
            },
            {
                "skill": "devtool",
                "level": 0
            },
            {
                "skill": "frontend",
                "level": 3
            },
            {
                "skill": "objectoriented",
                "level": 0
            },
            {
                "skill": "algorithmic",
                "level": 2
            },
            {
                "skill": "pair",
                "level": 6
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    true,
                    false,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    false,
                    true,
                    false,
                    true,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    false,
                    true,
                    true,
                    true,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc0189fdacbb3f29ba3e8",
        "index": 21,
        "guid": "d0e28e1b-7589-443f-bb83-9ebfde1ff8d4",
        "isManager": false,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Mercedes Blake",
        "gender": "female",
        "email": "mercedesblake@artiq.com",
        "phone": "+1 (878) 599-2797",
        "address": "807 Clinton Street, Calverton, Iowa, 9232",
        "about": "Do sint veniam sit ullamco cillum nulla quis culpa in Lorem consequat deserunt minim. Aliqua aute pariatur proident incididunt magna aliqua sunt. Sit minim cillum consequat nostrud nisi laborum tempor quis ipsum laborum. Sit mollit aute ullamco mollit duis sunt pariatur labore eu aliqua laboris dolor adipisicing ullamco. Laboris ullamco dolore dolore irure ea. Nisi sit enim dolore sint magna labore culpa do magna esse adipisicing quis id. Incididunt commodo ad adipisicing duis commodo aliqua enim quis.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 9
            },
            {
                "skill": "devtool",
                "level": 10
            },
            {
                "skill": "frontend",
                "level": 8
            },
            {
                "skill": "objectoriented",
                "level": 2
            },
            {
                "skill": "algorithmic",
                "level": 7
            },
            {
                "skill": "pair",
                "level": 2
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    true,
                    false,
                    false,
                    true,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    false,
                    true,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    true,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    true,
                    true,
                    false,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc018f27b5612a45175a0",
        "index": 22,
        "guid": "b436e0c1-cd34-4f8b-9b16-380711f9bcb7",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Benson Farrell",
        "gender": "male",
        "email": "bensonfarrell@artiq.com",
        "phone": "+1 (835) 503-2818",
        "address": "455 Lexington Avenue, Jacumba, Louisiana, 4328",
        "about": "Dolore anim ex irure id esse. Reprehenderit deserunt quis id ad. Non irure nulla duis sunt. Officia proident ex ex est ut eu veniam amet. Lorem sit mollit do laborum labore laboris quis fugiat est. Duis fugiat sit aliqua et magna duis laborum nisi.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 9
            },
            {
                "skill": "devtool",
                "level": 1
            },
            {
                "skill": "frontend",
                "level": 8
            },
            {
                "skill": "objectoriented",
                "level": 8
            },
            {
                "skill": "algorithmic",
                "level": 3
            },
            {
                "skill": "pair",
                "level": 10
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    true,
                    false,
                    true,
                    false,
                    false,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    true,
                    true,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    false,
                    true
                ]
            }
        ]
    },
    {
        "id": "5dccc018020f6d6cdebcbc11",
        "index": 23,
        "guid": "f6c77e9c-2801-4e57-b73d-55025dddb018",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Cameron Foreman",
        "gender": "male",
        "email": "cameronforeman@artiq.com",
        "phone": "+1 (885) 555-2261",
        "address": "727 Clara Street, Westmoreland, Virgin Islands, 3422",
        "about": "Voluptate id deserunt irure eiusmod dolore duis id laborum cupidatat quis tempor laboris. Est deserunt excepteur ipsum deserunt consectetur ipsum consequat sit nulla. Deserunt minim adipisicing et magna commodo Lorem eiusmod deserunt enim et labore quis. Sint veniam proident minim laboris excepteur labore aliquip culpa nostrud aliqua. Veniam magna eu fugiat aliqua sit adipisicing laborum.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 1
            },
            {
                "skill": "devtool",
                "level": 9
            },
            {
                "skill": "frontend",
                "level": 8
            },
            {
                "skill": "objectoriented",
                "level": 7
            },
            {
                "skill": "algorithmic",
                "level": 7
            },
            {
                "skill": "pair",
                "level": 1
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    false,
                    true,
                    true,
                    false,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    true,
                    false,
                    false,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    false,
                    false,
                    true,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    true,
                    false,
                    false,
                    true,
                    false,
                    false
                ]
            }
        ]
    },
    {
        "id": "5dccc018c0037c2ce27f77be",
        "index": 24,
        "guid": "e6f821b8-05db-47f6-aa17-919b2f3bb996",
        "isManager": true,
        "githubUrl": "http://github.com",
        "picture": "http://placehold.it/32x32",
        "name": "Elvia Ashley",
        "gender": "female",
        "email": "elviaashley@artiq.com",
        "phone": "+1 (820) 449-3999",
        "address": "714 Visitation Place, Blue, New Hampshire, 7169",
        "about": "Occaecat nostrud reprehenderit cupidatat ad nisi veniam. Dolor eu amet in consectetur mollit sint fugiat cupidatat enim anim mollit in incididunt. Anim laborum Lorem duis nisi qui minim magna ea proident occaecat. Tempor deserunt ipsum exercitation est. Qui duis consequat magna magna id magna dolor culpa consectetur ad. Exercitation aliqua nulla reprehenderit excepteur laborum do pariatur nostrud ea nulla ut ex.\r\n",
        "skills": [
            {
                "skill": "database",
                "level": 6
            },
            {
                "skill": "devtool",
                "level": 10
            },
            {
                "skill": "frontend",
                "level": 1
            },
            {
                "skill": "objectoriented",
                "level": 3
            },
            {
                "skill": "algorithmic",
                "level": 1
            },
            {
                "skill": "pair",
                "level": 1
            }
        ],
        "badges": [
            {
                "initiative": "drove",
                "badges": [
                    false,
                    false,
                    false,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "quantum",
                "badges": [
                    false,
                    true,
                    true,
                    true,
                    true,
                    false
                ]
            },
            {
                "initiative": "uber",
                "badges": [
                    false,
                    false,
                    false,
                    false,
                    false,
                    true
                ]
            },
            {
                "initiative": "virtualintake",
                "badges": [
                    false,
                    false,
                    false,
                    true,
                    false,
                    true
                ]
            }
        ]
    }
];

export default employees;