export const groups = {
    skills: {
        skillType: {
            optionText: 'Skill type',
            groups: [
                {
                    groupName: 'Language',
                    match: ['Language'],
                },
                {
                    groupName: 'Library',
                    match: ['Library'],
                },
                {
                    groupName: 'Framework',
                    match: ['Framework'],
                },
                {
                    groupName: 'Database',
                    match: ['Database'],
                },
            ]
        },
        years: {
            optionText: 'Years of experience',
            groups: [
                {
                    groupName: '20 or more years',
                    match: [20],
                },
                {
                    groupName: '15 to 20 years',
                    match: [15, 16, 17, 18, 19],
                },
                {
                    groupName: '10 to 15 years',
                    match: [10, 11, 12, 13, 14],
                },
                {
                    groupName: '5 to 10 years',
                    match: [5, 6, 7, 8, 9],
                },
                {
                    groupName: '1 to 5 years',
                    match: [1, 2, 3, 4],
                },
                {
                    groupName: 'Learning now',
                    match: [0],
                },
            ]
        }
    }
}