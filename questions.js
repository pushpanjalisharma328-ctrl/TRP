const questions = {

    mathematics: [
        {
            question: "What is the derivative of x²?",
            options: ["x", "2x", "x³", "2"],
            answer: "2x",
            difficulty: "easy"
        },
        {
            question: "What is the integral of 2x?",
            options: ["x² + C", "2x² + C", "x + C", "2 + C"],
            answer: "x² + C",
            difficulty: "easy"
        },
        {
            question: "What is the value of sin 90°?",
            options: ["0", "1", "-1", "1/2"],
            answer: "1",
            difficulty: "easy"
        },
        {
            question: "What is the determinant of [[1,2],[3,4]]?",
            options: ["2", "-2", "10", "4"],
            answer: "-2",
            difficulty: "medium"
        },
        {
            question: "What is the derivative of eˣ?",
            options: ["xeˣ", "eˣ", "eˣ⁺¹", "1/eˣ"],
            answer: "eˣ",
            difficulty: "medium"
        },
        {
            question: "What is the sum of the first 10 natural numbers?",
            options: ["45", "50", "55", "60"],
            answer: "55",
            difficulty: "easy"
        },
        {
            question: "What is the value of log₁₀(1000)?",
            options: ["2", "3", "10", "100"],
            answer: "3",
            difficulty: "medium"
        },
        {
            question: "If f(x) = x³, what is f'(2)?",
            options: ["6", "8", "12", "16"],
            answer: "12",
            difficulty: "medium"
        },
        {
            question: "What are the roots of x² - 5x + 6 = 0?",
            options: ["1, 6", "2, 3", "-2, -3", "1, 5"],
            answer: "2, 3",
            difficulty: "medium"
        },
        {
            question: "What is the value of the limit (sin x)/x as x approaches 0?",
            options: ["0", "1", "Infinity", "-1"],
            answer: "1",
            difficulty: "hard"
        }
    ],

    programming: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Tool Multi Language",
                "Home Text Markup Language"
            ],
            answer: "Hyper Text Markup Language",
            difficulty: "easy"
        },
        {
            question: "Which language is used to style web pages?",
            options: ["HTML", "CSS", "C++", "Python"],
            answer: "CSS",
            difficulty: "easy"
        },
        {
            question: "Which keyword declares a block-scoped variable in JavaScript?",
            options: ["var", "let", "print", "define"],
            answer: "let",
            difficulty: "easy"
        },
        {
            question: "Which symbol is used for strict equality in JavaScript?",
            options: ["=", "==", "===", "!="],
            answer: "===",
            difficulty: "medium"
        },
        {
            question: "Which data type represents true or false?",
            options: ["String", "Number", "Boolean", "Array"],
            answer: "Boolean",
            difficulty: "easy"
        },
        {
            question: "What is the index of the first element in a JavaScript array?",
            options: ["0", "1", "-1", "2"],
            answer: "0",
            difficulty: "easy"
        },
        {
            question: "Which method adds an element to the end of an array?",
            options: ["pop()", "push()", "shift()", "slice()"],
            answer: "push()",
            difficulty: "medium"
        },
        {
            question: "Which HTML tag creates a hyperlink?",
            options: ["<link>", "<a>", "<href>", "<p>"],
            answer: "<a>",
            difficulty: "easy"
        },
        {
            question: "What does DOM stand for?",
            options: [
                "Data Object Model",
                "Document Object Model",
                "Digital Ordinance Model",
                "Document Orientation Method"
            ],
            answer: "Document Object Model",
            difficulty: "medium"
        },
        {
            question: "What is the output of 2 + '3' in JavaScript?",
            options: ["5", "23", "6", "Error"],
            answer: "23",
            difficulty: "hard"
        }
    ],

    physics: [
        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            answer: "Newton",
            difficulty: "easy"
        },
        {
            question: "What is the approximate speed of light in vacuum?",
            options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10⁷ m/s"],
            answer: "3 × 10⁸ m/s",
            difficulty: "easy"
        },
        {
            question: "Which instrument measures electric current?",
            options: ["Voltmeter", "Ammeter", "Barometer", "Thermometer"],
            answer: "Ammeter",
            difficulty: "easy"
        },
        {
            question: "What is the SI unit of power?",
            options: ["Joule", "Newton", "Watt", "Volt"],
            answer: "Watt",
            difficulty: "easy"
        },
        {
            question: "Which law explains the relation F = ma?",
            options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Ohm's Law"],
            answer: "Newton's Second Law",
            difficulty: "medium"
        },
        {
            question: "What is the dimensional formula of velocity?",
            options: ["[LT⁻¹]", "[LT⁻²]", "[MLT⁻¹]", "[L²T⁻¹]"],
            answer: "[LT⁻¹]",
            difficulty: "medium"
        },
        {
            question: "What is the SI unit of electrical resistance?",
            options: ["Ampere", "Volt", "Ohm", "Coulomb"],
            answer: "Ohm",
            difficulty: "easy"
        },
        {
            question: "What is the acceleration due to gravity near Earth's surface?",
            options: ["4.9 m/s²", "9.8 m/s²", "19.6 m/s²", "98 m/s²"],
            answer: "9.8 m/s²",
            difficulty: "medium"
        },
        {
            question: "Which quantity is conserved in an isolated system during a collision?",
            options: ["Momentum", "Velocity", "Acceleration", "Force"],
            answer: "Momentum",
            difficulty: "hard"
        },
        {
            question: "What is the SI unit of magnetic flux?",
            options: ["Tesla", "Weber", "Henry", "Farad"],
            answer: "Weber",
            difficulty: "hard"
        }
    ],

    chemistry: [
        {
            question: "What is the chemical symbol of Gold?",
            options: ["Ag", "Au", "Gd", "Go"],
            answer: "Au",
            difficulty: "easy"
        },
        {
            question: "What is the atomic number of Carbon?",
            options: ["4", "6", "8", "12"],
            answer: "6",
            difficulty: "easy"
        },
        {
            question: "What is the chemical formula of water?",
            options: ["CO₂", "H₂O", "O₂", "H₂O₂"],
            answer: "H₂O",
            difficulty: "easy"
        },
        {
            question: "A solution with pH 7 at 25°C is:",
            options: ["Acidic", "Basic", "Neutral", "Strongly acidic"],
            answer: "Neutral",
            difficulty: "medium"
        },
        {
            question: "Which gas is released during photosynthesis?",
            options: ["Nitrogen", "Oxygen", "Hydrogen", "Carbon dioxide"],
            answer: "Oxygen",
            difficulty: "easy"
        },
        {
            question: "What type of bond involves sharing electron pairs?",
            options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
            answer: "Covalent",
            difficulty: "medium"
        },
        {
            question: "What is Avogadro's constant approximately?",
            options: ["6.022 × 10²³", "3 × 10⁸", "9.8", "1.6 × 10⁻¹⁹"],
            answer: "6.022 × 10²³",
            difficulty: "medium"
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Oxygen", "Hydrogen", "Lithium"],
            answer: "Hydrogen",
            difficulty: "easy"
        },
        {
            question: "What is the oxidation state of oxygen in most compounds?",
            options: ["+1", "-1", "-2", "+2"],
            answer: "-2",
            difficulty: "hard"
        },
        {
            question: "Which orbital has a spherical shape?",
            options: ["p orbital", "d orbital", "f orbital", "s orbital"],
            answer: "s orbital",
            difficulty: "hard"
        }
    ],

    biology: [
        {
            question: "What is the basic unit of life?",
            options: ["Tissue", "Organ", "Cell", "Atom"],
            answer: "Cell",
            difficulty: "easy"
        },
        {
            question: "Which organelle is known as the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi body"],
            answer: "Mitochondria",
            difficulty: "easy"
        },
        {
            question: "Which pigment helps plants absorb light?",
            options: ["Haemoglobin", "Chlorophyll", "Melanin", "Keratin"],
            answer: "Chlorophyll",
            difficulty: "easy"
        },
        {
            question: "What is the full form of DNA?",
            options: [
                "Deoxyribonucleic Acid",
                "Dinucleic Acid",
                "Deoxyribose Nitrogen Acid",
                "Double Nucleic Acid"
            ],
            answer: "Deoxyribonucleic Acid",
            difficulty: "easy"
        },
        {
            question: "Which organ pumps blood throughout the human body?",
            options: ["Lungs", "Brain", "Heart", "Kidney"],
            answer: "Heart",
            difficulty: "easy"
        },
        {
            question: "Which blood cells help fight infections?",
            options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
            answer: "White blood cells",
            difficulty: "medium"
        },
        {
            question: "Where does photosynthesis mainly occur in plant cells?",
            options: ["Nucleus", "Chloroplast", "Mitochondria", "Vacuole"],
            answer: "Chloroplast",
            difficulty: "medium"
        },
        {
            question: "Which molecule carries genetic information?",
            options: ["Glucose", "DNA", "Water", "ATP"],
            answer: "DNA",
            difficulty: "medium"
        },
        {
            question: "How many chromosomes are normally present in a human body cell?",
            options: ["23", "44", "46", "48"],
            answer: "46",
            difficulty: "medium"
        },
        {
            question: "Which process produces two genetically identical daughter cells?",
            options: ["Meiosis", "Mitosis", "Fertilization", "Mutation"],
            answer: "Mitosis",
            difficulty: "hard"
        }
    ]

};