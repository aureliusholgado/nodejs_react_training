import {animalBreeds} from './AllBreeds.js'

export const SectionListData = [
    {
        title: 'A',
        data: [],
        collapsed: false
    },
    {
        title: 'B',
        data: [],
        collapsed: false
    },
    {
        title: 'C',
        data: [],
        collapsed: false
    },
    {
        title: 'D',
        data: [],
        collapsed: false
    },
    {
        title: 'E',
        data: [],
        collapsed: false
    },
    {
        title: 'F',
        data: [],
        collapsed: false
    },
    {
        title: 'G',
        data: [],
        collapsed: false
    },
    {
        title: 'H',
        data: [],
        collapsed: false
    },
    {
        title: 'I',
        data: [],
        collapsed: false
    },
    {
        title: 'J',
        data: [],
        collapsed: false
    },
    {
        title: 'K',
        data: [],
        collapsed: false
    },
    {
        title: 'L',
        data: [],
        collapsed: false
    },
    {
        title: 'M',
        data: [],
        collapsed: false
    },
    {
        title: 'N',
        data: [],
        collapsed: false
    },
    {
        title: 'O',
        data: [],
        collapsed: false
    },
    {
        title: 'P',
        data: [],
        collapsed: false
    },
    {
        title: 'Q',
        data: [],
        collapsed: false
    },
    {
        title: 'R',
        data: [],
        collapsed: false
    },
    {
        title: 'S',
        data: [],
        collapsed: false
    },
    {
        title: 'T',
        data: [],
        collapsed: false
    },
    {
        title: 'U',
        data: [],
        collapsed: false
    },
    {
        title: 'V',
        data: [],
        collapsed: false
    },
    {
        title: 'W',
        data: [],
        collapsed: false
    },
    {
        title: 'X',
        data: [],
        collapsed: false
    },
    {
        title: 'Y',
        data: [],
        collapsed: false
    },
    {
        title: 'Z',
        data: [],
        collapsed: false
    },
];


// Sort the animalBreeds and populate SectionListData
animalBreeds.forEach((breed) => {
    const firstLetter = breed[0].toUpperCase();
    const sectionIndex = SectionListData.findIndex((section) => section.title === firstLetter);

    if (sectionIndex !== -1) {
        SectionListData[sectionIndex].data.push(breed);
    }
});

// Sort the data within each section
SectionListData.forEach((section) => {
    section.data.sort();
});

// Optionally, sort SectionListData by section titles
SectionListData.sort((a, b) => a.title.localeCompare(b.title));