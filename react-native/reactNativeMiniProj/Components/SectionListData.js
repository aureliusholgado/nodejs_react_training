import {animalBreeds} from './AllBreeds.js'

export const SectionListData = [
    {
        title: 'A',
        data: [],
        collapsed: true
    },
    {
        title: 'B',
        data: [],
        collapsed: true
    },
    {
        title: 'C',
        data: [],
        collapsed: true
    },
    {
        title: 'D',
        data: [],
        collapsed: true
    },
    {
        title: 'E',
        data: [],
        collapsed: true
    },
    {
        title: 'F',
        data: [],
        collapsed: true
    },
    {
        title: 'G',
        data: [],
        collapsed: true
    },
    {
        title: 'H',
        data: [],
        collapsed: true
    },
    {
        title: 'I',
        data: [],
        collapsed: true
    },
    {
        title: 'J',
        data: [],
        collapsed: true
    },
    {
        title: 'K',
        data: [],
        collapsed: true
    },
    {
        title: 'L',
        data: [],
        collapsed: true
    },
    {
        title: 'M',
        data: [],
        collapsed: true
    },
    {
        title: 'N',
        data: [],
        collapsed: true
    },
    {
        title: 'O',
        data: [],
        collapsed: true
    },
    {
        title: 'P',
        data: [],
        collapsed: true
    },
    {
        title: 'Q',
        data: [],
        collapsed: true
    },
    {
        title: 'R',
        data: [],
        collapsed: true
    },
    {
        title: 'S',
        data: [],
        collapsed: true
    },
    {
        title: 'T',
        data: [],
        collapsed: true
    },
    {
        title: 'U',
        data: [],
        collapsed: true
    },
    {
        title: 'V',
        data: [],
        collapsed: true
    },
    {
        title: 'W',
        data: [],
        collapsed: true
    },
    {
        title: 'X',
        data: [],
        collapsed: true
    },
    {
        title: 'Y',
        data: [],
        collapsed: true
    },
    {
        title: 'Z',
        data: [],
        collapsed: true
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